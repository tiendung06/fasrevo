import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Main = ({ children, heading = 'Fasrevo', transparent }) => {
  return (
    <>
      <Head>
        <title>{heading}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header transparent={transparent}></Header>
      <main className='w-full'>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Main;
