import React from 'react'
import { useState } from 'react';

function UserTweet(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className='optionItems'>
        <a href='#' className='optionIconBtn' onClick={() => setOpen(!open)}>hi</a>

        {open}
    </li>
  )
}

export default UserTweet
