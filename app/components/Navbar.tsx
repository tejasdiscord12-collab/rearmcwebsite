"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar" suppressHydrationWarning>
      <div className="container nav-content">
        <Link href="/" className="logo">
          REAR<span className="logo-accent">MC</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link href="/vote" className={`nav-item ${isActive('/vote') ? 'active' : ''}`}>Vote</Link>
          <Link href="/staff" className={`nav-item ${isActive('/staff') ? 'active' : ''}`}>Staff</Link>
          <Link href="/store" className="nav-item store-btn" target="_blank">STORE</Link>
        </div>

        <button className={`mobile-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          height: 80px;
          display: flex;
          align-items: center;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-family: var(--font-main);
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        
        .logo-accent {
            color: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-item {
          font-family: var(--font-main);
          font-weight: 600;
          color: var(--text-dim);
          transition: all 0.3s ease;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
        }

        .nav-item:hover, .nav-item.active {
          color: #fff;
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary);
        }

        .store-btn {
          color: var(--gold) !important;
          border: 1px solid var(--gold);
          padding: 0.6rem 1.8rem;
          border-radius: 2px;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          transition: all 0.3s ease;
        }
        
        .store-btn::after { display: none; }

        .store-btn:hover {
          background: var(--gold);
          color: #000 !important;
          box-shadow: 0 0 20px var(--gold-glow);
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .mobile-toggle span {
          width: 30px;
          height: 2px;
          background: #fff;
          transition: 0.3s;
          display: block;
        }
        
        .mobile-toggle.open span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 6px);
            background: var(--primary);
        }
        
        .mobile-toggle.open span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-toggle.open span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -8px);
            background: var(--primary);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(5, 5, 5, 0.98);
            flex-direction: column;
            padding: 3rem 2rem;
            border-bottom: 1px solid var(--border);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
            gap: 2rem;
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-item {
              font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
}
