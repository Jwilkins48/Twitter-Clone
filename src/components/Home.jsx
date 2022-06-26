import React from 'react'
import ProfilePicture from '../components/images/kitty.webp'

function Home() {
  return (
    <div className='homeContainer'>
        <div className='homeMiddleSection'>
            <div className='whatsHappeningContainer'>
              <h3 className='homeHeader'>Home</h3>
              <form className='postForm'>
                <img className='profilePicture' src={ProfilePicture} alt='Cat profile' width="53" height="47"></img>
                <input className='postInput' type='text' name='tweet' placeholder="What's happening?" />
              
                {/* <button>Tweet</button> */}

              </form>
              <button className='homeTweetBtn'>Tweet</button>
            </div>
        </div>
    </div>
  )
}

export default Home