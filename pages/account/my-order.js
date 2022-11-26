import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';
import { useRouter } from 'next/router';
import axios from 'axios';
import { logout } from '../../src/constants/constants';
import { useDispatch, useSelector } from 'react-redux';

const MyOrder = () => {
  const router = useRouter();

  const authenticated = useSelector((state) => state.auth.authenticated);

  const handleSignOut = () => {
    if (typeof window !== 'undefined') {
      axios.get(logout).then((res) => {
        router.push('/');
      });
    }
  };

  if (typeof window !== 'undefined') {
    if (!authenticated) {
      router.push('/');
    }
  }

  return (
    <Main>
      <Section>
        <div className='w-full grid grid-cols-4 h-screen gap-5 py-10'>
          <div className='border-border_input border-r pr-5'>
            <div className='w-full h-[300px]'>
              <picture>
                <img
                  src='../images/men.jpg'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </picture>
            </div>
            <p className='text-center text-2xl text-primary font-medium pt-5'>
              Đỗ Tiến Dũng
            </p>
            <button onClick={handleSignOut}>Đăng xuất</button>
          </div>
          <div className='col-span-3 bg-slate-500'></div>
        </div>
      </Section>
    </Main>
  );
};

export default MyOrder;
