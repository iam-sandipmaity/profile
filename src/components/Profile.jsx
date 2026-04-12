import { useState } from 'react'
import defaultAvatar from '/profile.jpg'

function Profile({ avatar, handle, bio }) {
  const [imgError, setImgError] = useState(false)
  const initials = handle.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <>
      <div className="avatar-wrap">
        {avatar && !imgError ? (
          <img 
            src={avatar + '?t=' + Date.now()} 
            alt={handle} 
            onError={() => setImgError(true)}
          />
        ) : (
          <img 
            src={defaultAvatar + '?t=' + Date.now()} 
            alt={handle}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentNode.textContent = initials
            }}
          />
        )}
      </div>
      <div className="handle">{handle}</div>
      <div className="bio">{bio}</div>
    </>
  )
}

export default Profile
