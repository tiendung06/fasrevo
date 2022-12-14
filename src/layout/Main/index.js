import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setCartQuantity } from '../../../redux/cartSlide';
import { useEffect } from 'react';
import axios from 'axios';
import { getCart } from '../../constants/constants';

const Main = ({ children, heading = 'Fasrevo', transparent }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      axios.post(getCart, { uid: user.uid }).then((res) => {
        dispatch(setCartQuantity(res.data.carts.length));
      });
    }
  }, [user, dispatch]);

  return (
    <>
      <Head>
        <title>{heading}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header transparent={transparent}></Header>
      <main className="w-full">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Main;
