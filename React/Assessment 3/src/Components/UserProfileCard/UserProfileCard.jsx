import React from 'react' 6.9k (gzipped:2.7k)
import './UserProfileCard.css'
import pofile_icon from '../Assets/src/Components/Assets/pexels-christina-morillo-1181519.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
<div className="gradiant"></div>
<div className="profile-down"></div>
<img src={profile_icon}alt="" />
<div className="profile-title">Jessica Daniels</div>
<div className="profile-description">
Digital marketer with a passion for storytelling and brand strategy. Helping businesses thrive in the online space. Let's connect and share ideas!
</div>
<div className="profile-content">
  Age: 26
  Location: London
</div>
<div className="profile-button"><a href="mailto:jessica.daniels@gmail.com">Contact Me</a></div>
    </div>
<div className="profile-button2">Follow me!</div>
  )
}

export default UserProfileCard 
