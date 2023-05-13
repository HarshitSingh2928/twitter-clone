import React, { useState } from 'react'
import './PostTweet.css'
import avatar from './avatar.jpg'
import Figure from 'react-bootstrap/Figure';
import { Button } from 'react-bootstrap';
const PostTweet = ({ handleNewTweetss }) => {
    const [tweetText, setTweetText] = useState('');
    const handleTweetChange = event => {
        setTweetText(event.target.value);
    };
    const handleTweetSubmit = event => {
        event.preventDefault();
        if (tweetText) {
            handleNewTweetss(tweetText);
            setTweetText('');
        }
    };
    return (
        <div className='posttweet'>
            <form onSubmit={handleTweetSubmit}>
                {/* check */}
                <div className='tweetbox'>
                    <Figure>
                        <Figure.Image
                            src={avatar}
                            className="avatar"
                        />
                    </Figure>
                    <input placeholder="What's happening?" type='text' value={tweetText}
                        onChange={handleTweetChange}></input>
                </div>
                <Button className='tweet-post-btn' onClick={handleTweetSubmit}>Tweet</Button>
            </form>
        </div>
    )
}

export default PostTweet