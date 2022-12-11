import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
