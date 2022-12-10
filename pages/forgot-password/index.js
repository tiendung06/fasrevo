import React from 'react';
import Main from '../../src/layout/Main';
import Input from '../../src/components/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../../src/components/Button';

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='px-5 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>Quên mật khẩu</h1>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type='email'
              name='email'
              label='Email'
              placeholder='Nhập email của bạn*'
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <div className='text-sm mb-5'>
              Xác nhận địa chỉ email, mật khẩu mới sẽ được gửi tới email của bạn
            </div>
            <Button type='submit'>Xác nhận</Button>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default ForgotPassword;
