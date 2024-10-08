// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import BlogPost from './components/BlogPost';

// function App() {
//   const isAuthenticated = false; // Simulate authentication
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile/*" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Profile />} />} />
//         <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/profile/*"
          element={<ProtectedRoute element={Profile} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

