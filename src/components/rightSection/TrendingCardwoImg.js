import React from 'react'

function TrendingCardwoImg(props) {
  return (
    <div className='trending-card'>
          <p style={{
            fontWeight:"600",
            fontSize:"12px",
            color:'gray',
            marginBottom:"0px"
          }}>Trending Worldwide</p>
          <p style={{
            fontWeight:"bold",
            marginBottom:"0px"
          }}>{props.hashtag}</p>
          <p style={{
            color:"gray",
            marginBottom:"0px"
          }}>{props.tweet}K Tweets</p>
          <p style={{
            fontWeight:"600",
            fontSize:"12px",
            color:'gray',
            marginBottom:"0px"
          }}>{props.people} people are Tweeting about this</p>
        </div>
  )
}

export default TrendingCardwoImg