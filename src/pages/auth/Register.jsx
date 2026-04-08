import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={formData.name}
          onChange={(e) => setFormData({
            ...formData,
            name: e.target.value,
          })}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({
            ...formData,
            email: e.target.value,
          })}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => setFormData({
            ...formData,
            password: e.target.value,
          })}
        />

        <button type="submit">Register</button>

        <p>
          no account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}