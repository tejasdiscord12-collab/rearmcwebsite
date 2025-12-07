"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [serverStatus, setServerStatus] = useState<{ online: boolean; players: number }>({ online: false, players: 0 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('https://api.mcsrvstat.us/2/play.rearmc.fun');
        const data = await response.json();
        setServerStatus({
          online: data.online,
          players: data.players ? data.players.online : 0
        });
      } catch (error) {
        console.error('Failed to fetch server status', error);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); // M
    return () => clearInterval(interval);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText('play.rearmc.fun');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/banner.jpg" alt="RearMC Background" className="hero-img" />
          <div className="vignette"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <div className="status-hud">
              <span className={`status-icon ${serverStatus.online ? 'online' : 'offline'}`}></span>
              <span className="status-text">{serverStatus.online ? `${serverStatus.players} PLAYERS ONLINE` : 'OFFLINE'}</span>
            </div>

            <h1 className="hero-title">THE APEX OF <br /><span className="text-primary-gradient">MINECRAFT PVP</span></h1>
            <p className="hero-subtitle">Join the ultimate competitive network. Custom engines, balanced economy, and seamless gameplay.</p>

            <div className="cta-wrapper">
              <button className="btn btn-primary join-btn" onClick={copyIP}>
                {copied ? 'IP COPIED!' : 'JOIN SERVER'}
                <span className="sub-text">{copied ? 'See you in game!' : 'play.rearmc.fun'}</span>
              </button>
              <Link href="/store" className="btn btn-outline store-cta">
                VISIT STORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Essentials */}
      <section className="essentials">
        <div className="container">
          <div className="grid-3">
            <div className="essential-card">
              <div className="essential-icon">🏆</div>
              <h3>Competitive Ladders</h3>
              <p>Rank up through our seasonal ELO system. Prove your skill and earn exclusive rewards every month.</p>
            </div>
            <div className="essential-card">
              <div className="essential-icon">🛡️</div>
              <h3>Advanced Anti-Cheat</h3>
              <p>Our custom-built anti-cheat ensures a fair playing field for everyone. No hackers, just skill.</p>
            </div>
            <div className="essential-card">
              <div className="essential-icon">⚡</div>
              <h3>Performance First</h3>
              <p>Optimized for 20TPS even during heavy combat. Experience lag-free PvP interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section">
        <div className="container">
          <div className="section-header">
            <h2>Server Roadmap</h2>
            <p>Our vision for the future of RearMC.</p>
          </div>

          <div className="roadmap">
            <div className="roadmap-line"></div>

            <div className="roadmap-item completed">
              <div className="dot"></div>
              <div className="roadmap-content">
                <span className="date">Q4 2024</span>
                <h3>Network Launch</h3>
                <p>Official release of Practice and FFA modes.</p>
              </div>
            </div>

            <div className="roadmap-item active">
              <div className="dot"></div>
              <div className="roadmap-content">
                <span className="date">NOW</span>
                <h3>Season 1: Awakening</h3>
                <p>First competitive season, introducing Crystal PvP and Clan Wars.</p>
              </div>
            </div>

            <div className="roadmap-item">
              <div className="dot"></div>
              <div className="roadmap-content">
                <span className="date">Q1 2025</span>
                <h3>The Expansion</h3>
                <p>New "Lifesteal" realm and cosmetic crate expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Feed / News */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest News</h2>
            <p>Keep up with the latest updates from the team.</p>
          </div>

          <div className="news-grid">
            <div className="news-card">
              <div className="news-tag update">UPDATE</div>
              <h3>Season 1 Patch Notes</h3>
              <p className="news-date">Dec 5, 2025</p>
              <p className="news-excerpt">We've balanced the diamond kit, updated the knockback profile, and fixed several map exploits...</p>
              <a href="#" className="read-more">Read More &rarr;</a>
            </div>
            <div className="news-card">
              <div className="news-tag event">EVENT</div>
              <h3>Winter Tournament</h3>
              <p className="news-date">Dec 1, 2025</p>
              <p className="news-excerpt">Sign up now for the 3v3 Winter Championship! Prize pool includes $500 Store Credit and exclusive tags.</p>
              <a href="#" className="read-more">Read More &rarr;</a>
            </div>
            <div className="news-card">
              <div className="news-tag community">COMMUNITY</div>
              <h3>Staff Applications Open</h3>
              <p className="news-date">Nov 28, 2025</p>
              <p className="news-excerpt">We are looking for dedicated moderators to join our growing team. Apply on Discord today.</p>
              <a href="#" className="read-more">Read More &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: -2;
            background: #0a0a0c;
        }
        
        .hero-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .vignette {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at center, rgba(16, 17, 20, 0.4) 0%, rgba(5, 5, 5, 0.95) 90%);
            z-index: -1;
        }

        .hero-content {
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          max-width: 800px;
          padding-left: 2rem;
          border-left: 4px solid var(--primary);
        }
        
        .status-hud {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(5px);
            padding: 8px 16px;
            border-radius: 4px;
            margin-bottom: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .status-icon {
            width: 8px;
            height: 8px;
            background: #ff3333;
            border-radius: 50%;
            box-shadow: 0 0 10px #ff3333;
        }
        
        .status-icon.online {
            background: #00ffaa;
            box-shadow: 0 0 10px #00ffaa;
        }
        
        .status-text {
            font-family: var(--font-main);
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: #fff;
        }

        .hero-title {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 3rem;
          max-width: 600px;
          line-height: 1.6;
        }
        
        .cta-wrapper {
            display: flex;
            gap: 1.5rem;
        }
        
        .join-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.8rem 3rem;
        }
        
        .sub-text {
            font-size: 0.75rem;
            font-weight: 500;
            opacity: 0.8;
            margin-top: 2px;
            text-transform: lowercase;
        }

        /* Essentials */
        .essentials {
            padding: 6rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            background: linear-gradient(to bottom, transparent, rgba(255,0,51,0.02));
        }
        
        .grid-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .essential-card {
            background: var(--surface);
            padding: 2.5rem;
            border: 1px solid var(--surface-border);
            border-radius: 2px;
            transition: all 0.3s ease;
        }
        
        .essential-card:hover {
            border-color: var(--primary);
            transform: translateY(-5px);
        }
        
        .essential-icon {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }
        
        .essential-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .essential-card p {
            color: var(--text-dim);
            line-height: 1.6;
        }
        
        /* Roadmap */
        .roadmap-section {
            padding: 8rem 0;
            position: relative;
        }
        
        .roadmap {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 0;
        }
        
        .roadmap-line {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--surface-border);
            transform: translateX(-50%);
        }
        
        .roadmap-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4rem;
            position: relative;
        }
        
        .roadmap-item:nth-child(even) {
            flex-direction: row-reverse;
            text-align: right;
        }
        
        .dot {
            position: absolute;
            left: 50%;
            width: 16px;
            height: 16px;
            background: var(--surface);
            border: 2px solid var(--text-dim);
            border-radius: 50%;
            transform: translateX(-50%);
            z-index: 2;
            transition: all 0.3s;
        }
        
        .roadmap-item.completed .dot, .roadmap-item.active .dot {
            background: var(--primary);
            border-color: var(--primary);
            box-shadow: 0 0 15px var(--primary-glow);
        }
        
        .roadmap-content {
            width: 45%;
            padding: 1.5rem;
            background: var(--surface);
            border: 1px solid var(--surface-border);
            border-radius: 4px;
        }
        
        .roadmap-item:hover .roadmap-content {
            border-color: var(--primary);
        }
        
        .date {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--primary);
            letter-spacing: 0.1em;
            display: block;
            margin-bottom: 0.5rem;
        }
        
        /* News */
        .news-section {
            padding: 6rem 0;
            background: #0a0a0c;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 5rem;
        }
        
        .section-header h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #fff;
        }
        
        .section-header p {
            color: var(--text-dim);
        }
        
        .news-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .news-card {
            background: var(--surface);
            padding: 2rem;
            border-left: 3px solid var(--surface-border);
            transition: all 0.3s;
        }
        
        .news-card:hover {
            border-left-color: var(--primary);
            background: var(--surface-hover);
        }
        
        .news-tag {
            display: inline-block;
            font-size: 0.7rem;
            font-weight: 800;
            padding: 4px 8px;
            background: rgba(255,255,255,0.1);
            color: #fff;
            border-radius: 2px;
            margin-bottom: 1rem;
        }
        
        .news-tag.update { background: rgba(0, 229, 255, 0.2); color: #00e5ff; }
        .news-tag.event { background: rgba(255, 215, 0, 0.2); color: #ffd700; }
        .news-tag.community { background: rgba(0, 255, 85, 0.2); color: #00ff55; }
        
        .news-date {
            font-size: 0.85rem;
            color: var(--text-dark);
            margin-bottom: 0.5rem;
        }
        
        .news-excerpt {
            color: var(--text-dim);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        .read-more {
            color: #fff;
            font-weight: 600;
            font-size: 0.9rem;
            transition: color 0.2s;
        }
        
        .read-more:hover {
            color: var(--primary);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-text { border-left: none; padding-left: 0; text-align: center; }
          .hero-text .status-hud { margin: 0 auto 2rem; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }
          .cta-wrapper { justify-content: center; flex-direction: column; }
          
          .roadmap-line { left: 20px; }
          .roadmap-item, .roadmap-item:nth-child(even) { flex-direction: row; text-align: left; }
          .dot { left: 20px; }
          .roadmap-content { width: calc(100% - 50px); margin-left: auto; }
        }
      `}</style>
    </div>
  );
}
