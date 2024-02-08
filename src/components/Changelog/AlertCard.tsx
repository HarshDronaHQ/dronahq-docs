// AlertCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const AlertCard = ({ card, isDarkTheme }) => {
  const cardClassName = `${styles['alert-card']} alert-card ${styles[card.color] || ''} mb-3`;

  return (
    <div className={cardClassName}>
      <div className={`${styles['alert-card-header']} alert-card-header`}>
        <img src={`../icons/${card.icon}`} className='alert-card-icon'/>
        <div className={`${styles['alert-card-title']} alert-card-title ml-1`}>{card.title}</div>
      </div>
      <div className={`${styles['alert-card-descriptions']} alert-card-descriptions`}>
        {card.descriptions.map((desc, i) => (
          <div key={i}>{desc}</div>
        ))}
        {card.points && (
          <ul className={styles['alert-card-points']}>
            {card.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

AlertCard.propTypes = {
  card: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string, // Assuming color is optional
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    points: PropTypes.arrayOf(PropTypes.string), // Assuming points is optional
  }).isRequired,
  isDarkTheme: PropTypes.bool, // Make isDarkTheme optional
};

export default AlertCard;
