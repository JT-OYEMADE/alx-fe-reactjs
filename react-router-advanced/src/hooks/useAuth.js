// src/hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  // Simulate authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate a login function
  const login = () => setIsAuthenticated(true);

  // Simulate a logout function
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

export default useAuth;
