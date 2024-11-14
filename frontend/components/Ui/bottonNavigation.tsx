import React, { useState } from 'react';
import styles from './NavTabs.module.css';
import homeIcon from './assets/home_icon.svg';
import searchIcon from './assets/search_icon.svg';
import reelsIcon from './assets/reels_icon.svg';
import shopIcon from './assets/shop_icon.svg';

const NavTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const tabs = [
    { id: 'home', icon: homeIcon, alt: 'Home' },
    { id: 'search', icon: searchIcon, alt: 'Search' },
    { id: 'reels', icon: reelsIcon, alt: 'Reels' },
    { id: 'shop', icon: shopIcon, alt: 'Shop' },
  ];

  return (
    <div className={styles.navContainer}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.navTab} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <img src={tab.icon} alt={tab.alt} className={styles.icon} />
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
