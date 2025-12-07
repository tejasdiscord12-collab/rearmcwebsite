"use client";
import { useState } from 'react';

export default function StaffClient() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const staff = [
    {
      name: 'Tejas',
      role: 'Owner',
      bio: 'Founder and Lead Developer of RearMC.',
      skin: 'https://minotar.net/avatar/Tejas/100',
      color: '#ff0033',
      discord: 'tejas#0000',
      joinDate: 'Jan 2024',
      stats: { bans: 247, warns: 892, playtime: '1,240h' }
    },
    {
      name: 'Shios',
      role: 'Developer',
      bio: 'Backend systems and plugin development.',
      skin: 'https://minotar.net/avatar/Shios/100',
      color: '#00e5ff',
      discord: 'shios#0000',
      joinDate: 'Feb 2024',
      stats: { commits: 1547, plugins: 12, playtime: '980h' }
    },
    {
      name: 'bmww',
      role: 'Sr Admin',
      bio: 'Community Manager and Rule Enforcer.',
      skin: 'https://minotar.net/avatar/bmww/100',
      color: '#ffd700',
      discord: 'bmww#0000',
      joinDate: 'Mar 2024',
      stats: { bans: 156, warns: 634, playtime: '750h' }
    },
  ];

  return (
    <div className="page-container container">
      <div className="header animate-fade-in">
        <div className="header-badge">
          <span className="pulse-dot"></span>
          {staff.length} Active Staff Members
        </div>
        <h1 className="text-glow">MEET THE TEAM</h1>
        <p>The dedicated staff members who keep RearMC running smoothly.</p>
      </div>

      <div className="staff-grid">
        {staff.map((member, index) => (
          <div
            key={index}
            className={`staff-card ${hoveredCard === index ? 'hovered' : ''}`}
            style={{ '--role-color': member.color, animationDelay: `${index * 100}ms` } as React.CSSProperties}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}20, transparent 70%)` }}></div>

            <div className="avatar-section">
              <div className="avatar-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.skin} alt={member.name} className="avatar" />
                <div className="avatar-ring" style={{ borderColor: member.color }}></div>
              </div>
              <div className="role-chip" style={{
                backgroundColor: `${member.color}20`,
                color: member.color,
                border: `1px solid ${member.color}60`,
                boxShadow: `0 0 20px ${member.color}40`
              }}>
                {member.role}
              </div>
            </div>

            <div className="card-content">
              <h2>{member.name}</h2>
              <p className="bio">{member.bio}</p>

              <div className="staff-meta">
                <div className="meta-item">
                  <i className="icon">📅</i>
                  <span>Joined {member.joinDate}</span>
                </div>
                <div className="meta-item">
                  <i className="icon">💬</i>
                  <span>{member.discord}</span>
                </div>
              </div>

              <div className="stats-grid">
                {Object.entries(member.stats).map(([key, value], i) => (
                  <div key={i} className="stat-item">
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{key}</div>
                  </div>
                ))}
              </div>

              <div className="card-footer">
                <span className="status-indicator online"></span>
                <span>Online Now</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page-container {
          padding: 8rem 1.5rem 4rem;
          position: relative;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }
        
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border);
          padding: 8px 20px;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-dim);
          font-weight: 600;
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }

        .header h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .header p {
          color: var(--text-dim);
          font-size: 1.15rem;
        }

        .staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin: 0 auto;
          max-width: 1400px;
        }

        .staff-card {
          background: var(--surface);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          display: flex;
          flex-direction: column;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .staff-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--role-color);
          box-shadow: 0 20px 60px -10px rgba(0,0,0,0.6), 0 0 40px var(--role-color)30;
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }
        
        .staff-card:hover .card-glow {
          opacity: 1;
        }

        .avatar-section {
          background: linear-gradient(to bottom, rgba(255,255,255,0.03), transparent);
          padding: 2.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          position: relative;
        }
        
        .avatar-wrapper {
          position: relative;
        }
        
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }
        
        .staff-card:hover .avatar {
          transform: scale(1.1) rotateY(5deg);
        }
        
        .avatar-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 2px solid;
          border-radius: 16px;
          opacity: 0;
          transition: all 0.4s;
          animation: rotate 3s linear infinite;
        }
        
        .staff-card:hover .avatar-ring {
          opacity: 0.6;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .role-chip {
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          font-family: var(--font-main);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          transition: all 0.3s;
        }
        
        .staff-card:hover .role-chip {
          transform: scale(1.05);
        }

        .card-content {
          padding: 1.5rem 2rem 2rem;
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .card-content h2 {
          font-size: 1.75rem;
          margin: 0;
          color: var(--text-main);
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        
        .bio {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          min-height: 48px;
        }
        
        .staff-meta {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding: 1rem 1.25rem;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-dim);
        }
        
        .icon {
          font-size: 1.1rem;
          filter: grayscale(0.2);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-top: 0.5rem;
        }
        
        .stat-item {
          background: rgba(0,0,0,0.3);
          padding: 1rem 0.75rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s;
        }
        
        .staff-card:hover .stat-item {
          background: rgba(0,0,0,0.4);
          border-color: var(--role-color)40;
        }
        
        .stat-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary);
          font-family: var(--font-main);
          display: block;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 0.7rem;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
        }
        
        .card-footer {
          border-top: 1px solid var(--border);
          padding: 1rem 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #aaa;
          font-size: 0.9rem;
          margin-top: auto;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #555;
        }
        
        .status-indicator.online {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse 2s infinite;
        }
        
        @media (max-width: 1200px) {
          .staff-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .header h1 { font-size: 2.5rem; }
          .staff-grid { 
            grid-template-columns: 1fr; 
            gap: 2rem;
            max-width: 500px;
          }
          .card-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
