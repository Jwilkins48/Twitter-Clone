import React from 'react'
import image from '../components/images/whiteLogo.png'
import twitterHome from '../components/images/homeLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faHashtag, faBell, faEnvelope, faBookmark, faRectangleList, faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const homeIcon = <FontAwesomeIcon icon={faHouseUser} />
    const exploreIcon = <FontAwesomeIcon icon={faHashtag} />
    const notificationIcon = <FontAwesomeIcon icon={faBell} /> 
    const messageIcon = <FontAwesomeIcon icon={faEnvelope} />
    const bookmarkIcon = <FontAwesomeIcon icon={faBookmark} />
    const listIcon = <FontAwesomeIcon icon={faRectangleList} /> 
    const profileIcon = <FontAwesomeIcon icon={faUser} />
    const moreIcon = <FontAwesomeIcon icon={faCommentDots}/>
  return (
    <div className='navBar'>
        <img className='twitterIcon' src={image} alt='twitter icon' width="29" height="26"></img>
        <p className='navItem'>{homeIcon} Home</p>
        <p className='navItem'>{exploreIcon} Explore</p>
        <p className='navItem'>{notificationIcon} Notifications</p>
        <p className='navItem'>{messageIcon} Messages</p>
        <p className='navItem'>{bookmarkIcon} Bookmarks</p>
        <p className='navItem'>{listIcon} Lists</p>
        <p className='navItem'>{profileIcon} Profile</p>
        <p className='navItem'>{moreIcon} More</p> 

        <button className='tweetBtn'>Tweet</button>
    </div>
  )
}

export default Header