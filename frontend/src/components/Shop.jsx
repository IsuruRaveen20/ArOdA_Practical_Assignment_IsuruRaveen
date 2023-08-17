import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../services/api';
import './Shop.css';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch Product content from API
    api.get('/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching Product content:', error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <Card sx={{ maxWidth: 300 }}>
              {product.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={`Flavour: ${product.name}`}
                />
              )}
              <CardContent>
                <Typography variant="h6" component="div" className='product-name'>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                {product.price && (
                  <Typography variant="body2" color="text.secondary" className='price'>
                    Price: {product.price}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Shop;
