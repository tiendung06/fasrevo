import React from 'react';
import Link from 'next/link';
import Main from '../../src/layout/Main';

const SignIn = () => {
  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='px-5 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>Quên mật khẩu</h1>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-[rgba(0,0,0,0.12)] text-sm text-secondary_text'
              type='email'
              placeholder='Email*'
            />
          </div>
          <div className='text-sm'>
            Xác nhận địa chỉ email, mật khẩu mới sẽ được gửi tới email của bạn
          </div>
          <div className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'>
            Xác nhận
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SignIn;
