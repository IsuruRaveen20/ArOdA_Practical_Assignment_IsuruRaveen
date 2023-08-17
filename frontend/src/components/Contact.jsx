import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from '../services/api';
import './Contact.css';
// import api from '../services/api';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault()

    setNameError(false)
    setEmailError(false)
    setDescriptionError(false)


    if (name === '') {
      setNameError(true)
    }
    if (email === '') {
      setEmailError(true)
    }
    if (description === '') {
      setDescriptionError(true)
    }

    if (name && email && description) {
      try {
        // Send form data to the API
        await axios.post("contact", { name, email, description });
        // Clear the form fields on successful submission
        setName("");
        setEmail("");
        setDescription("");
        // You can also show a success message to the user
        console.log("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit} className="contactForm">
        <h2>Contact Us</h2>
        <TextField
          label="Name"
          onChange={e => setName(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={name}
          error={nameError}
        />
        <TextField
          label="Email"
          onChange={e => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          value={email}
          error={emailError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          value={description}
          error={descriptionError}
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">Submit</Button>

      </form>
    </React.Fragment>
  );
}

export default Contact
