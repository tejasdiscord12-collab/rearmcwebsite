"use client";

export default function RulesClient() {
    const rules = [
        { title: 'No Hacking or Cheating', desc: 'Using any modified client or mod that gives an unfair advantage is strictly prohibited.' },
        { title: 'Respect All Players', desc: 'Bullying, harassment, or hate speech will not be tolerated.' },
        { title: 'No Griefing', desc: 'Do not destroy other players\' builds unless in designated PvP/Raid zones.' },
        { title: 'No Advertising', desc: 'Do not advertise other servers or websites in chat.' },
        { title: 'Account Security', desc: 'You are responsible for your account. Keep your password safe.' },
    ];

    return (
        <div className="page-container container">
            <div className="header">
                <h1>Server Rules</h1>
                <p>Please read and follow these rules to ensure a fun environment for everyone.</p>
            </div>

            <div className="rules-list">
                {rules.map((rule, index) => (
                    <div key={index} className="rule-item">
                        <div className="rule-header">
                            <span className="rule-number">#{index + 1}</span>
                            <h3>{rule.title}</h3>
                        </div>
                        <p>{rule.desc}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .page-container {
          padding: 4rem 2rem;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #ef4444; /* Red for emphasis on rules */
        }

        .header p {
          color: var(--text-dim);
          font-size: 1.2rem;
        }

        .rules-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .rule-item {
          background: var(--surface);
          padding: 2rem;
          border-left: 4px solid var(--border);
          border-radius: 0 8px 8px 0;
          transition: border-color 0.2s;
        }

        .rule-item:hover {
          border-left-color: #ef4444;
          background: var(--surface-hover);
        }

        .rule-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .rule-number {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          color: var(--text-dim);
          opacity: 0.5;
        }

        .rule-item h3 {
          font-size: 1.3rem;
        }

        .rule-item p {
          color: var(--text-dim);
          padding-left: 2.5rem; /* Align with title */
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .rule-item p {
            padding-left: 0;
          }
        }
      `}</style>
        </div>
    );
}
