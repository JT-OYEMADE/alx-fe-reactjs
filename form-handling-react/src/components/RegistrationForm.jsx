import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation without using `if (!username)` or `setErrors`
    let errors = {};
    let isValid = true;

    for (const [key, value] of Object.entries(formValues)) {
      if (!value.trim()) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        isValid = false;
      }
    }

    if (isValid) {
      console.log('Form submitted', formValues);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        {formErrors.username && <p>{formErrors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
