import React, { useEffect, useState } from 'react';
import Banner from '../src/components/Banner';
import Main from '../src/layout/Main';
import FeaturedProduct from '../src/components/FeaturedProduct';
import Category from '../src/components/Category';
import Collections from '../src/components/Collections';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authenticate } from '../src/constants/constants';
import { setAuthenticated, setUser } from '../redux/authSlide';

axios.defaults.withCredentials = true;

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(authenticate)
      .then((res) => {
        console.log(res.data);
        dispatch(setAuthenticated(res.data.authenticated ?? false));
        dispatch(setUser(res.data.user));
      })
      .catch((e) => {
        console.log(e.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-10 h-10 rounded-full border-4 border-primary_red border-t-transparent border-t-4 mx-auto animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Main transparent={true}>
        <Banner></Banner>
        <Category></Category>
        <FeaturedProduct></FeaturedProduct>
        <Collections></Collections>
      </Main>
    </div>
  );
}
