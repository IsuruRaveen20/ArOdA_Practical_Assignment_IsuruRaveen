import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../services/api';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const Flavour = () => {
  const [flavourContent, setFlavourContent] = useState([]);

  useEffect(() => {
    // Fetch flavour content from API
    api.get('/flavour')
      .then(response => {
        setFlavourContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching Flavour content:', error);
      });
  }, []);

  return (
    <div>
      <h1>Flavours</h1>
      <Grid container spacing={2}>
        {flavourContent.map(flavour => (
          <Grid item xs={12} sm={6} md={3} key={flavour._id}>
            <Card sx={{ maxWidth: 300 }}>
              {flavour.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={flavour.image}
                  alt={`Flavour: ${flavour.name}`}
                />
              )}
              <CardContent>
                <Typography variant="h6" component="div">
                  {flavour.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {flavour.description}
                </Typography>
                {flavour.price && (
                  <Typography variant="body2" color="text.secondary">
                    Price: {flavour.price}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Flavour;
