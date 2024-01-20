// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated by asking the server
    const checkAuthentication = async () => {
      try {
        const response = await fetch('https://barkaa-service.onrender.com/auth/check', {
          method: 'GET',
          credentials: 'include', // Include cookies in the request
        });
  
        if (response.ok) {
          try {
            const userData = await response.json(); // Try to parse user information from the response
            if (userData && userData.name) {
              console.log(`User ${userData.name} is authenticated.`);
              setAuthenticated(true);
              setUser(userData); // Set user information in the state
            } else {
              console.log('User information is missing or invalid.');
              setAuthenticated(false);
              setUser(null); // Reset user information in case of an issue
            }
          } catch (jsonError) {
            console.error('Error parsing JSON from server response:', jsonError);
            setAuthenticated(false);
            setUser(null);
          }
        } else {
          console.log('User is not authenticated.');
          setAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuthenticated(false);
        setUser(null);
      }
    };
  
    checkAuthentication();
  }, []); // This effect runs once when the component mounts

  const login = async () => {
    // Simulate a login action, and the server would set the appropriate session or token
    setAuthenticated(true);
    // Set user information if available
    setUser({ name: 'John Doe', /* other user data */ });
  };

  const logout = async () => {
    // Simulate a logout action, and the server would invalidate the session or token
    setAuthenticated(false);
    // Reset user information on logout
    setUser(null);
  };

  return { authenticated, login, logout, user };
};

export default useAuth;
