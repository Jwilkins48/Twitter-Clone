import React from 'react'
import image from '../components/images/whiteLogo.png'

function Header() {
  return (
    <div className='navBar'>
        <img className='twitterIcon' src={image} alt='twitter icon' width="29" height="26"></img>
        <p className='navItem'>Home</p>
        <p className='navItem'>Explore</p>
        <p className='navItem'>Notifications</p>
        <p className='navItem'>Messages</p>
        <p className='navItem'>Bookmarks</p>
        <p className='navItem'>Lists</p>
        <p className='navItem'>Profile</p>
        <p className='navItem'>More</p>

        <button className='tweetBtn'>Tweet</button>
    </div>
  )
}

export default Header