import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader"; 
import "../../home/styles/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/admin";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", data.token);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <h1>Admin Sign In</h1>
      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <div className="loading-container">
          <PuffLoader color="#693def" size={60} />
          <span>Signing in...</span>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-button">Sign In</button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
