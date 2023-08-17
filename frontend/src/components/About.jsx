import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../services/api';
import './About.css';

const About = () => {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    // Fetch About content from API
    api.get('/about')
      .then(response => {
        setAboutContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching About content:', error);
      });
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      {aboutContent && (
        <div className="about-content">
          <p className="content1">{aboutContent.content1}</p>
          <p className="content2">{aboutContent.content2}</p>
          <p className="content3">{aboutContent.content3}</p>
        </div>
      )}
    </div>
  );
};

export default About;
