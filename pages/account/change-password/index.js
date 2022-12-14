import React, { useState } from 'react';
import Input from '../../../src/components/Input';
import Button from '../../../src/components/Button';
import MainAccount from '../../../src/layout/MainAccount';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(
        'Mật khẩu hiện tại không được để trống'
      ),
      newPassword: Yup.string().required('Mật khẩu mới không được để trống'),
      confirmNewPassword: Yup.string()
        .required('Xác nhận mật khẩu mới không được để trống')
        .oneOf([Yup.ref('newPassword')], 'Xác nhận mật khẩu không đúng'),
    }),
    onSubmit: (values) => {},
  });

  return (
    <MainAccount heading='Đổi mật khẩu'>
      <form onSubmit={formik.handleSubmit} className='max-w-[500px]'>
        <Input
          type='password'
          name='currentPassword'
          label='Mật khẩu hiện tại'
          placeholder='Nhập mật khẩu hiện tại*'
          value={formik.values.currentPassword}
          touched={formik.touched.currentPassword}
          error={formik.errors.currentPassword}
          onChange={formik.handleChange}
        />
        <Input
          type='password'
          name='newPassword'
          label='Mật khẩu mới'
          placeholder='Nhập mật khẩu mới*'
          value={formik.values.newPassword}
          touched={formik.touched.newPassword}
          error={formik.errors.newPassword}
          onChange={formik.handleChange}
        />
        <Input
          type='password'
          name='confirmNewPassword'
          label='Xác nhận mật khẩu mới'
          placeholder='Xác nhận mật khẩu mới*'
          value={formik.values.confirmNewPassword}
          touched={formik.touched.confirmNewPassword}
          error={formik.errors.confirmNewPassword}
          onChange={formik.handleChange}
        />
        <Button type='submit' loading={loading}>
          Đổi mật khẩu
        </Button>
      </form>
    </MainAccount>
  );
};

export default ChangePassword;
