import React, { useState, useEffect } from 'react';
import RightSection from './rightSection/RightSection';
import MiddleSection from './middleSection/MiddleSection';
import './middleSection/MiddleSection.css'
import './rightSection/RightSection.css'
const ParentComponent = ({setLoggedIn}) => {
    const [tweets, setTweets] = useState([]);
    const [filteredTweets, setFilteredTweets] = useState([]);


    const handleSearch = input => {
        const filtered = tweets.filter(tweet =>
            tweet.tweet.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredTweets(filtered);
    };
    const data = [
        {
            "id": 0,
            "userName": "tech_geek",
            "date": "2023-02-08",
            "tweet": "Just got my hands on the latest smartphone and I am blown away by its features and performance! #techlove",
            "numberOfLikes": 250,
            "numberOfComments": 60,
            "firstName": "John"
        },
        {
            "id": 1,
            "userName": "foodie_gal",
            "date": "2023-02-08",
            "tweet": "Had the most amazing meal at the new restaurant in town. The flavors were out of this world! #foodie #yum",
            "numberOfLikes": 170,
            "numberOfComments": 40,
            "firstName": "Jane"
        },
        {
            "id": 2,
            "userName": "bookworm",
            "date": "2023-02-09",
            "tweet": "Just finished reading the latest bestseller and I can't wait to discuss it with my book club next week! #booknerd #booklover",
            "numberOfLikes": 200,
            "numberOfComments": 50,
            "firstName": "Jack"
        },
        {
            "id": 3,
            "userName": "fitness_fanatic",
            "date": "2023-02-09",
            "tweet": "Had an intense workout at the gym this morning and feeling great! #fitnessmotivation #fitlife",
            "numberOfLikes": 140,
            "numberOfComments": 30,
            "firstName": "Jessica"
        },
        {
            "id": 4,
            "userName": "nature_lover",
            "date": "2023-02-10",
            "tweet": "Just took a hike in the mountains and it was breathtaking! The beauty of nature never ceases to amaze me. #outdooradventures #hiking",
            "numberOfLikes": 180,
            "numberOfComments": 40,
            "firstName": "Sarah"
        },

        {
            "id": 5,
            "userName": "coffee_lover",
            "date": "2023-02-10",
            "tweet": "My twitter anniversary today!",
            "numberOfLikes": 180,
            "numberOfComments": 40,
            "firstName": "Gill"
        },

        {
            "id": 6,
            "userName": "cool_dude",
            "date": "2023-02-10",
            "tweet": "Monday blues ;/",
            "numberOfLikes": 180,
            "numberOfComments": 40,
            "firstName": "Stella"
        },

        {
            "id": 7,
            "userName": "the_perfectionist",
            "date": "2023-02-10",
            "tweet": "Good things come to those who wait",
            "numberOfLikes": 18,
            "numberOfComments": 40,
            "firstName": "Adam"
        },

        {
            "id": 8,
            "userName": "unknown000",
            "date": "2023-02-10",
            "tweet": "Today is my Birthday :)",
            "numberOfLikes": 10,
            "numberOfComments": 4,
            "firstName": "Justin"
        },
        {
            "id": 9,
            "userName": "jamesbond",
            "date": "2023-02-10",
            "tweet": "You need to fight for you want. #hustle #life",
            "numberOfLikes": 120,
            "numberOfComments": 47,
            "firstName": "Elon"
        }

    ]


    const handleNewTweet = newTweet => {
        const updatedTweets = [...tweets];
        const newTweetObject = {
            id: Date.now(),
            userName: 'Harshit2928',
            date: new Date().toISOString().slice(0, 10),
            tweet: newTweet,
            numberOfLikes: 0,
            numberOfComments: 0,
            firstName: 'Harshit'
        };
        updatedTweets.unshift(newTweetObject); // Add the new tweet at the beginning of the array
        console.log(updatedTweets);
        setTweets(updatedTweets);
        setFilteredTweets(updatedTweets);
    };
    const handleEdit = (editedTweet, tweetId) => {
        // setEditTweetId(tweetId);
        console.log(editedTweet)

        console.log(tweetId)
        const updatedTweets = tweets.map((tweet) =>
            tweet.id === tweetId ? { ...tweet, tweet: editedTweet } : tweet
        );
        setTweets(updatedTweets);
        setFilteredTweets(updatedTweets);


    };


    const handleDelete = (tweetId) => {
        const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
        setTweets(updatedTweets);
        setFilteredTweets(updatedTweets);
    };
    useEffect(() => {
        //     fetch('https://tweets.free.beeceptor.com/tweets/all')
        //       .then(response => response.json())
        //       .then(data => {
        //         setTweets(data);
        //         setFilteredTweets(data);
        //       })
        //       .catch(error => console.error(error));
        setTweets(data);
        setFilteredTweets(data);
    }, [])
    return (
        <div style={{ display: "flex" }}>

            <MiddleSection tweets={filteredTweets} handleNewTweets={handleNewTweet} handleDelete={handleDelete} handleTweetEdit={handleEdit} setLoggedIn={setLoggedIn}/>
            <RightSection handleSearch={handleSearch} />
        </div>
    );
};

export default ParentComponent;
