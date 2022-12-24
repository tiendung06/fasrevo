import React, { useEffect, useState } from 'react';
import Input from '../../../src/components/Input';
import Button from '../../../src/components/Button';
import MainAccount from '../../../src/layout/MainAccount';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { users } from '../../../src/constants/constants';
import { useSelector } from 'react-redux';

const ChangePassword = () => {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();

  const handleChangePassword = async (values) => {
    try {
      setLoading(true);
      await axios.put(`${users.updatePassword()}`, values).then((response) => {
        setMessage(response.data.message);
        setStatus(response.data.status);
      });
    } catch ({ response }) {
      setMessage(response.data.message);
      setStatus(response.data.status);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordNew: '',
      confirmPasswordNew: '',
      email: user?.email,
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Mật khẩu hiện tại không được để trống'),
      passwordNew: Yup.string().required('Mật khẩu mới không được để trống'),
      confirmPasswordNew: Yup.string()
        .required('Xác nhận mật khẩu mới không được để trống')
        .oneOf([Yup.ref('passwordNew')], 'Xác nhận mật khẩu không đúng'),
    }),
    onSubmit: ({ email, password, passwordNew }, actions) => {
      handleChangePassword({ email, password, passwordNew });
      actions.resetForm({
        password: '',
        passwordNew: '',
        confirmPasswordNew: '',
      });
    },
  });

  return (
    <MainAccount heading="Đổi mật khẩu">
      <form onSubmit={formik.handleSubmit} className="max-w-[500px]">
        <Input
          type="password"
          name="password"
          label="Mật khẩu hiện tại"
          placeholder="Nhập mật khẩu hiện tại*"
          value={formik.values.password}
          touched={formik.touched.password}
          error={formik.errors.password}
          onChange={formik.handleChange}
        />
        <Input
          type="password"
          name="passwordNew"
          label="Mật khẩu mới"
          placeholder="Nhập mật khẩu mới*"
          value={formik.values.passwordNew}
          touched={formik.touched.passwordNew}
          error={formik.errors.passwordNew}
          onChange={formik.handleChange}
        />
        <Input
          type="password"
          name="confirmPasswordNew"
          label="Xác nhận mật khẩu mới"
          placeholder="Xác nhận mật khẩu mới*"
          value={formik.values.confirmPasswordNew}
          touched={formik.touched.confirmPasswordNew}
          error={formik.errors.confirmPasswordNew}
          onChange={formik.handleChange}
        />
        {message ? (
          <div
            className={`${
              status === 0
                ? 'text-secondary_red bg-[#ffe2e2]'
                : 'text-primary_green bg-[#b5fCa9]'
            } h-10 text-center text-sm mb-5 font-medium flex items-center justify-center`}
          >
            {message}
          </div>
        ) : null}
        <Button type="submit" loading={loading}>
          Đổi mật khẩu
        </Button>
      </form>
    </MainAccount>
  );
};

export default ChangePassword;
