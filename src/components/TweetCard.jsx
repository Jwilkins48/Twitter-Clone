import React from 'react'
import Card from './Card'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faEllipsis, faComment, faHeart, faRetweet, } from '@fortawesome/free-solid-svg-icons';
import UserTweet from './dropdownMenus/UserTweet';


function TweetCard({item, deleteTweet}) {

  const comment = <FontAwesomeIcon size="lg" icon={faComment} />
  const retweet = <FontAwesomeIcon size="lg" icon={faRetweet} />
  const heart = <FontAwesomeIcon size="lg" icon={faHeart} />
  const share = <FontAwesomeIcon size="lg" icon={faArrowUpFromBracket} />
  const options = <FontAwesomeIcon size="lg" icon={faEllipsis} />


  // const increment = () => {
  //   console.log('hi');
  //   console.log(item.userTweet);
  // }


  return (

    <Card>
        <div className='tweetUserInfo'> <img className='twitterFeedImages' src={item.src} alt='user profile' width="50" height="47"></img>
            <span className='users-Name'>{item.name} </span> @{item.username} . {item.timePosted} hr

            {/* Change to more options menu later */}
            <div className='optionsBtnContainer'>
              {/* <button onClick={() => deleteTweet(item.id)} className='optionsBtn'>{options}</button> */}


              <div className="dropdown">
                <button className='optionsBtn'>{options}</button>
                <div className="dropdownMenu">
                  <ul className='dropdownMenuList'>
                    <li>Not interested in this Tweet</li>
                    <li>Follow @{item.username}</li>
                    <li>Add/remove @{item.username} from Lists</li>
                    <li>Mute @{item.username}</li>
                    <li>Block @{item.username}</li>
                    <li>Embed Tweet</li>
                    <li>Report Tweet</li>
                  </ul>
                </div>
              </div>



            </div>
            </div>
            <div className='postedTweetInfo'>{item.tweet}</div>

            <div className='postedTweetIcons'>
                  <button className='postedIcons comment'>{comment} {item.comments}</button>
                  <button className='postedIcons retweet'>{retweet} {item.retweets}</button>
                  <button className='postedIcons heart'>{heart} {item.likes}</button>
                  <button className='postedIcons share'>{share}</button>
                </div>
    </Card>
  )
}

export default TweetCard