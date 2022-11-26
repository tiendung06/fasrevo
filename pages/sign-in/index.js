import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { login } from '../../src/constants/constants.js';
import Main from '../../src/layout/Main';
import { setAuthenticated } from '../../redux/authSlide';
import { useDispatch, useSelector } from 'react-redux';
import useHandleChange from '../../hooks/useHandleChange.js';
import { useRouter } from 'next/router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (e) => {
    try {
      await axios
        .post(`${login}`, {
          email: email,
          password: password,
        })
        .then((resp) => {
          dispatch(setAuthenticated(resp.data.authenticated));
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (typeof window !== 'undefined') {
    if (authenticated) {
      router.push('/');
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const { values, handleChange } = useHandleChange({
    email: '',
    password: '',
  });

  return (
    <Main>
      <div className='w-full container mx-auto min-h-screen max-h-[850px] flex justify-center items-center'>
        <div className='px-5 py-10 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl pt-5 pb-6'>
            Đăng nhập
          </h1>
          <p className='text-base text-center pb-3 text-primary'>
            Chào mừng đến với Fasrevo
          </p>
          <p className='text-base text-center pb-5 text-primary'>
            Đăng nhập với email của bạn và mật khẩu
          </p>
          <div className='w-full h-10 my-5'>
            <input
              type='email'
              name='email'
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              placeholder='Tài khoản*'
              onChange={handleChangeEmail}
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              type='password'
              name='password'
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              placeholder='Mật khẩu*'
              onChange={handleChangePassword}
            />
          </div>
          <div className='text-right '>
            <Link href='/forgot-password'>
              <a className='text-sm hover:underline transition-all'>
                Quên mật khẩu?
              </a>
            </Link>
          </div>
          <button
            className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'
            onClick={handleSubmit}
          >
            Đăng nhập
          </button>
          <div className='w-full text-center'>
            <span className='text-sm'>Bạn chưa có tài khoản? </span>
            <Link href='/sign-up'>
              <a className='text-sm hover:underline transition-all font-medium'>
                Đăng ký
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SignIn;
