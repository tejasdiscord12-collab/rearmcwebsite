"use client";

export default function StoreClient() {
  const packs = [
    {
      name: 'VIP',
      price: '$5.00',
      features: ['Fly in Lobby', 'VIP Kit', 'Reserved Slot', 'White Chat Color'],
      color: '#fbbf24',
      glow: 'rgba(251, 191, 36, 0.4)'
    },
    {
      name: 'MVP',
      price: '$15.00',
      features: ['All VIP perks', 'MVP Kit', 'Colored Chat', '3x Mystery Keys', 'Pet Selector'],
      color: '#3b82f6',
      glow: 'rgba(59, 130, 246, 0.4)'
    },
    {
      name: 'TITAN',
      price: '$35.00',
      features: ['All MVP perks', 'Titan Kit', 'Private Vaults', '5x Mystery Keys', 'Particle Trail', 'Priority Queue'],
      color: '#ff0033', // Neon Red for Top Tier
      glow: 'rgba(255, 0, 51, 0.4)',
      popular: true
    },
    {
      name: 'OVERLORD',
      price: '$75.00',
      features: ['All Titan perks', 'Overlord Kit', 'Unlimited Vaults', '10x Mystery Keys', 'Custom Title', 'Join Announcement'],
      color: '#a855f7',
      glow: 'rgba(168, 85, 247, 0.4)'
    },
  ];

  return (
    <div className="page-container container">
      <div className="header animate-fade-in">
        <h1 className="text-glow">STORE</h1>
        <p>Invest in your gameplay. Support the network.</p>
      </div>

      <div className="pricing-grid">
        {packs.map((pack, index) => (
          <div key={index} className={`pricing-card ${pack.popular ? 'popular' : ''}`}
            style={{ '--accent': pack.color, '--shadow': pack.glow } as React.CSSProperties}>
            {pack.popular && <div className="popular-tag">BEST VALUE</div>}
            <div className="card-header">
              <h3>{pack.name}</h3>
              <div className="price">{pack.price}</div>
            </div>
            <ul className="features">
              {pack.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <span className="check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn btn-gold buy-btn">ADD TO CART</button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page-container {
          padding: 8rem 1.5rem;
        }

        .header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .header h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .header p {
          color: var(--text-dim);
          font-size: 1.25rem;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-card {
           background: var(--surface);
           border: 1px solid var(--border);
           border-radius: 2px;
           padding: 3rem 2rem;
           text-align: center;
           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
           display: flex;
           flex-direction: column;
           position: relative;
           overflow: hidden;
        }
        
        .pricing-card.popular {
            border-color: var(--primary);
            box-shadow: 0 0 40px rgba(255, 0, 51, 0.1);
            transform: scale(1.05);
            z-index: 10;
        }
        
        .popular-tag {
            position: absolute;
            top: 15px;
            right: -30px;
            background: var(--primary);
            color: #fff;
            padding: 5px 40px;
            transform: rotate(45deg);
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .pricing-card:hover {
           transform: translateY(-10px) scale(1.02);
           border-color: var(--accent);
           box-shadow: 0 10px 50px -10px var(--shadow);
        }

        .card-header h3 {
          font-size: 2rem;
          color: #fff;
          margin-bottom: 0.5rem;
          font-weight: 800;
        }

        .price {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--accent);
        }

        .features {
          list-style: none;
          margin-bottom: 2.5rem;
          flex: 1;
          text-align: left;
          padding: 0 1rem;
        }

        .features li {
          margin-bottom: 1rem;
          color: var(--text-dim);
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
        }
        
        .check {
            color: var(--accent);
            font-weight: bold;
        }
        
        .buy-btn {
            width: 100%;
        }
      `}</style>
    </div>
  );
}
