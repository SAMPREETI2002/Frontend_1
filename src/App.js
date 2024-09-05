import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';  // Import the routing component
import { UserProvider } from './UserContext'; // Import the context provider

const App = () => {
  return (
    <UserProvider> {/* Wrap the app with UserProvider */}
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
};

export default App;
