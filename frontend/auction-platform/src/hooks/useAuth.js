import { useState } from "react";
import axios from "axios";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setLoading(false);
    } catch (error) {
      setError("Invalid Credentials");
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useAuth;