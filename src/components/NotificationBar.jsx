import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NotificationBar({newsFeed}) {
  const search = <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
  return (
    <div>
      <div className='homeRightSection'>
        <div className="inputContainer">
          {search}
          <input className='searchInput' placeholder='Search Twitter'></input>
        </div>
      </div>

      <div className='notificationContainer'>
          <h2 className='notifHeader'>What's Happening</h2>
          <div className="newsContainer">
            {newsFeed.map((item) => (
              <div className='articleContainer' key={item.id} id={item.id}>
                <p className='notifTopInfo'> {item.name} . {item.timePosted}</p> <p className='notifBottomInfo'>{item.article}</p>
              </div>
            ))}
          </div>
      </div>

      <div className='whoToFollowContainer'>

      </div>

      <div className='linkContainer'>

      </div>
    </div>
  )
}

export default NotificationBar