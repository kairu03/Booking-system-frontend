import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/auth.service";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);
      console.log('Login successful', data);
    } catch (error) {
      console.error(error.response?.data?.message);
    }
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
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}