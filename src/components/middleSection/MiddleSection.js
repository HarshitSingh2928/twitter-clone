
import React from 'react';
import './MiddleSection.css';
import PostTweet from './PostTweet';
import Tweets from './Tweets';

const MiddleSection = ({ tweets, handleNewTweets, handleDelete, handleTweetEdit ,setLoggedIn}) => {

  const handleDeleteTweet = (tweetId) => {
    handleDelete(tweetId);
  };
  const handleLogout=()=>{
    setLoggedIn(false);
  }  

  let screenHeight = window.innerHeight;

  return (
    <div className='middlesection' style={{height: screenHeight}}>
      {/* Header */}
      <div className='nav-bar'>
        <h2>Home</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* Post tweet */}
      <PostTweet handleNewTweetss={handleNewTweets} />

      {/* Tweets */}

      {tweets.map(tweet => (
        <Tweets
          key={tweet.id}
          id={tweet.id}
          userName={tweet.userName}
          date={tweet.date}
          tweet={tweet.tweet}
          likes={tweet.numberOfLikes}
          comments={tweet.numberOfComments}
          firstName={tweet.firstName}
          handleDelete={handleDeleteTweet}
          handleEdits={handleTweetEdit}
        />
      ))}
    </div>
  );
};

export default MiddleSection;
