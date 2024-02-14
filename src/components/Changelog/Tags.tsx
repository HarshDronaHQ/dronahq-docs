// Tags.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";

const Tags = ({ tags, isDarkTheme = false }) => {
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className={`${styles['tags-container']} tags-container`}>
      {tags.map((tag, index) => (
        <div key={index} className={`${styles['changelogcard-tag']} hq-tags border small green d-flex align-center pointer justify-center mt-2`}>
          {capitalizeFirstLetter(tag)}
        </div>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default Tags;
