import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/',
});

// Usage Home
api.get('/home')
  .then(response => {
    // Handle response
  })
  .catch(error => {
    // Handle error
  });

// api.get('/flavour')
//   .then(response => {
//     // Handle response
//   })
//   .catch(error => {
//     // Handle error
//   });
export default api;
