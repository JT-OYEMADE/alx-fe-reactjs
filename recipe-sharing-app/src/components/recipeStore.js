import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return {
      searchTerm: term,
      filteredRecipes: filtered,
    };
  }),

  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    const filtered = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: filtered,
    };
  }),

  // Existing actions like updateRecipe and deleteRecipe should also update filteredRecipes
}));

export { useRecipeStore };