import { useState } from 'react'

const CheckIcon = () => (
  <svg className="copy-svg" viewBox="0 0 24 24" stroke="#4ade80" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const CopyIcon = () => (
  <svg className="copy-svg" viewBox="0 0 24 24">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
  </svg>
)

function PillLink({ platform, label, url, icon, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pill-outer">
      <a 
        className={`pill ${platform}`} 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className="pill-icon">
          {icon}
        </div>
        <span className="pill-label">{label}</span>
        <button 
          className="pill-copy" 
          onClick={handleCopy}
          type="button"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </a>
    </div>
  )
}

export default PillLink
