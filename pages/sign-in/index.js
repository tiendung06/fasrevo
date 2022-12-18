import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { login } from '../../src/constants/constants.js';
import Main from '../../src/layout/Main';
import { setAuthenticated, setUser } from '../../redux/authSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../src/components/Input/index.js';
import Button from '../../src/components/Button/index.js';

const SignIn = () => {
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const { authenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.post(`${login}`, values).then((resp) => {
        dispatch(setAuthenticated(resp.data.authenticated));
        dispatch(setUser(resp.data.user));
      });
    } catch ({ response }) {
      if (response.data.status === 0) {
        setMessage(response.data.message);
      } else {
        router.push('/account/my-order');
      }
    } finally {
      setLoading(false);
    }
  };

  if (typeof window !== 'undefined') {
    if (authenticated && user) {
      if (user.role === 1) {
        router.push('/admin');
      } else {
        router.push('/account/my-order');
      }
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
    <Main heading="Đăng nhập">
      <div className="w-full container mx-auto min-h-screen max-h-[850px] flex justify-center items-center">
        <div className="px-5 py-10 w-full max-w-[500px] text-primary">
          <h1 className="font-bold text-center text-2xl pt-5 pb-6">
            Đăng nhập
          </h1>
          <p className="text-base text-center pb-3 text-primary">
            Chào mừng đến với Fasrevo
          </p>
          <p className="text-base text-center pb-5 text-primary">
            Đăng nhập với email của bạn và mật khẩu
          </p>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Nhập email của bạn*"
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <Input
              type="password"
              name="password"
              label="Mật khẩu"
              placeholder="Nhập mật khẩu của bạn*"
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <div className="text-right mb-5">
              <Link href="/forgot-password">
                <a className="text-sm hover:text-primary_red transition-all">
                  Quên mật khẩu?
                </a>
              </Link>
            </div>
            {message ? (
              <div className="text-secondary_red bg-[#ffe2e2] h-10 text-center text-sm mb-5 font-medium flex items-center justify-center">
                {message}
              </div>
            ) : null}
            <Button type="submit" loading={loading}>
              Đăng nhập
            </Button>
          </form>
          <div className="w-full text-center mt-5">
            <span className="text-sm">Bạn chưa có tài khoản? </span>
            <Link href="/sign-up">
              <a className="text-sm hover:underline text-primary_red transition-all font-medium">
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
