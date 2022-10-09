import React from 'react';
import Link from 'next/link';
import Main from '../../src/layout/Main';

const SignIn = () => {
  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='px-5 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>Đăng nhập</h1>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-[rgba(0,0,0,0.12)] text-sm text-secondary_text'
              type='text'
              placeholder='Tài khoản'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-[rgba(0,0,0,0.12)] text-sm text-secondary_text'
              type='password'
              placeholder='Mật khẩu'
            />
          </div>
          <div className='text-right '>
            <Link href='/forgot-password'>
              <a className='text-sm hover:underline transition-all'>
                Quên mật khẩu?
              </a>
            </Link>
          </div>
          <div className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'>
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
