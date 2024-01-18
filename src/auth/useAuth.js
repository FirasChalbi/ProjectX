// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(null);

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
            const user = await response.json(); // Try to parse user information from the response
            if (user || user.name) {
              console.log(`User ${user.name} is authenticated.`);
              setAuthenticated(true);
            } else {
              console.log('User information is missing or invalid.');
              setAuthenticated(false);
            }
          } catch (jsonError) {
            console.error('Error parsing JSON from server response:', jsonError);
            setAuthenticated(false);
          }
        } else {
          console.log('User is not authenticated.');
          setAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuthenticated(false);
      }
    };
  

    checkAuthentication();
  }, []); // This effect runs once when the component mounts

  const login = async () => {
    // Simulate a login action, and the server would set the appropriate session or token
    setAuthenticated(true);
  };

  const logout = async () => {
    // Simulate a logout action, and the server would invalidate the session or token
    setAuthenticated(false);
  };

  return { authenticated, login, logout };
};

export default useAuth;
