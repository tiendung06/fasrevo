import React, { useEffect, useState } from 'react';
import Banner from '../src/components/Banner';
import Main from '../src/layout/Main';
import FeaturedProduct from '../src/components/FeaturedProduct';
import Category from '../src/components/Category';
import Collections from '../src/components/Collections';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authenticate } from '../src/constants/constants';
import { setAuthenticated } from '../redux/authSlide';

axios.defaults.withCredentials = true;

export default function Home() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get(authenticate).then((res) => {
      console.log(res.data);

      dispatch(setAuthenticated(res.data.authenticated ?? false));

      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
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
