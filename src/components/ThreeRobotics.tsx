"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu, RotateCcw, Activity } from "lucide-react";

type ModelType = "ARM" | "DRONE" | "NEURAL";

export default function ThreeRobotics() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeModel, setActiveModel] = useState<ModelType>("ARM");
  
  // Slider Controls for Robotic Arm Joints
  const [baseRot, setBaseRot] = useState(0);
  const [shoulderRot, setShoulderRot] = useState(0.4);
  const [elbowRot, setElbowRot] = useState(-0.3);

  // References to animate Three.js elements
  const sceneRef = useRef<THREE.Scene | null>(null);
  const armBaseRef = useRef<THREE.Group | null>(null);
  const armShoulderRef = useRef<THREE.Group | null>(null);
  const armElbowRef = useRef<THREE.Group | null>(null);
  const droneGroupRef = useRef<THREE.Group | null>(null);
  const propellersRef = useRef<THREE.Mesh[]>([]);
  const neuralGroupRef = useRef<THREE.Group | null>(null);

  // Handle Model switching
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Transparent or dark space background
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. Setup Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00e5ff, 1.8);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xff00ff, 0.8);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // 3. Build Objects based on active tab
    const cyanWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });

    const magentaWireMaterial = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });

    const pointMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
    });

    // --- ROBOTIC ARM BUILD ---
    if (activeModel === "ARM") {
      const armGroup = new THREE.Group();
      
      // Base stand
      const baseGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.5, 16);
      const baseMesh = new THREE.Mesh(baseGeo, cyanWireMaterial);
      baseMesh.position.y = 0.25;
      armGroup.add(baseMesh);

      // Rotating base joint
      const baseJoint = new THREE.Group();
      baseJoint.position.y = 0.5;
      armGroup.add(baseJoint);
      armBaseRef.current = baseJoint;

      // Lower segment (Shoulder node)
      const shoulderGeo = new THREE.SphereGeometry(0.4, 8, 8);
      const shoulderMesh = new THREE.Mesh(shoulderGeo, magentaWireMaterial);
      baseJoint.add(shoulderMesh);

      // Lower link bone
      const lowerBoneGroup = new THREE.Group();
      lowerBoneGroup.position.y = 0.4;
      baseJoint.add(lowerBoneGroup);
      armShoulderRef.current = lowerBoneGroup;

      const lowerLinkGeo = new THREE.CylinderGeometry(0.18, 0.18, 2.2, 8);
      lowerLinkGeo.translate(0, 1.1, 0); // Move origin to base of bone
      const lowerLinkMesh = new THREE.Mesh(lowerLinkGeo, cyanWireMaterial);
      lowerBoneGroup.add(lowerLinkMesh);

      // Elbow joint
      const elbowJoint = new THREE.Group();
      elbowJoint.position.y = 2.2;
      lowerBoneGroup.add(elbowJoint);
      armElbowRef.current = elbowJoint;

      const elbowGeo = new THREE.SphereGeometry(0.3, 8, 8);
      const elbowMesh = new THREE.Mesh(elbowGeo, magentaWireMaterial);
      elbowJoint.add(elbowMesh);

      // Upper link bone
      const upperLinkGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.8, 8);
      upperLinkGeo.translate(0, 0.9, 0); // Move origin
      const upperLinkMesh = new THREE.Mesh(upperLinkGeo, cyanWireMaterial);
      elbowJoint.add(upperLinkMesh);

      // End Effector/Claw
      const effectorGeo = new THREE.ConeGeometry(0.25, 0.5, 4);
      effectorGeo.translate(0, 2.0, 0);
      const effectorMesh = new THREE.Mesh(effectorGeo, magentaWireMaterial);
      elbowJoint.add(effectorMesh);

      armGroup.position.y = -1.5;
      scene.add(armGroup);
    }

    // --- QUADCOPTER DRONE BUILD ---
    if (activeModel === "DRONE") {
      const droneGroup = new THREE.Group();
      droneGroupRef.current = droneGroup;

      // Center Core
      const coreGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.4, 8);
      const coreMesh = new THREE.Mesh(coreGeo, cyanWireMaterial);
      droneGroup.add(coreMesh);

      // 4 Extension Arms
      const armLength = 1.8;
      const angles = [Math.PI/4, 3*Math.PI/4, -Math.PI/4, -3*Math.PI/4];
      propellersRef.current = [];

      angles.forEach((angle) => {
        const armGeo = new THREE.BoxGeometry(0.12, 0.08, armLength);
        const armMesh = new THREE.Mesh(armGeo, cyanWireMaterial);
        
        // Pivot arm from core center outward
        armMesh.rotation.y = angle;
        armMesh.position.x = Math.sin(angle) * (armLength/2);
        armMesh.position.z = Math.cos(angle) * (armLength/2);
        droneGroup.add(armMesh);

        // Motor cylinder at end of arm
        const motorGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.25, 8);
        const motorMesh = new THREE.Mesh(motorGeo, magentaWireMaterial);
        motorMesh.position.set(
          Math.sin(angle) * armLength,
          0.12,
          Math.cos(angle) * armLength
        );
        droneGroup.add(motorMesh);

        // Propeller mesh
        const propGeo = new THREE.BoxGeometry(0.8, 0.02, 0.06);
        const propMesh = new THREE.Mesh(propGeo, magentaWireMaterial);
        propMesh.position.set(
          Math.sin(angle) * armLength,
          0.25,
          Math.cos(angle) * armLength
        );
        droneGroup.add(propMesh);
        propellersRef.current.push(propMesh);
      });

      droneGroup.position.set(0, 0, 0);
      scene.add(droneGroup);
    }

    // --- NEURAL NETWORK SPHERE BUILD ---
    if (activeModel === "NEURAL") {
      const neuralGroup = new THREE.Group();
      neuralGroupRef.current = neuralGroup;

      const sphereGeo = new THREE.SphereGeometry(2.4, 16, 16);
      const pointsMesh = new THREE.Points(sphereGeo, pointMaterial);
      neuralGroup.add(pointsMesh);

      // Node connection lines
      const lineGeo = new THREE.WireframeGeometry(sphereGeo);
      const lines = new THREE.LineSegments(lineGeo, magentaWireMaterial);
      neuralGroup.add(lines);

      // Random floating sub-nodes inside sphere
      const subPointsCount = 20;
      const subPointsGeo = new THREE.BufferGeometry();
      const positions = [];
      for(let i=0; i<subPointsCount; i++) {
        // Random spherical coordinates
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.random() * 2.2; // random radius inside
        positions.push(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );
      }
      subPointsGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      const subPoints = new THREE.Points(subPointsGeo, new THREE.PointsMaterial({color: 0x00e5ff, size: 0.18}));
      neuralGroup.add(subPoints);

      scene.add(neuralGroup);
    }

    // 4. Animation loop
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Drone hover/spin props
      if (activeModel === "DRONE" && droneGroupRef.current) {
        // Subtle hover floating movement (Y axis)
        droneGroupRef.current.position.y = Math.sin(elapsedTime * 2) * 0.25;
        // Spin rotors
        propellersRef.current.forEach((prop) => {
          prop.rotation.y += 0.4;
        });
        // Slow yaw rotation
        droneGroupRef.current.rotation.y += 0.003;
      }

      // Neural Sphere rotating
      if (activeModel === "NEURAL" && neuralGroupRef.current) {
        neuralGroupRef.current.rotation.y = elapsedTime * 0.12;
        neuralGroupRef.current.rotation.x = elapsedTime * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [activeModel]);

  // Update Robotic Arm joint angles from sliders
  useEffect(() => {
    if (activeModel === "ARM") {
      if (armBaseRef.current) armBaseRef.current.rotation.y = baseRot;
      if (armShoulderRef.current) armShoulderRef.current.rotation.z = shoulderRot;
      if (armElbowRef.current) armElbowRef.current.rotation.z = elbowRot;
    }
  }, [baseRot, shoulderRot, elbowRot, activeModel]);

  const resetSliders = () => {
    setBaseRot(0);
    setShoulderRot(0.4);
    setElbowRot(-0.3);
  };

  return (
    <section className="relative py-24 border-t border-neon-cyan/10 bg-[#050b14] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neon-cyan tracking-widest uppercase mb-1">
            <Cpu className="h-3.5 w-3.5 text-neon-cyan animate-pulse" />
            <span>3D WEBGL GRAPHICS CONSOLE</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-wider text-white">
            ROBOTICS COMMAND CENTER
          </h2>
          <div className="h-0.5 w-20 bg-neon-cyan mt-2" />
        </div>

        {/* HUD UI Split Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: 3D Mount Viewport */}
          <div className="lg:col-span-8 flex flex-col justify-between glass-card p-4 rounded-md min-h-[380px] relative">
            
            {/* Viewport Header */}
            <div className="flex items-center justify-between border-b border-neon-cyan/15 pb-2.5 mb-2 font-mono text-[10px] text-gray-500">
              <div className="flex items-center gap-1.5 text-neon-cyan font-bold">
                <Activity className="h-3.5 w-3.5 animate-pulse" />
                <span>RENDER VIEWPORT: {activeModel}_DRAFT_GRID</span>
              </div>
              <span>BUFFER: 60FPS</span>
            </div>

            {/* ThreeJS Container */}
            <div
              ref={mountRef}
              className="flex-grow w-full min-h-[300px] max-h-[400px] relative cursor-grab active:cursor-grabbing"
            />
            
            {/* Watermark grid coordinate status */}
            <div className="absolute bottom-6 left-6 font-mono text-[8px] text-neon-cyan/50 pointer-events-none select-none">
              GRID: L_SYS_REF // X: 0.00 Y: 0.00 Z: 0.00
            </div>

          </div>

          {/* Right Panel: Controls & Telemetry Stats */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-card p-6 rounded-md">
            
            <div className="space-y-6">
              
              {/* Category Select Toggles */}
              <div>
                <span className="font-mono text-[9px] text-gray-500 block uppercase mb-2">
                  SELECT 3D MATRIX MODEL:
                </span>
                
                <div className="grid grid-cols-3 gap-2 font-mono text-[9px] font-bold">
                  {(["ARM", "DRONE", "NEURAL"] as ModelType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveModel(tab)}
                      className={`py-2 text-center border transition-all ${
                        activeModel === tab
                          ? "bg-neon-cyan/10 text-neon-cyan border-neon-cyan"
                          : "border-neon-cyan/15 text-gray-400 hover:text-white hover:border-neon-cyan/40"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Settings Fields (Robotic Arm controls or generic stats) */}
              <div className="border-t border-neon-cyan/15 pt-5 min-h-[170px]">
                {activeModel === "ARM" && (
                  <div className="space-y-4 font-mono text-[10px]">
                    <span className="text-neon-cyan font-bold block">{"// JOINT DEGREE MANIPULATORS:"}</span>
                    
                    {/* Base rotation slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-gray-400">
                        <span>BASE ROTATION (yaw):</span>
                        <span>{Math.round((baseRot * 180)/Math.PI)}°</span>
                      </div>
                      <input
                        type="range"
                        min="-3.14"
                        max="3.14"
                        step="0.05"
                        value={baseRot}
                        onChange={(e) => setBaseRot(parseFloat(e.target.value))}
                        className="w-full h-1 bg-[#0a192f] border border-neon-cyan/25 accent-neon-cyan rounded-md"
                      />
                    </div>

                    {/* Shoulder rotation slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-gray-400">
                        <span>SHOULDER ANGLE (pitch):</span>
                        <span>{Math.round((shoulderRot * 180)/Math.PI)}°</span>
                      </div>
                      <input
                        type="range"
                        min="-0.8"
                        max="1.5"
                        step="0.05"
                        value={shoulderRot}
                        onChange={(e) => setShoulderRot(parseFloat(e.target.value))}
                        className="w-full h-1 bg-[#0a192f] border border-neon-cyan/25 accent-neon-cyan rounded-md"
                      />
                    </div>

                    {/* Elbow rotation slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-gray-400">
                        <span>ELBOW JOINT ANGLE:</span>
                        <span>{Math.round((elbowRot * 180)/Math.PI)}°</span>
                      </div>
                      <input
                        type="range"
                        min="-1.5"
                        max="1.5"
                        step="0.05"
                        value={elbowRot}
                        onChange={(e) => setElbowRot(parseFloat(e.target.value))}
                        className="w-full h-1 bg-[#0a192f] border border-neon-cyan/25 accent-neon-cyan rounded-md"
                      />
                    </div>

                    <button
                      onClick={resetSliders}
                      className="flex items-center gap-1.5 border border-neon-cyan/30 bg-[#0a192f]/50 px-3 py-1.5 text-[9px] hover:bg-neon-cyan/15 hover:text-white transition-all rounded mt-2 uppercase font-bold"
                    >
                      <RotateCcw className="h-3 w-3" />
                      Reset joints
                    </button>
                  </div>
                )}

                {activeModel === "DRONE" && (
                  <div className="space-y-3 font-mono text-[10px] text-gray-400">
                    <span className="text-neon-cyan font-bold block">{"// FLIGHT CONTROLLER STATUS:"}</span>
                    <div className="grid grid-cols-2 gap-2 bg-black/40 border border-neon-cyan/10 p-3 rounded">
                      <span>STABILIZATION:</span>
                      <span className="text-green-400 font-bold">NOMINAL</span>
                      
                      <span>PROP SPIN SPEED:</span>
                      <span className="text-neon-cyan">8500 RPM</span>
                      
                      <span>ESTIMATED YAW:</span>
                      <span className="text-white">DYNAMIC</span>
                      
                      <span>BATTERY LEVEL:</span>
                      <span className="text-green-400 font-bold">98%</span>
                    </div>
                    <p className="text-[9px] leading-relaxed pt-1 select-none text-gray-500">
                      The quadcopter model uses four independent motor links. Propellers spin at differential velocities to adjust pitch/roll yaw in simulation environments.
                    </p>
                  </div>
                )}

                {activeModel === "NEURAL" && (
                  <div className="space-y-3 font-mono text-[10px] text-gray-400">
                    <span className="text-neon-cyan font-bold block">{"// NEURAL NETWORK CONSOLE:"}</span>
                    <div className="grid grid-cols-2 gap-2 bg-black/40 border border-neon-cyan/10 p-3 rounded">
                      <span>SPHERE VERTICES:</span>
                      <span className="text-white">289 NODES</span>
                      
                      <span>CONN LINES:</span>
                      <span className="text-neon-cyan">512 PATHS</span>
                      
                      <span>SYNAPSE WEIGHTS:</span>
                      <span className="text-white">RANDOMIZED</span>
                      
                      <span>CORE ACTIVITY:</span>
                      <span className="text-green-400 font-bold">OPTIMAL</span>
                    </div>
                    <p className="text-[9px] leading-relaxed pt-1 select-none text-gray-500">
                      Displays a 3-dimensional spherical node structure connecting nearby vertices. Sub-nodes simulate sensory weight distribution changes in deep neural networks.
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* General diagnostics note at footer */}
            <div className="font-mono text-[9px] text-gray-500 border-t border-neon-cyan/15 pt-4 mt-4 select-none">
              <span>SYSTEM PROTOCOL: WEBGL_2.0</span>
              <br />
              <span>SHADERS: WIREFRAME_VFX</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
