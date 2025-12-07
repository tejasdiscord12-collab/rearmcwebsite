"use client";
import React, { useState, useEffect } from 'react';

interface VoteSite {
  name: string;
  url: string;
  id: string;
}

interface Voter {
  name: string;
  votes: number;
}

export default function VoteClient() {
  const [serverStatus, setServerStatus] = useState<{ online: boolean; players: number }>({ online: false, players: 0 });
  const [goalPercent, setGoalPercent] = useState(0);
  const [totalVotes, setTotalVotes] = useState(1247); // Starting count
  const [userVotes, setUserVotes] = useState(0);
  const [username, setUsername] = useState('');
  const [cooldowns, setCooldowns] = useState<Record<string, number>>({});
  const [topVoters, setTopVoters] = useState<Voter[]>([
    { name: 'Steve_Pro', votes: 142 },
    { name: 'Alex_PVP', votes: 128 },
    { name: 'CreeperKing', votes: 98 },
    { name: 'Miner49', votes: 85 },
    { name: 'NotchClone', votes: 72 },
  ]);

  const voteSites: VoteSite[] = [
    { name: 'Minecraft Servers', url: 'https://minecraftservers.org/server/664369', id: 'mcservers' },
    { name: 'Planet Minecraft', url: 'https://www.planetminecraft.com/server/rearmc/', id: 'planetmc' },
    { name: 'TopG', url: 'https://topg.org/minecraft-servers/server-664369', id: 'topg' },
    { name: 'Minecraft MP', url: 'https://minecraft-mp.com/server/664369/', id: 'mcmp' },
  ];

  // Load data from localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem('rearmc_username');
    const savedUserVotes = localStorage.getItem('rearmc_user_votes');
    const savedTotalVotes = localStorage.getItem('rearmc_total_votes');
    const savedCooldowns = localStorage.getItem('rearmc_cooldowns');
    const savedLeaderboard = localStorage.getItem('rearmc_leaderboard');

    if (savedUsername) setUsername(savedUsername);
    if (savedUserVotes) setUserVotes(parseInt(savedUserVotes));
    if (savedTotalVotes) setTotalVotes(parseInt(savedTotalVotes));
    if (savedCooldowns) setCooldowns(JSON.parse(savedCooldowns));
    if (savedLeaderboard) setTopVoters(JSON.parse(savedLeaderboard));
  }, []);

  // Fetch Player Count
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
        console.error('Failed to fetch status', error);
      }
    };

    fetchStatus();
    setTimeout(() => setGoalPercent(78), 500);
  }, []);

  // Update cooldowns every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCooldowns(prev => {
        const updated = { ...prev };
        let changed = false;
        Object.keys(updated).forEach(key => {
          if (updated[key] > 0) {
            updated[key] = Math.max(0, updated[key] - 1000);
            changed = true;
          }
        });
        if (changed) {
          localStorage.setItem('rearmc_cooldowns', JSON.stringify(updated));
        }
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVote = (site: VoteSite) => {
    if (!username) {
      const name = prompt('Enter your Minecraft username to vote:');
      if (!name) return;
      setUsername(name);
      localStorage.setItem('rearmc_username', name);
    }

    // Open vote site
    window.open(site.url, '_blank');

    // Set cooldown (24 hours = 86400000ms)
    const newCooldowns = { ...cooldowns, [site.id]: 86400000 };
    setCooldowns(newCooldowns);
    localStorage.setItem('rearmc_cooldowns', JSON.stringify(newCooldowns));

    // Increment votes
    const newUserVotes = userVotes + 1;
    const newTotalVotes = totalVotes + 1;
    setUserVotes(newUserVotes);
    setTotalVotes(newTotalVotes);
    localStorage.setItem('rearmc_user_votes', newUserVotes.toString());
    localStorage.setItem('rearmc_total_votes', newTotalVotes.toString());

    // Update leaderboard
    updateLeaderboard(username, newUserVotes);
  };

  const updateLeaderboard = (playerName: string, votes: number) => {
    const updated = [...topVoters];
    const existingIndex = updated.findIndex(v => v.name === playerName);

    if (existingIndex >= 0) {
      updated[existingIndex].votes = votes;
    } else {
      updated.push({ name: playerName, votes });
    }

    updated.sort((a, b) => b.votes - a.votes);
    const top5 = updated.slice(0, 5);
    setTopVoters(top5);
    localStorage.setItem('rearmc_leaderboard', JSON.stringify(top5));
  };

  const formatCooldown = (ms: number) => {
    if (ms <= 0) return 'Ready!';
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  const canVote = (siteId: string) => {
    return !cooldowns[siteId] || cooldowns[siteId] <= 0;
  };

  return (
    <div className="page-container container">
      <div className="header animate-fade-in">
        <div className="live-badge">
          <span className={`dot ${serverStatus.online ? 'online' : 'offline'}`}></span>
          {serverStatus.online ? `${serverStatus.players} Players Online` : 'Server Offline'}
        </div>
        <h1 className="text-glow">VOTE</h1>
        <p>Support <span className="highlight">RearMC</span> and unlock free rewards.</p>
        {username && (
          <div className="user-stats">
            <span className="username">{username}</span>
            <span className="user-votes">{userVotes} votes this month</span>
          </div>
        )}
      </div>

      {/* Goal Counter */}
      <div className="goal-container">
        <div className="goal-header">
          <span>MONTHLY GOAL</span>
          <span className="goal-percent">{goalPercent}% REACHED</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${goalPercent}%` }}></div>
        </div>
        <p className="goal-reward">Reward: Double XP Weekend (at 100%)</p>
        <div className="total-votes">Total Votes: <span>{totalVotes.toLocaleString()}</span></div>
      </div>

      <div className="content-grid">
        <div className="vote-section">
          <h2 className="section-title">VOTE LINKS</h2>
          <div className="vote-list">
            {voteSites.map((site, index) => (
              <div key={index} className={`vote-card ${!canVote(site.id) ? 'disabled' : ''}`}>
                <div className="vote-number">0{index + 1}</div>
                <div className="vote-info">
                  <h3>{site.name}</h3>
                  <span className="reward-tag">REWARD: 1x VOTE KEY</span>
                  {!canVote(site.id) && (
                    <div className="cooldown-timer">
                      Cooldown: {formatCooldown(cooldowns[site.id])}
                    </div>
                  )}
                </div>
                <button
                  className={`vote-btn ${!canVote(site.id) ? 'disabled' : ''}`}
                  onClick={() => handleVote(site)}
                  disabled={!canVote(site.id)}
                >
                  {canVote(site.id) ? 'VOTE NOW' : 'COOLDOWN'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="leaderboard-section">
          <h2 className="section-title">TOP VOTERS (DEC)</h2>
          <div className="leaderboard-card">
            <div className="leaderboard-header">
              <span>Rank</span>
              <span>Player</span>
              <span>Votes</span>
            </div>
            <div className="leaderboard-list">
              {topVoters.map((voter, index) => (
                <div key={index} className={`leaderboard-item ${voter.name === username ? 'highlight-user' : ''}`}>
                  <div className={`rank rank-${index + 1}`}>#{index + 1}</div>
                  <div className="player-info">
                    <img src={`https://minotar.net/avatar/${voter.name}/32`} alt={voter.name} className="player-head" />
                    <span>{voter.name}</span>
                  </div>
                  <div className="votes">{voter.votes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          padding: 8rem 1.5rem;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .live-badge {
            background: rgba(0,0,0,0.4);
            border: 1px solid var(--border);
            padding: 4px 12px;
            border-radius: 20px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 1rem;
            font-size: 0.8rem;
            color: var(--text-dim);
            font-weight: 600;
        }
        
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #555; }
        .dot.online { background: #00ffaa; box-shadow: 0 0 5px #00ffaa; animation: pulse 2s infinite; }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .header h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        
        .highlight { color: var(--primary); }

        .header p {
          color: var(--text-dim);
          font-size: 1.25rem;
        }
        
        .user-stats {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: rgba(255, 0, 51, 0.1);
          border: 1px solid var(--primary);
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
        }
        
        .username {
          font-weight: 700;
          color: #fff;
          font-size: 1.1rem;
        }
        
        .user-votes {
          font-size: 0.9rem;
          color: var(--primary);
          font-weight: 600;
        }
        
        .goal-container {
            max-width: 800px;
            margin: 0 auto 5rem;
            background: var(--surface);
            padding: 1.5rem;
            border: 1px solid var(--border);
            border-radius: 2px;
            position: relative;
            overflow: hidden;
        }
        
        .goal-header {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            color: #fff;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
        }
        
        .goal-percent {
            color: var(--primary);
        }
        
        .progress-bar {
            height: 12px;
            background: rgba(255,255,255,0.05);
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 0.8rem;
            border: 1px solid rgba(255,255,255,0.05);
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), #d6002b);
            box-shadow: 0 0 15px var(--primary-glow);
            transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }
        
        .progress-fill::after {
            content: '';
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transform: skewX(-20deg) translateX(-150%);
            animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
            100% { transform: skewX(-20deg) translateX(150%); }
        }
        
        .goal-reward {
            text-align: center;
            font-size: 0.85rem;
            color: var(--text-dim);
            margin-bottom: 0.5rem;
        }
        
        .total-votes {
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-dim);
          margin-top: 0.5rem;
        }
        
        .total-votes span {
          color: var(--primary);
          font-weight: 700;
          font-size: 1.1rem;
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .section-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            color: #fff;
            border-left: 4px solid var(--primary);
            padding-left: 1rem;
        }
        
        .vote-list { display: flex; flex-direction: column; gap: 1rem; }
        
        .vote-card { 
          display: flex; 
          align-items: center; 
          background: var(--surface); 
          padding: 1.2rem 1.5rem; 
          border: 1px solid var(--border); 
          transition: all 0.2s;
          border-radius: 2px;
        }
        
        .vote-card:not(.disabled):hover { 
          transform: translateX(5px); 
          border-color: var(--primary); 
          background: rgba(255, 0, 51, 0.02); 
        }
        
        .vote-card.disabled {
          opacity: 0.5;
        }
        
        .vote-number { 
          font-family: var(--font-main); 
          font-size: 1.5rem; 
          color: var(--text-dim); 
          font-weight: 800; 
          margin-right: 1.5rem; 
          opacity: 0.2; 
        }
        
        .vote-info { flex: 1; }
        .vote-info h3 { font-size: 1.1rem; margin-bottom: 0.25rem; color: #fff; font-weight: 700; }
        .reward-tag { font-size: 0.75rem; font-weight: 600; color: var(--primary); letter-spacing: 0.05em; display: block; }
        
        .cooldown-timer {
          font-size: 0.75rem;
          color: var(--gold);
          margin-top: 0.25rem;
          font-weight: 600;
        }
        
        .vote-btn {
          background: var(--primary);
          color: #fff;
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .vote-btn:not(.disabled):hover {
          background: #d6002b;
          transform: scale(1.05);
        }
        
        .vote-btn.disabled {
          background: var(--surface-border);
          cursor: not-allowed;
        }
        
        .leaderboard-card { background: var(--surface); border: 1px solid var(--border); border-radius: 2px; }
        .leaderboard-header { display: grid; grid-template-columns: 60px 1fr 80px; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); font-weight: 700; color: var(--text-dim); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; }
        .leaderboard-item { display: grid; grid-template-columns: 60px 1fr 80px; padding: 1rem 1.5rem; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.03); transition: all 0.3s; }
        .leaderboard-item.highlight-user {
          background: rgba(255, 0, 51, 0.1);
          border-left: 3px solid var(--primary);
        }
        .rank { font-family: var(--font-main); font-weight: 800; color: var(--text-dark); }
        .rank-1 { color: #ffd700; text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
        .rank-2 { color: #c0c0c0; }
        .rank-3 { color: #cd7f32; }
        .player-info { display: flex; align-items: center; gap: 1rem; font-weight: 600; }
        .player-head { width: 32px; height: 32px; border-radius: 2px; }
        .votes { font-weight: 700; color: var(--primary); text-align: right; }
        
        @media (max-width: 900px) { 
          .content-grid { grid-template-columns: 1fr; }
          .vote-card { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .vote-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
