import React from 'react'
import './profile-card.scss'
import Stats from './stats'

const ProfileCard = ({name, image, location, shot, followers, following}) => {
    const img = require(`../../assets/img/${image}`)
    const profileBg = {
        backgroundImage: `url(${img})`
    }
  return (
    <>
        <h2 style={{textAlign : 'center'}}>Profile Card</h2>
        <div className='profile-card-container'>
            <div className="header" 
                style={profileBg}>
                
            </div>
            <div className='content'>
                <div className="avatar" style={profileBg}></div>
                <h3>{name}</h3>
                <h5>{location}</h5>
                <div className='stats'>
                    <Stats stat={shot} title="Shot"/>
                    <Stats stat={followers} title="Followers"/>
                    <Stats stat={following} title="Following"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileCard