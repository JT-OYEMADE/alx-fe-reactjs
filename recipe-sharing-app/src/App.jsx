// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RecipeList from './components/RecipeList';
// import AddRecipeForm from './components/AddRecipeForm';
// import RecipeDetails from './components/RecipeDetails';
// import SearchBar from './components/SearchBar';

// function App() {
//   return (
//     <Router>
//       <div>
//         <h1>Recipe Sharing App</h1>
//         <SearchBar />
//         <Routes>
//           <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
//           <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
