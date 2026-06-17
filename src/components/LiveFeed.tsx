"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Radio, Star, GitFork } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

export default function LiveFeed() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch("https://api.github.com/users/devarsh170407/repos?sort=updated&per_page=9");
        if (!res.ok) throw new Error("Failed to fetch repos");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="live-feed" className="relative py-24 border-t border-neon-cyan/15 bg-[#030712] overflow-hidden grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-share-tech-mono text-xs tracking-[0.3em] uppercase text-neon-cyan mb-2">
              —— 05 LIVE_FEED
            </div>
            <h2 className="font-unbounded text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white">
              GITHUB // PUBLIC REPOS
            </h2>
            <p className="font-share-tech-mono text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
              Real-time telemetry streams from public source code repositories and project archives.
            </p>
          </div>

          {/* Connection / Stream Status Widget */}
          <div className="font-share-tech-mono text-xs border border-neon-cyan/20 bg-[#050B14] px-4 py-2 flex items-center gap-3 self-start md:self-auto">
            <Radio className="h-4 w-4 text-[#FF5C00] animate-pulse shrink-0" />
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-500 uppercase leading-none">STREAM STATUS</span>
              <span className="font-bold text-white leading-tight uppercase mt-0.5">
                {loading && <span className="text-neon-cyan animate-pulse">FETCHING //...</span>}
                {error && <span className="text-red-500">CONNECTION_LOST</span>}
                {!loading && !error && (
                  <span className="text-green-400">STREAM_OK · {repos.length} REPOS</span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* 3-Column Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="relative border border-neon-cyan/10 bg-[#050B14] p-6 min-h-[180px] animate-pulse">
                <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF]/20" />
                <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF]/20" />
                <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF]/20" />
                <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF]/20" />
                
                <div className="h-4 bg-neon-cyan/10 w-2/3 mb-4 rounded-sm" />
                <div className="h-3 bg-neon-cyan/5 w-full mb-2 rounded-sm" />
                <div className="h-3 bg-neon-cyan/5 w-5/6 mb-4 rounded-sm" />
                <div className="flex gap-4">
                  <div className="h-3 bg-neon-cyan/10 w-12 rounded-sm" />
                  <div className="h-3 bg-neon-cyan/10 w-16 rounded-sm" />
                </div>
              </div>
            ))}
          </div>
        ) : error || repos.length === 0 ? (
          /* Empty / Fallback State */
          <div className="relative border border-neon-cyan/20 bg-[#050B14] p-12 text-center max-w-xl mx-auto">
            <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF]" />
            <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF]" />
            <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF]" />
            <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF]" />

            <GithubIcon className="h-12 w-12 text-neon-cyan/50 mx-auto mb-4" />
            <h4 className="font-unbounded text-sm font-bold text-white uppercase mb-2">
              FALLBACK SYSTEM ACTIVE
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed mb-6">
              The real-time telemetry feed from GitHub is currently unreachable. Direct operator link is active.
            </p>
            <a
              href="https://github.com/devarsh170407/devarsh170407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-neon-cyan/40 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#00E5FF] transition-all hover:bg-neon-cyan/10 hover:border-neon-cyan"
            >
              <span>VISIT GITHUB PROFILE</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ) : (
          /* Repos Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative border border-neon-cyan/20 bg-[#050B14] p-6 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] flex flex-col justify-between group min-h-[185px] cursor-pointer"
              >
                {/* L-brackets */}
                <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

                <div>
                  {/* Repo Title */}
                  <h4 className="font-unbounded font-black text-xs text-white uppercase group-hover:text-neon-cyan transition-colors mb-2 truncate">
                    {repo.name.replace(/[-_]/g, " ")}
                  </h4>

                  {/* Stars / Forks telemetry */}
                  <div className="flex gap-4 font-share-tech-mono text-[10px] text-gray-500 mb-3 select-none">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-neon-cyan" />
                      <span>STARS: {repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3 text-neon-cyan" />
                      <span>FORKS: {repo.forks_count}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-gray-400 font-sans leading-relaxed mb-4 line-clamp-2">
                    {repo.description || "No public description provided for this repository."}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-1">
                    {repo.language && (
                      <span className="font-share-tech-mono text-[8px] px-1.5 py-0.5 border border-[#FF5C00]/30 bg-[#FF5C00]/5 text-[#FF5C00] uppercase font-semibold">
                        {repo.language}
                      </span>
                    )}
                    {repo.topics.slice(0, 2).map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-share-tech-mono text-[8px] px-1.5 py-0.5 border border-neon-cyan/25 bg-[#030712] text-gray-400 uppercase font-semibold"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
