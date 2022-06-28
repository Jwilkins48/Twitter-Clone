import React from 'react'
import ProfilePicture from '../components/images/kitty.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCalculator, faCalendar, faClosedCaptioning, faFaceSmile, faImage, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const media = <FontAwesomeIcon icon={faImage} />
  const gif = <FontAwesomeIcon icon={faClosedCaptioning} />
  const smile = <FontAwesomeIcon icon={faFaceSmile} />
  const align = <FontAwesomeIcon icon={faAlignLeft} />
  const calender = <FontAwesomeIcon icon={faCalendar} />
  const destination = <FontAwesomeIcon icon={faLocationDot} />
  return (
    <div className='homeContainer'>
        <div className='homeMiddleSection'>

            <div className='whatsHappeningContainer'>
              <h3 className='homeHeader'>Home</h3>

              <form className='postForm'>
                <div className='accountPostContainer'>
                  <img className='profilePicture' src={ProfilePicture} alt='Cat profile' width="53" height="47"></img>
                  <input className='postInput' type='text' name='tweet' placeholder="What's happening?" />
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
        </div>
    </div>
  )
}

export default Home