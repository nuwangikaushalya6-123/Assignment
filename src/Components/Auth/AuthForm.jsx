import React, { useState, useEffect } from "react";
import "./AuthForm.css";

export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // Load users from localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (isRegister && !formData.name.trim()) {
      setMessage("Name is required!");
      return false;
    }
    if (!formData.email.includes("@")) {
      setMessage("Valid email is required!");
      return false;
    }
    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (!validate()) return;

    if (isRegister) {
      const exists = users.find((u) => u.email === formData.email);
      if (exists) {
        setMessage("Email already registered!");
        return;
      }
      const updatedUsers = [...users, formData];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setMessage(" Successfully Registered!");
      setFormData({ name: "", email: "", password: "" });
    } else {
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        setMessage(" Successfully Logged In!");
        setFormData({ name: "", email: "", password: "" });
      } else {
        setMessage(" Invalid Email or Password!");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isRegister ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
          <button type="submit" className="auth-btn">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p
          className="auth-toggle"
          onClick={() => {
            setIsRegister(!isRegister);
            setMessage("");
          }}
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>

        {message && (
          <div
            className={`auth-message ${
              message.includes("") ? "success" : "error"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
