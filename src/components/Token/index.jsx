import { useState } from 'react'

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('access');
        const userToken = JSON.parse(tokenString);
        return userToken?.access
      };
    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        localStorage.setItem('access', JSON.stringify(userToken));
        setToken(userToken.access);
      };

      return {
        setToken: saveToken,
        token
      }
}

export default useToken