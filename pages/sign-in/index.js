import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { login } from '../../src/constants/constants.js';
import Main from '../../src/layout/Main';
import { setAuthenticated } from '../../redux/authSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../src/components/Input/index.js';

const SignIn = () => {
  const [message, setMessage] = useState();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      await axios.post(`${login}`, values).then((resp) => {
        dispatch(setAuthenticated(resp.data.authenticated));
      });
    } catch ({ response }) {
      if (response.data.status === 0) {
        setMessage(response.data.message);
      } else {
        router.push('/');
      }
    }
  };

  if (typeof window !== 'undefined') {
    if (authenticated) {
      router.push('/');
    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
      password: Yup.string().required('Mật khẩu không được để trống'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
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
          <form onSubmit={formik.handleSubmit}>
            <Input
              type='email'
              name='email'
              placeholder='Tài khoản*'
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <Input
              type='password'
              name='password'
              placeholder='Mật khẩu*'
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <div className='text-right '>
              <Link href='/forgot-password'>
                <a className='text-sm hover:underline transition-all'>
                  Quên mật khẩu?
                </a>
              </Link>
            </div>
            {message ? (
              <div className='text-red-500 bg-red-300 h-10 text-center my-5 font-medium flex items-center justify-center'>
                {message}
              </div>
            ) : null}
            <button
              className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'
              type='submit'
            >
              Đăng nhập
            </button>
          </form>
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
