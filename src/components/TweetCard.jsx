import React from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faEllipsis, faComment, faHeart, faRetweet, } from '@fortawesome/free-solid-svg-icons';

function TweetCard({item, deleteTweet}) {

  const comment = <FontAwesomeIcon icon={faComment} />
  const retweet = <FontAwesomeIcon icon={faRetweet} />
  const heart = <FontAwesomeIcon icon={faHeart} />
  const share = <FontAwesomeIcon icon={faArrowUpFromBracket} />
  const options = <FontAwesomeIcon size="lg" icon={faEllipsis} />


  return (


    <Card>
        <div className='tweetUserInfo'> <img className='twitterFeedImages' src={item.src} alt='user profile' width="50" height="47"></img>
            <span className='users-Name'>{item.name} </span> @{item.username} . {item.timePosted}hr

            {/* Change to more options menu later */}
            <div className='optionsBtnContainer'>
              <button onClick={() => deleteTweet(item.id)} className='optionsBtn'>{options}</button>
            </div>
            </div>
            <div className='postedTweetInfo'>{item.tweet}</div>

            <div className='postedTweetIcons'>
                  <p className='postedIcons comment'>{comment} {item.comments}</p>
                  <p className='postedIcons retweet'>{retweet} {item.retweets}</p>
                  <p className='postedIcons heart'>{heart} {item.likes}</p>
                  <p className='postedIcons share'>{share}</p>
                </div>
    </Card>
  )
}

export default TweetCard