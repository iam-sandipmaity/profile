import React, { useState, useEffect } from "react";

const links = [
  {
    id: "portfolio",
    label: "Portfolio",
    sub: "sandipmaity.me",
    href: "https://sandipmaity.me",
    num: "01",
  },
  {
    id: "github",
    label: "GitHub",
    sub: "iam-sandipmaity",
    href: "https://github.com/iam-sandipmaity",
    num: "02",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "iam-sandipmaity",
    href: "https://linkedin.com/in/iam-sandipmaity",
    num: "03",
  },
  {
    id: "instagram",
    label: "Instagram",
    sub: "iam_sandipmaity",
    href: "https://instagram.com/iam_sandipmaity",
    num: "04",
  },
  {
    id: "email",
    label: "Email",
    sub: "maitysandip@proton.me",
    href: "mailto:maitysandip@proton.me",
    num: "05",
  },
];

export default function Linktree() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      {/* Styles moved to styles/linktree.css */}
      <div className="spotlight" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="lt-root">
        <div className="lt-name">Sandip Maity</div>
        <div className="lt-role">Unemployed Engineer</div>
        <div className="lt-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="lt-link"
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span className="num">{link.num}</span>
              <span className="lbl">{link.label}</span>
              <span className="sub">{link.sub}</span>
              <span className="arr">→</span>
            </a>
          ))}
        </div>
        {/* Project links at the bottom */}
        <div className="lt-projects" style={{ marginTop: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 8, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Projects</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a href="https://snaptools.xyz" target="_blank" rel="noopener noreferrer" className="lt-project-link">SnapTools</a>
            <a href="https://solar.sandipmaity.me" target="_blank" rel="noopener noreferrer" className="lt-project-link">Solar System</a>
            <a href="https://weather.sandipmaity.me" target="_blank" rel="noopener noreferrer" className="lt-project-link">Weatherwise</a>
            <a href="https://mftracker.sandipmaity.me" target="_blank" rel="noopener noreferrer" className="lt-project-link">Mutual Fund Tracker</a>
            <a href="https://seriesrating.sandipmaity.me/" target="_blank" rel="noopener noreferrer" className="lt-project-link">Series Rating</a>
            <a href="https://crypto.sandipmaity.me" target="_blank" rel="noopener noreferrer" className="lt-project-link">Crypto Tracker</a>
            <a href="https://video.sandipmaity.me" target="_blank" rel="noopener noreferrer" className="lt-project-link">Video Downloader</a>
            
          </div>
        </div>
      </div>
    </>
  );
}
