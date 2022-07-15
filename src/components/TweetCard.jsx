import React from 'react'
import Card from './Card'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faEllipsis, faComment, faHeart, faRetweet, faFaceFrown, faUserPlus, faTableList, faVolumeXmark, faBan, faCode, faFlag, } from '@fortawesome/free-solid-svg-icons';

let randomNumbers = require('random-number');


function TweetCard({item, deleteTweet}) {

  const comment = <FontAwesomeIcon size="lg" icon={faComment} />
  const retweet = <FontAwesomeIcon size="lg" icon={faRetweet} />
  const heart = <FontAwesomeIcon size="lg" icon={faHeart} />
  const share = <FontAwesomeIcon size="lg" icon={faArrowUpFromBracket} />
  const options = <FontAwesomeIcon size="lg" icon={faEllipsis} />

  const frown = <FontAwesomeIcon size="lg" icon={faFaceFrown} />
  const profileIcon = <FontAwesomeIcon size="lg" icon={faUserPlus} />
  const lists = <FontAwesomeIcon size="lg" icon={faTableList} />
  const mute = <FontAwesomeIcon size="lg" icon={faVolumeXmark} />
  const block = <FontAwesomeIcon size="lg" icon={faBan} />
  const embed = <FontAwesomeIcon size="lg" icon={faCode} />
  const report = <FontAwesomeIcon size="lg" icon={faFlag} />

  let range = {
    min:  0,
    max:  200,
    integer: true
  }

  const [userAmount, setAmount] = useState(0);
  const [likeAmount, setLikeAmount] = useState(randomNumbers(range));
  const [retweetAmount, setRetweetAmount] = useState(randomNumbers(range));

  const [isActive, setIsActive] = useState(false);
  const [retweetIsActive, setRetweetIsActive] = useState(false);

  const handleClick = () => {
    setLikeAmount(likeAmount + 1)
    setIsActive(current => !current);
    if(isActive === true ){
      setLikeAmount(likeAmount - 1)
    }
  };

  const retweetClick = () => {
    setRetweetAmount(retweetAmount + 1)
    setRetweetIsActive(current => !current);
    if(retweetIsActive === true ){
      setRetweetAmount(retweetAmount - 1)
    }
  };


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
                    <li> {frown} Not interested in this Tweet</li>
                    <li> {profileIcon} Follow @{item.username}</li>
                    <li> {lists} Add/remove @{item.username} from Lists</li>
                    <li> {mute} Mute @{item.username}</li>
                    <li> {block} Block @{item.username}</li>
                    <li> {embed} Embed Tweet</li>
                    <li> {report}Report Tweet</li>
                  </ul>
                </div>
              </div>



            </div>
            </div>
            <div className='postedTweetInfo'>{item.tweet}</div>

            <div className='postedTweetIcons'>
                  <button className='postedIcons comment'>{comment} {item.comments}</button>
                  <button style={{color: retweetIsActive ? '#19cf86' : '',}} onClick={() => (retweetClick())} className='postedIcons retweet'>{retweet} {retweetAmount}</button>
                  <button style={{color: isActive ? '#b03060' : '',}} onClick={() => (handleClick())} className='postedIcons heart'>{heart} {likeAmount}</button>
                  <button className='postedIcons share'>{share}</button>
                </div>
    </Card>
  )
}

export default TweetCard