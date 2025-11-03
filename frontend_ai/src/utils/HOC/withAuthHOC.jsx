import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext';

const WithAuthHOC = (WrappedComponent) => {
  return function WithAuth(props) {
    const { setLogin } = useContext(AuthContext); // ✅ inside component body
    const navigate = useNavigate();

    useEffect(() => {
      const isLogin = localStorage.getItem('isLogin');
      if (!isLogin) {
        setLogin(false);
        navigate('/');
      }
    }, [navigate, setLogin]);

    return <WrappedComponent {...props} />;
  };
};

export default WithAuthHOC;
