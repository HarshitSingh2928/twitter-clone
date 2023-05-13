import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faHashtag,
    faBell,
    faEnvelope,
    faBookmark,
    faList,
    faEllipsisH,faUser
  } from '@fortawesome/free-solid-svg-icons';
  import { Link } from 'react-router-dom';
  import './LeftSection.css';
import Menu from './Menu';
const LeftSection = () => {
  return (
    <div className='leftsection'>
       <FontAwesomeIcon icon={faTwitter} className='twitter-icon' />
        <Menu active text='Home' icon={faHome}/>
        <Menu text='Explore' icon={faHashtag}/>
        <Menu text='Notification' icon={faBell}/>
        <Menu text='Messages' icon={faEnvelope}/>
        <Menu text='Bookmarks' icon={faBookmark}/>
        <Menu text='Lists' icon={faList}/>
        <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
        <Menu text='Profile' icon={faUser}/>
        </Link>
        <Menu text='More' icon={faEllipsisH}/>
        <Button variant="outlined" className='w-100 tweet-btn'>Tweet</Button>
    </div>
  )
}

export default LeftSection