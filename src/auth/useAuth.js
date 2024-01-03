// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('https://barkaa-service.onrender.com/auth/check', {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          try {
            const user = await response.json();
            if (user && user.authenticated === false) {
              console.log('User is not authenticated.');
              setAuthenticated(false);
            } else {
              console.log(`User ${user.name} is authenticated.`);
              setAuthenticated(true);
            }
          } catch (jsonError) {
            console.error('Error parsing JSON from server response:', jsonError);
            setAuthenticated(false);
          }
        } else {
          console.log('Error:', response.statusText);
          setAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuthenticated(false);
      }
    };
  
    checkAuthentication();
  }, []);
   // This effect runs once when the component mounts

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
