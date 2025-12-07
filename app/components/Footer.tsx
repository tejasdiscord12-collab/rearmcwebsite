"use client";
import { useState } from 'react';

export default function Footer() {
  const [copiedIP, setCopiedIP] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText('play.rearmc.fun');
    setCopiedIP(true);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3 className="text-glow">Rear<span style={{ color: 'var(--primary)' }}>MC</span></h3>
            <p>The ultimate Minecraft PvP experience. Join our community and dominate the arena today.</p>
            <div className="ip-display" onClick={copyIP}>
              <span className="ip-icon">🎮</span>
              <span className="ip-text">play.rearmc.fun</span>
              <span className="copy-hint">{copiedIP ? '✓ Copied!' : 'Click to copy'}</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/"><span className="link-arrow">→</span> Home</a></li>
              <li><a href="/vote"><span className="link-arrow">→</span> Vote</a></li>
              <li><a href="/staff"><span className="link-arrow">→</span> Staff</a></li>
              <li><a href="/rules"><span className="link-arrow">→</span> Rules</a></li>
              <li><a href="/store" target="_blank"><span className="link-arrow">→</span> Store</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Community</h4>
            <div className="social-links">
              <a href="#" className="social-btn discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span>Discord</span>
              </a>
              <a href="#" className="social-btn youtube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>YouTube</span>
              </a>
              <a href="#" className="social-btn twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter</span>
              </a>
            </div>
            <div className="stats-badge">
              <div className="stat">
                <span className="stat-value">1.2K+</span>
                <span className="stat-label">Players</span>
              </div>
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RearMC Network. All rights reserved.</p>
          <p>Not affiliated with Mojang Studios.</p>
        </div>
      </div>

      <style jsx>{`
          .footer {
            background: linear-gradient(to bottom, rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.95));
            padding: 5rem 0 2rem;
            margin-top: 6rem;
            border-top: 1px solid var(--border);
            position: relative;
            overflow: hidden;
          }
          
          .footer-glow {
            position: absolute;
            top: -100px;
            left: 50%;
            transform: translateX(-50%);
            width: 600px;
            height: 200px;
            background: radial-gradient(circle, var(--primary)10, transparent 70%);
            pointer-events: none;
          }
          
          .footer::before {
             content: '';
             position: absolute;
             top: 0;
             left: 0;
             right: 0;
             height: 1px;
             background: linear-gradient(90deg, transparent, var(--primary), transparent);
          }
  
          .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1.5fr;
            gap: 4rem;
            margin-bottom: 4rem;
            position: relative;
            z-index: 1;
          }
  
          .footer-col h3 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: var(--text-main);
          }
  
          .footer-col h4 {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: var(--primary);
            font-family: var(--font-main);
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
  
          .footer-col p {
            color: var(--text-dim);
            line-height: 1.6;
            margin-bottom: 1.5rem;
            max-width: 400px;
          }
          
          .ip-display {
             background: rgba(255, 0, 51, 0.1);
             padding: 1rem 1.5rem;
             display: inline-flex;
             align-items: center;
             gap: 12px;
             border-radius: 8px;
             border: 1px solid var(--primary);
             color: var(--primary);
             font-family: var(--font-main);
             font-size: 1.1rem;
             cursor: pointer;
             transition: all 0.3s;
             position: relative;
             overflow: hidden;
          }
          
          .ip-display:hover {
            background: rgba(255, 0, 51, 0.2);
            box-shadow: 0 0 30px var(--primary-glow);
            transform: translateY(-2px);
          }
          
          .ip-icon {
            font-size: 1.5rem;
          }
          
          .ip-text {
            font-weight: 700;
            letter-spacing: 0.05em;
          }
          
          .copy-hint {
            font-size: 0.75rem;
            color: var(--text-dim);
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            opacity: 0;
            transition: all 0.3s;
          }
          
          .ip-display:hover .copy-hint {
            bottom: -25px;
            opacity: 1;
          }
  
          .footer-col ul {
            list-style: none;
          }
  
          .footer-col ul li {
            margin-bottom: 0.75rem;
          }
  
          .footer-col ul li a {
            color: var(--text-dim);
            transition: all 0.3s;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .link-arrow {
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s;
            color: var(--primary);
          }
  
          .footer-col ul li a:hover {
            color: var(--primary);
            padding-left: 5px;
          }
          
          .footer-col ul li a:hover .link-arrow {
            opacity: 1;
            transform: translateX(0);
          }
          
          .social-links {
             display: flex;
             flex-direction: column;
             gap: 1rem;
             margin-bottom: 2rem;
          }
          
          .social-btn {
             display: flex;
             align-items: center;
             gap: 12px;
             color: var(--text-dim);
             transition: all 0.3s;
             padding: 0.75rem 1rem;
             border-radius: 6px;
             border: 1px solid transparent;
             background: rgba(255, 255, 255, 0.02);
          }
          
          .social-btn:hover {
             color: var(--text-main);
             transform: translateX(5px);
             border-color: currentColor;
             background: rgba(255, 255, 255, 0.05);
          }
          
          .social-btn.discord:hover { 
            color: #5865F2; 
            box-shadow: 0 0 20px rgba(88, 101, 242, 0.3);
          }
          .social-btn.youtube:hover { 
            color: #FF0000; 
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
          }
          .social-btn.twitter:hover { 
            color: #1DA1F2; 
            box-shadow: 0 0 20px rgba(29, 161, 242, 0.3);
          }
          
          .stats-badge {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            border: 1px solid var(--border);
          }
          
          .stat {
            flex: 1;
            text-align: center;
          }
          
          .stat-value {
            display: block;
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary);
            font-family: var(--font-main);
          }
          
          .stat-label {
            display: block;
            font-size: 0.75rem;
            color: var(--text-dark);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 4px;
          }
  
          .footer-bottom {
            border-top: 1px solid var(--border);
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            color: var(--text-dim);
            font-size: 0.9rem;
          }
  
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
  
            .footer-bottom {
              flex-direction: column;
              gap: 1rem;
              text-align: center;
            }
            
            .stats-badge {
              flex-direction: column;
            }
          }
        `}</style>
    </footer>
  );
}
