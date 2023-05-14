
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserProfilePage from './components/profilePage/UserProfilePage';
import LoginPage from './components/Login/LoginPage';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            loggedIn ? (
              <HomePage setLoggedIn={setLoggedIn} />
            ) : (
              <LoginPage setLoggedIn={setLoggedIn} />
            )
          }
        />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

