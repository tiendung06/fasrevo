import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Auth from '../src';
import '../styles/globals.scss';

function MyApp(props) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <Provider store={store}>
      <Auth {...props} />
    </Provider>
  );
}

export default MyApp;
