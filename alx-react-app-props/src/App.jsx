import UserProfile from './components/UserProfile';

import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </UserContext.Provider>
  );
}

export default App;