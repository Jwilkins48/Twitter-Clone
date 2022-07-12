import React from 'react';
import ProfilePicture from '../components/images/kitty.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faAlignLeft, faCalendar, faClosedCaptioning, faFaceSmile,
faImage, faLocationDot, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import TweetCard from './TweetCard';


function Home({twitterFeed, addTweet, deleteTweet}) {
  const media = <FontAwesomeIcon icon={faImage} />
  const gif = <FontAwesomeIcon icon={faClosedCaptioning} />
  const smile = <FontAwesomeIcon icon={faFaceSmile} />
  const align = <FontAwesomeIcon icon={faAlignLeft} />
  const calender = <FontAwesomeIcon icon={faCalendar} />
  const destination = <FontAwesomeIcon icon={faLocationDot} />
  const topTweet = <FontAwesomeIcon icon={faStarOfLife} />

  const [tweet, setTweet] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);


  const handleChange = (e) => {
    if(tweet === ''){
      setBtnDisabled(true);
    } else{
      setBtnDisabled(false);
    }
    setTweet(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tweet.trim().length > 1){

      // Default info for now
      const newTweet = {
        tweet: tweet,
        name: 'Jenna',
        username: 'Jenna682',
        timePosted: 0,
        src: 'profileImages/cat.jpeg',
        comments: 0,
        retweets: 0,
        likes: 0,
        userTweet: true,
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
                <button type='submit' disabled={btnDisabled} id='homeTweetBtn'>Tweet</button>
              </div>            
                
            </form>
          </div>
          </div>

          {twitterFeed.map((item) => (
            <div key={item.id} id={item.id}>
              <TweetCard key={item.id} item={item} deleteTweet={deleteTweet} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home