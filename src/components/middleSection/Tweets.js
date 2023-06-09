import React, { useState } from "react";
import "./Tweets.css";
import Figure from "react-bootstrap/Figure";
import avatar from "./avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faUpload,
  faTrashAlt,
  faEdit,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Tweets = ({
  id,
  firstName,
  userName,
  tweet,
  likes,
  comments,
  date,
  handleDelete,
  handleEdits,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTweet, setEditedTweet] = useState(tweet);

  const handleDeleteClick = () => {
    handleDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    handleEdits(editedTweet, id);
  };

  const handleCancelEdit = () => {
    setEditedTweet(tweet);
    setIsEditing(false);
  };
  const tweetDate = new Date(date);
  const currentDate = new Date();

  const timeDifferenceMs = currentDate - tweetDate;
  const timeDifferenceHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
  const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
  return (
    <div className="tweets">
      <Figure>
        <Figure.Image src={avatar} className="avatar_tweet" />
      </Figure>
      <div className="tweetbody">
        <div className="tweetheader">
          <div className="tweetheadertext">
            <h3>
              {firstName} <span className="username">@{userName}</span>
            </h3>
            <p>
              {timeDifferenceDays > 30
                ? "30d+"
                : timeDifferenceDays >= 1
                ? `${timeDifferenceDays}d`
                : `${timeDifferenceHours}h`}
            </p>
          </div>
          <div className="tweetheaderdesc">
            {isEditing ? (
              <textarea
                rows="2"
                cols="70"
                value={editedTweet}
                onChange={(e) => setEditedTweet(e.target.value)}
              />
            ) : (
              <p>{tweet}</p>
            )}
          </div>
        </div>
        <div className="tweetfooter">
          <div className="icons">
            <FontAwesomeIcon icon={faComment} size="lg" />
            <p>{comments}</p>
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faRetweet} size="lg" />
            <p>1</p>
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faHeart} size="lg" />
            <p>{likes}</p>
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faUpload} size="lg" />
          </div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faTrashAlt}
              size="lg"
              onClick={handleDeleteClick}
            />
            {isEditing ? (
              <>
                <FontAwesomeIcon
                  icon={faSave}
                  size="lg"
                  onClick={handleSaveEdit}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  size="lg"
                  onClick={handleCancelEdit}
                />
              </>
            ) : (
              <FontAwesomeIcon icon={faEdit} size="lg" onClick={handleEdit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
