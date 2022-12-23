import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setAuthenticated, setUser } from '../redux/authSlide';
import { authenticate } from './constants/constants';

axios.defaults.withCredentials = true;

const Auth = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { user, authenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authenticated || !user) {
      setLoading(true);
      axios
        .get(authenticate)
        .then((res) => {
          console.log('Authenticating', res.data);
          dispatch(setAuthenticated(res.data.authenticated ?? false));
          dispatch(setUser(res.data.user));
        })
        .catch((e) => {
          console.log(e.message);
          router.push('/');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [authenticated, user, dispatch]);

  if (authenticated && user) {
    if (user.role === 1) {
      if (!router.pathname.includes('admin')) {
        router.push('/admin');
      }
    } else {
      if (router.pathname.includes('admin')) {
        router.push('/');
      }
    }
  }

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-10 h-10 rounded-full border-4 border-primary_red border-t-transparent border-t-4 mx-auto animate-spin"></div>
      </div>
    );
  }

  return <Component {...pageProps} />;
};

export default Auth;
