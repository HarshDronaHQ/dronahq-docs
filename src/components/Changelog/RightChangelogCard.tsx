// RightChangelogCard.js
import React,{useRef,useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import AlertCard from './AlertCard';
import Tags from './Tags';

const RightChangelogCard = ({ title, heading, descriptions, cards,timestamp,tags,type, isDarkTheme = false }) => {
  const timestampObj = new Date(timestamp);
  const formattedTimestamp = timestampObj.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  const renderDescriptions = () => {
    if (descriptions && Array.isArray(descriptions)) {
      return descriptions.map((desc, index) => (
        <div key={index} className={`${styles['changelog-category']} changelog-category`}  >
          <ul className={styles['changelog-category-list']}>
            {Array.isArray(desc) ? (
              desc.map((description, i) => (
                <li key={i} className={styles['changelog-category-item']}>
                  {/* Check if the description contains a html */}
                  {/<[a-z][\s\S]*>/i.test(description) ? (
                    <span dangerouslySetInnerHTML={{ __html: description }} />
                  ) : (
                    // If not, render as regular text
                    <span>{description}</span>
                  )}
                </li>
              ))
            ) : (
              <li className={styles['changelog-category-item']}>
                {/* Check if the description contains a html */}
                {/<[a-z][\s\S]*>/i.test(desc) ? (
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                ) : (
                  // If not, render as regular text
                  <span>{desc}</span>
                )}
              </li>
            )}
          </ul>
        </div>
      ));
    } else if (descriptions) {
      // If it's a single string, render it as a single item in a list
      return (
        <div className={`${styles['changelog-category']} changelog-category`}>
          <ul className={styles['changelog-category-list']}>
            <li className={styles['changelog-category-item']}>
              {/* Check if the description contains a html */}
              {/<[a-z][\s\S]*>/i.test(descriptions) ? (
                <span dangerouslySetInnerHTML={{ __html: descriptions }} />
              ) : (
                // If not, render as regular text
                <span>{descriptions}</span>
              )}
            </li>
          </ul>
        </div>
      );
    }
    return null;
  };  

  const renderCards = () => {
    if (cards && Array.isArray(cards)) {
      return cards.map((card, index) => (
        <AlertCard key={index} card={card} isDarkTheme={isDarkTheme} type={type }/>
      ));
    } else {
      return null;
    }
  };

  let card_id="id"+timestamp;
  return (
    <div className={`${styles['right-changelogcard']} right-changelogcard mb-5 pt-4 ${isDarkTheme ? styles['dark-mode'] : ''}`} id={card_id}>
      {title && (<div className={`${styles['changelogcard-title']} changelogcard-title mb-2`}><a href={`#${card_id}`}>{title}</a></div>)}
      {heading &&(<div className={`${styles['changelogcard-heading']} changelogcard-heading `}>{heading}</div>)}
      <div className={`d-flex ${styles['date-tag-container']}`}>
        <div className={`${styles['changelogcard-date']} changelogcard-date hq-modal-title`}>{formattedTimestamp}</div>
        <Tags tags={tags} />
      </div>
      {descriptions && (<div className={`${styles['card-descriptions']} card-descriptions mt-4`}>{renderDescriptions()}</div>)}
      {cards && (<div className={`${styles['cards-alert']} cards-alert mt-2`}>{renderCards()}</div>)}
    </div>
  );
};

RightChangelogCard.propTypes = {
  version: PropTypes.string,
  title: PropTypes.string,
  descriptions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])),
  ]),
  cards: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default RightChangelogCard;
