import { useState, useEffect } from 'react'
import Profile from './components/Profile'
import LinkSection from './components/LinkSection'
import Toast from './components/Toast'
import './App.css'

function App() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState({ show: false, message: '' })

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        setProfile(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch profile:', err)
        setLoading(false)
      })
  }, [])

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 2000)
  }

  const copyLink = async (url) => {
    try {
      await navigator.clipboard.writeText(url)
      const displayUrl = url.startsWith('mailto:') 
        ? url.replace('mailto:', '') 
        : url.replace(/^https?:\/\//, '')
      showToast(`Copied: ${displayUrl}`)
    } catch (err) {
      const ta = document.createElement('textarea')
      ta.value = url
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      const displayUrl = url.startsWith('mailto:') 
        ? url.replace('mailto:', '') 
        : url.replace(/^https?:\/\//, '')
      showToast(`Copied: ${displayUrl}`)
    }
  }

  if (loading) {
    return (
      <div className="page">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="page">
      <Profile 
        avatar={profile.avatar} 
        handle={profile.handle} 
        bio={profile.bio} 
      />
      
      <div className="wrap">
        <LinkSection 
          title="Connect" 
          links={profile.links} 
          onCopy={copyLink} 
        />
        
        <LinkSection 
          title="Projects" 
          links={profile.projects} 
          onCopy={copyLink} 
        />
      </div>

      <div className="foot">sandipmaity.me</div>
      
      <Toast message={toast.message} show={toast.show} />
    </div>
  )
}

export default App
