import React from 'react'
import ProfilePicture from '../components/images/kitty.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faArrowUpFromBracket, faCalendar, faClosedCaptioning, faComment, faFaceSmile, faHeart, faImage, faLocationDot, faRetweet } from '@fortawesome/free-solid-svg-icons'

function Home({twitterFeed}) {
  const media = <FontAwesomeIcon icon={faImage} />
  const gif = <FontAwesomeIcon icon={faClosedCaptioning} />
  const smile = <FontAwesomeIcon icon={faFaceSmile} />
  const align = <FontAwesomeIcon icon={faAlignLeft} />
  const calender = <FontAwesomeIcon icon={faCalendar} />
  const destination = <FontAwesomeIcon icon={faLocationDot} />
  const comment = <FontAwesomeIcon icon={faComment} />
  const retweet = <FontAwesomeIcon icon={faRetweet} />
  const heart = <FontAwesomeIcon icon={faHeart} />
  const share = <FontAwesomeIcon icon={faArrowUpFromBracket} />

  return (
    <div className='homeContainer'>
      <div className='homeMiddleSection'>

                  <div className='whatsHappeningContainer'>
                  <h3 className='homeHeader'>Home</h3>

                  <form className='postForm'>
                <div className='accountPostContainer'>
                    <img className='profilePicture' src={ProfilePicture} alt='Cat profile' width="53" height="47"></img>
                  <input autoComplete="off" className='postInput' type='text' name='tweet' placeholder="What's happening?" />
                </div>

                <div className='iconPostContainer'>
                  <div className='leftSideInfo'>
                    <p className='media'>{media}</p>
                    <p className='icon'>{gif}</p>
                    <p className='icon'>{align}</p>
                    <p className='icon'>{smile}</p>
                    <p className='icon'>{calender}</p>
                    <p className='icon'>{destination}</p>
                  </div>

                  <button className='homeTweetBtn'>Tweet</button>
                </div>            
                
              </form>
            </div>
            
            {/* Twitter Feed Start */}
            {twitterFeed.map((item) => (
              <div key={item.id} id={item.id} className='tweetContainer'>
                <div className='tweetUserInfo'> <img className='profilePicture' src={ProfilePicture} alt='user profile' width="50" height="44"></img>
                  <span className='users-Name'>{item.name} </span> @{item.username} {item.timePosted}hr
                </div>
                <div className='postedTweetInfo'>{item.tweet}</div>

                <div className='postedTweetIcons'>
                  <p className='postedIcons comment'>{comment} {item.comments}</p>
                  <p className='postedIcons retweet'>{retweet} {item.retweets}</p>
                  <p className='postedIcons heart'>{heart} {item.likes}</p>
                  <p className='postedIcons share'>{share}</p>
                </div>
              </div>
            ))}

      </div>
    </div>
  )
}

export default Home