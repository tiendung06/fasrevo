import React from 'react';
import Main from '../../src/layout/Main';
import Input from '../../src/components/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
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
              placeholder='Email*'
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
              error={formik.errors.email}
            />
            <div className='text-sm'>
              Xác nhận địa chỉ email, mật khẩu mới sẽ được gửi tới email của bạn
            </div>
            <button
              type='submit'
              className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'
            >
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default SignIn;
