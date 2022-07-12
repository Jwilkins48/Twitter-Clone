import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NotificationBar({newsFeed, whoToFollow}) {
  const search = <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
  const options = <FontAwesomeIcon size="lg" icon={faEllipsis} />
  return (
    <div>
      <div className='homeRightSection'>
        <div className="inputContainer">
          {search}
          <input className='searchInput' placeholder='Search Twitter'></input>
        </div>
      </div>

  {/* Whats Happening Section */}
      <div className='notificationContainer'>
          <h2 className='notifHeader'>What's Happening</h2>
          <div className="newsContainer">
            {newsFeed.map((item) => (
              <div className='articleContainer' key={item.id} id={item.id}>
                <div className="articleInfo">
                  <p className='notifTopInfo'> {item.name} . {item.timePosted}</p> <p className='notifBottomInfo'>{item.article}</p>
                </div>
                  <button className='notifOptionsBtn'>{options}</button>
              </div>
            ))}
          </div>
      </div>

  {/* Who To Follow Section */}
      <div className='whoToFollowContainer'>
        <h2>Who to follow</h2>
        <div className="allFollowContainer">
            {whoToFollow.map((item) => (
              <div className='followAccount' key={item.id} id={item.id}>
                <div className="leftFollowInfo"><p className='followName'>{item.name} </p> <p className='followUsername'>{item.username}</p></div>
                <div className="rightInfoDiv"><button className='followBtn'>Follow</button></div>  
              </div>
            ))}
            <div className='showMore'>Show More</div>
          </div>
      </div>

      <div className='linkContainer'>

      </div>
    </div>
  )
}

export default NotificationBar