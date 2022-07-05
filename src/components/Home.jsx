import React from 'react';
import ProfilePicture from '../components/images/kitty.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faAlignLeft, faArrowUpFromBracket, faCalendar, faClosedCaptioning, faComment, faEllipsis, faFaceSmile, faHeart, faImage, faLocationDot, faRetweet, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

function Home({twitterFeed, addTweet, deleteTweet}) {
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
  const topTweet = <FontAwesomeIcon icon={faStarOfLife} />
  const options = <FontAwesomeIcon icon={faEllipsis} />

  const [tweet, setTweet] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = (e) => {
    if(tweet === ''){
      setBtnDisabled(true);
    } else{
      setBtnDisabled(false);
    }
    setTweet(e.target.value);

    // (tweet === '') ? setBtnDisabled(true) : setBtnDisabled(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tweet.trim().length > 1){
      const newTweet = {
        tweet: tweet,
      }
      addTweet(newTweet);
      setTweet('');
    }
  }

  return (
    <div className='homeContainer'>
      <div className='homeMiddleSection'>

                  <div className='whatsHappeningContainer'>

                  <div className='homeHeaderContainer'>
                    <h3 className='homeHeader'>Home</h3>
                    <p className='homeHeaderIcon'>{topTweet}</p>
                  </div>

                <div className='formContainer'>

                {/* Tweet */}

                <form onSubmit={handleSubmit} className='postForm'>
                <div className='accountPostContainer'>
                    <img className='profilePicture' src={ProfilePicture} alt='Cat profile' width="53" height="47"></img>
                  {/* Tweet Input */}
                  <input onChange={handleChange} value={tweet} autoComplete="off" className='postInput' type='text' name='tweet' placeholder="What's happening?" />
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

                  {/* Home Tweet Btn */}
                  <button type='submit' disabled={btnDisabled} className='homeTweetBtn'>Tweet</button>

                </div>            
                
              </form>
                </div>
            </div>
            
            {/* Twitter Feed Start - *Still Need To Create Custom Tweet Component */}

            {twitterFeed.map((item) => (
              <div key={item.id} id={item.id} className='tweetContainer'>
                <div className='tweetUserInfo'> <img className='twitterFeedImages' src={item.src} alt='user profile' width="50" height="47"></img>
                  <span className='users-Name'>{item.name} </span> @{item.username} . {item.timePosted}hr

                  {/* Change to more options menu later */}
                  <button onClick={() => deleteTweet(item.id)} className='optionsBtn'>{options}</button>
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