import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Registration details:', formData);
    // Send data to backend here
  };

  const handleRegister = async () => {
    const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    console.log(data);
};


 return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;