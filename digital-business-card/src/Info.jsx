import React from 'react'
import './index.css'

export default function Info() {
  return (
    <div>
        <img className="pfp" src="./profile-pic.jpg" alt="Danny Vogel" />
        <h1 className='name'>Danny Vogel</h1>
        <h2 className='title'>Frontend Developer</h2>
        <h3 className='site'>DV.website</h3>
        <button className='but-email'><img className="icon" src="./mail.png"/> Email</button>
        <button className='but-linkedin'>LinkedIn</button>
    </div>
  )
}