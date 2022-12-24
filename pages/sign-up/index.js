import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Main from '../../src/layout/Main';
import { register } from '../../src/constants/constants.js';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../src/components/Input';
import Button from '../../src/components/Button';

const SignUp = () => {
  const [arrayProvince, setArrayProvince] = useState([]);
  const [arrayDistricts, setArrayDistricts] = useState([]);
  const [arrayWard, setArrayWard] = useState([]);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.post(`${register}`, values).then((response) => {
        if (response.data.status === 1) {
          setMessage(response.data.message);
          setStatus(response.data.status);
          setTimeout(() => {
            router.push('/sign-in');
          }, 1000);
        }
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
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      street: '',
      sex: 1,
      ward: '',
      district: '',
      province: '',
    },

    validationSchema: Yup.object({
      fullname: Yup.string().required('Tên người dùng không được để trống'),
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
      password: Yup.string()
        .min(6, 'Mật khẩu phải từ 6 ký tự trở lên')
        .max(255, 'Mật khẩu phải từ 255 ký tự trở xuống')
        .required('Mật khẩu không được để trống'),
      confirmPassword: Yup.string()
        .required('Mật khẩu nhập lại không được để trống')
        .oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không đúng'),
      phone: Yup.string()
        .min(10, 'Số điện thoại không hơp lệ')
        .max(11, 'Số điện thoại không hơp lệ')
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'Số điện thoại không hơp lệ'
        )
        .typeError('Số điện thoại không hơp lệ')
        .required('Số điện thoại không được để trống'),
      street: Yup.string().required('Số nhà không được để trống'),
      ward: Yup.string().required('Vui lòng chọn xã phường'),
      district: Yup.string().required('Vui lòng chọn quận huyện'),
      province: Yup.string().required('Vui lòng chọn tỉnh thành phố'),
    }),
    onSubmit: ({ fullname, email, password, phone, sex }, actions) => {
      const currentProvince = arrayProvince.find(
        (p) => p.province_id === formik.values.province
      );

      const currentDistrict = arrayDistricts.find(
        (d) => d.district_id === formik.values.district
      );

      const currentWard = arrayWard.find(
        (w) => w.ward_id === formik.values.ward
      );

      const address = `${formik.values.street}, ${currentWard.ward_name}, ${currentDistrict.district_name}, ${currentProvince.province_name}`;

      handleSubmit({
        fullname,
        email,
        password,
        phone,
        address,
        sex,
      });
    },
  });

  useEffect(() => {
    axios
      .get('https://vapi.vnappmob.com/api/province', {
        withCredentials: false,
      })
      .then((resp) => {
        setArrayProvince(resp.data.results);
      });
  }, []);

  useEffect(() => {
    if (formik.values.province > 0) {
      axios
        .get(
          `https://vapi.vnappmob.com/api/province/district/${formik.values.province}`,
          {
            withCredentials: false,
          }
        )
        .then((resp) => {
          setArrayDistricts(resp.data.results);
        });
    }
  }, [formik.values.province]);

  useEffect(() => {
    if (formik.values.district > 0) {
      axios
        .get(
          `https://vapi.vnappmob.com/api/province/ward/${formik.values.district}`,
          {
            withCredentials: false,
          }
        )
        .then((resp) => {
          setArrayWard(resp.data.results);
        });
    }
  }, [formik.values.district]);

  return (
    <Main heading="Đăng ký">
      <div className="w-full min-h-screen flex justify-center items-center mt-20">
        <div className="px-5 py-10 w-full max-w-[500px] text-primary">
          <h1 className="font-bold text-center text-2xl py-5">Đăng ký</h1>
          <p className="text-primary text-base text-center pb-5">
            Tạo tài khoản để tăng trải nghiệm mua sắm cá nhân và thanh toán trực
            tuyến một cách nhanh nhất.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              name="fullname"
              label="Họ tên"
              placeholder="Nhập họ và tên*"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              touched={formik.touched.fullname}
              error={formik.errors.fullname}
            />
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
              autoComplete={'new-password'}
            />
            <Input
              type="password"
              name="confirmPassword"
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu*"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              touched={formik.touched.confirmPassword}
              error={formik.errors.confirmPassword}
              autoComplete={'new-password'}
            />
            <div className="w-full mb-5">
              <label htmlFor="sex" className="text-sm font-medium">
                Giới tính
              </label>
              <select
                name="sex"
                id="sex"
                className="w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input"
                onChange={(e) => {
                  formik.setFieldValue('sex', parseInt(e.target.value));
                }}
                value={formik.values.sex}
              >
                <option value={1}>Nam</option>
                <option value={0}>Nữ</option>
              </select>
            </div>
            <Input
              type="text"
              name="phone"
              label="Số điện thoại"
              placeholder="Nhập số điện thoại của bạn*"
              onChange={formik.handleChange}
              value={formik.values.phone}
              touched={formik.touched.phone}
              error={formik.errors.phone}
            />
            <div className="w-full my-5">
              <label htmlFor="sex" className="text-sm font-medium">
                Chọn Tỉnh/Thành phố
              </label>
              <select
                name="province"
                id="province"
                className="w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input"
                autoComplete={'new-password'}
                value={formik.values.province}
                onChange={formik.handleChange}
              >
                <option value={''}>Chọn Tỉnh/Thành Phố*</option>
                {arrayProvince.map(({ province_name, province_id }) => (
                  <option key={province_id} value={province_id}>
                    {province_name}
                  </option>
                ))}
              </select>
              {formik.touched.province && formik.errors.province ? (
                <div className="text-sm text-secondary_red">
                  {formik.errors.province}
                </div>
              ) : null}
            </div>
            <div className="w-full my-5">
              <label htmlFor="sex" className="text-sm font-medium">
                Chọn Quận/Huyện
              </label>
              <select
                name="district"
                id="district"
                className="w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input"
                autoComplete={'new-password'}
                value={formik.values.district}
                onChange={formik.handleChange}
              >
                <option value={''}>Chọn Quận/Huyện*</option>
                {arrayDistricts.map(({ district_name, district_id }) => (
                  <option key={district_name} value={district_id}>
                    {district_name}
                  </option>
                ))}
              </select>
              {formik.touched.district && formik.errors.district ? (
                <div className="text-sm text-secondary_red">
                  {formik.errors.district}
                </div>
              ) : null}
            </div>
            <div className="w-full my-5">
              <label htmlFor="sex" className="text-sm font-medium">
                Chọn Xã/Phường
              </label>
              <select
                name="ward"
                id="ward"
                className="w-full h-10 px-5 text-sm text-secondary_text outline-none border border-[rgba(0,0,0,0.12)]"
                autoComplete={'new-password'}
                value={formik.values.ward}
                onChange={formik.handleChange}
              >
                <option value={''}>Chọn Phường/Xã*</option>
                {arrayWard.map(({ ward_name, ward_id }) => (
                  <option className="pr-5" key={ward_name} value={ward_id}>
                    {ward_name}
                  </option>
                ))}
              </select>
              {formik.touched.ward && formik.errors.ward ? (
                <div className="text-sm text-secondary_red">
                  {formik.errors.ward}
                </div>
              ) : null}
            </div>
            <Input
              type="text"
              name="street"
              label="Số nhà, đường"
              placeholder="Nhập số nhà của bạn*"
              onChange={formik.handleChange}
              value={formik.values.street}
              touched={formik.touched.street}
              error={formik.errors.street}
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
              Đăng ký
            </Button>
          </form>
          <div className="w-full text-center mt-5">
            <span className="text-sm">Bạn đã có tài khoản? </span>
            <Link href="/sign-in">
              <a className="text-sm hover:underline text-primary_red transition-all font-medium">
                Đăng nhập
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SignUp;
