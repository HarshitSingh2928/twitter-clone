
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import './RightSection.css'
import TrendingCardwoImg from './TrendingCardwoImg';
const RightSection = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearchInputChange = event => {
    const input = event.target.value;
    setSearchInput(input);
    handleSearch(input);
  };
  const data = [
    {
      "Hashtag": "#React",
      "NoOfTweets": 5000,
      "NoOfPeople": 10000
    },
    {
      "Hashtag": "#JavaScript",
      "NoOfTweets": 8000,
      "NoOfPeople": 15000
    },
    {
      "Hashtag": "#NodeJS",
      "NoOfTweets": 3000,
      "NoOfPeople": 5000
    }
  ];
  return (
    <div className='rightsection'>
      <div className='search'>
        <FontAwesomeIcon icon={faSearch} style={{ color: 'grey' }} />
        <input placeholder='Search Twitter' type='text' value={searchInput}
          onChange={handleSearchInputChange} />
      </div>
      <div className='rightsectioncontainer'>
        <div className='conatainerheading'>
          <h2>Trends for you</h2>
          <FontAwesomeIcon icon={faCog} />
        </div>
        {
          data.map((item, idx) => (
            <div key={idx}>
              <TrendingCardwoImg hashtag={item.Hashtag} tweet={item.NoOfTweets} people={item.NoOfPeople} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RightSection