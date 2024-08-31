// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';

function App() {
  const isAuthenticated = false; // Simulate authentication
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Profile />} />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
