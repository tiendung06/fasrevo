import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Main from '../../src/layout/Main';
import Input from '../../src/components/Input';
import * as Yup from 'yup';
import Button from '../../src/components/Button';
import axios from 'axios';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.post().then((response) => {});
    } catch ({ response }) {
    } finally {
      setLoading(false);
      router.push('/sign-in');
    }
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'Mật khẩu phải từ 6 ký tự')
        .required('Mật khẩu không được để trống'),
      confirmPassword: Yup.string()
        .required('Mật khẩu nhập lại không được để trống')
        .oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không đúng'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='px-5 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>
            Đặt lại mật khẩu
          </h1>
          <p className='text-primary text-base text-center pb-5'>
            Đặt lại mật khẩu cho tài khoản của bạn
          </p>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type='password'
              name='password'
              label='Mật khẩu'
              placeholder='Nhập mật khẩu mới*'
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <Input
              type='password'
              name='confirmPassword'
              label='Nhập lại mật khẩu'
              placeholder='Nhập lại mật khẩu mới*'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              touched={formik.touched.confirmPassword}
              error={formik.errors.confirmPassword}
            />
            <Button type='submit' loading={loading}>
              Đặt lại mật khẩu
            </Button>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default ResetPassword;
