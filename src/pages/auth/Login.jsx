import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>

        <p>
          no account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}