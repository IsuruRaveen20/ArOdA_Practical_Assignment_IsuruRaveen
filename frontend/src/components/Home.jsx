import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../services/api';
import './Home.css';

import HomeHero from './Hero/HomeHero/HomeHero';
const Home = () => {
  const [homeContent, setHomeContent] = useState(null);

  useEffect(() => {
    // Fetch home content from API
    api.get('/home')
      .then(response => {
        setHomeContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching home content:', error);
      });
  }, []);

  return (
    <div>
      <HomeHero />
      <div className="home-container">
        {homeContent && (
          <div className="home-content">
            <h1 className="home-heading">{homeContent.heading1}</h1>
            <p className="home-text">{homeContent.content1}</p>
            <h2 className="home-subheading">{homeContent.heading2}</h2>
            <p className="home-text">{homeContent.content2}</p>
            <img
              className="home-image"
              src={homeContent.image}
              alt="Home Content"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home

{/* {homeContent && (
  <div>
    <h1>{homeContent.heading1}</h1>
    <p>{homeContent.content1}</p>
    <h2>{homeContent.heading2}</h2>
    <p>{homeContent.content2}</p>
    <img src={homeContent.image} alt="Home Content" />
  </div>
)} */}