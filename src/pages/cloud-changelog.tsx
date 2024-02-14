import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChangelogCard from '../components/Changelog';
import styles from '../components/Changelog/style.module.scss';

const CloudChangelog = () => {
  const { isDarkTheme } = useDocusaurusContext();
  const [changelogData, setChangelogData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetch('/files/changelogdata.json')
      .then(response => response.text()) // Use response.text() to handle empty responses
      .then(data => {
        // Check if data is not empty before parsing
        if (data.trim() !== '') {
          const jsonData = JSON.parse(data);
          const filteredData = jsonData.filter(item => item.tags && item.tags.includes("Cloud-Hosted"));
          if (Array.isArray(filteredData)) {
            const sortedData = filteredData.sort((a, b) => b.timestamp - a.timestamp);
            setChangelogData(sortedData);
          } else {
            console.error('Invalid data structure. Expected an array.');
          }
        } else {
          console.error('Fetched data is empty.');
        }
        // Data has been fetched, set dataFetched to true
        setDataFetched(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Access the changelog-main div
    const changelogMainDiv = document.querySelector('.changelog-main');

    const updateTheme = () => {
      const htmlTheme = document.querySelector('html').getAttribute('data-theme');
      // Set the data-theme attribute of changelog-main based on the htmlTheme
      if (changelogMainDiv && htmlTheme) {
        changelogMainDiv.setAttribute('data-theme', htmlTheme);
      }
    };

    // Use MutationObserver to watch for changes in attributes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.querySelector('html'), { attributes: true });

    // Initial update when the component mounts
    updateTheme();

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout title="Changelog">
      <div className={`${styles['changelog-main']} changelog-main m-left-right-auto nocode `} data-theme={!isDarkTheme ? '' : 'dark'}>
        <div className={`${styles['mx-auto']} mx-auto ${styles['changelog-comp-div']} changelog-comp-div`}>
          {/* Only render the ChangelogCard components if data has been fetched */}
          {dataFetched ? (
            changelogData.length > 0 ? (
              changelogData.map((item, index) => (
                <ChangelogCard
                  key={`${item.timestamp}_${index}`}              
                  timestamp={item.timestamp}
                  tags={item.tags}
                  heading={item.heading}
                  title={item.title}
                  embed={item.embed}
                  descriptions={item.descriptions}
                  cards={item.cards}
                  isDarkTheme={isDarkTheme}
                />
              ))
            ) : (
              <div className={`${styles['coming-soon']}`}>
                <div className={`${styles['title']}`}>Great things Coming Soon</div>
                <a className={`${styles['redirect-doc']} d-flex`} href='/'>
                  <div>Checkout Docs</div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                    <path d="M3 8L12 8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.16797 12.4999L12.668 7.99983L8.16797 3.49978" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            )
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CloudChangelog;
