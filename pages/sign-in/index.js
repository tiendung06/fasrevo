import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { login } from '../../src/constants/constants.js';
import Main from '../../src/layout/Main';

const SignIn = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [autoken, setAuthtoken] = useState('');
  const handleSubmit = async (e) => {
    try {
      await axios
        .post(`${login}`, {
          username: username,
          password: password,
        })
        .then((resp) => {
          setAuthtoken(resp.data.authToken);
          console.log(autoken);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(autoken);
  };

  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='px-5 py-10 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>Đăng nhập</h1>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-[rgba(0,0,0,0.12)] text-sm text-secondary_text'
              type='text'
              placeholder='Tài khoản*'
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-[rgba(0,0,0,0.12)] text-sm text-secondary_text'
              type='password'
              placeholder='Mật khẩu*'
              value={password}
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
          <div
            className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'
            onClick={handleSubmit}
          >
            Đăng nhập
          </div>
          <div className='w-full text-center'>
            <span className='text-sm'>Bạn chưa có tài khoản? </span>
            <Link href='/sign-up'>
              <a className='text-sm hover:underline transition-all'>Đăng ký</a>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SignIn;
