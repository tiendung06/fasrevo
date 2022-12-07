import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Main from '../../src/layout/Main';
import { register } from '../../src/constants/constants.js';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../src/components/Input';

const SignUp = () => {
  const [province, setCity] = useState([]);
  const [provinceCode, setCityCode] = useState();
  const [districts, setDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState();
  const [ward, setWard] = useState([]);
  const [message, setMessage] = useState();
  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      await axios.post(`${register}`, values).then((response) => {
        console.log(response);
      });
    } catch ({ response }) {
      if (response.data.status === 0) {
        setMessage(response.data.message);
      } else {
        router.push('/sign-in');
      }
    }
  };

  useEffect(() => {
    axios
      .get('https://vapi.vnappmob.com/api/province', {
        withCredentials: false,
      })
      .then((resp) => {
        setCity(resp.data.results);
      });
  }, []);

  useEffect(() => {
    if (provinceCode) {
      axios
        .get(`https://vapi.vnappmob.com/api/province/district/${provinceCode}`)
        .then((resp) => {
          setDistricts(resp.data.results);
        });
    }
  }, [provinceCode]);

  useEffect(() => {
    if (districtCode) {
      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${districtCode}`)
        .then((resp) => {
          setWard(resp.data.results);
        });
    }
  }, [districtCode]);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      street: '',
      sex: -1,
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Tên người dùng không được để trống'),
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
      password: Yup.string()
        .min(6, 'Mật khẩu phải trên 6 ký tự')
        .required('Mật khẩu không được để trống'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password')],
        'Nhập lại mật khẩu không đúng'
      ),
      phone: Yup.number().required('Số điện thoại không được để trống'),
      street: Yup.string().required('Số nhà không được để trống'),
      sex: Yup.number()
        .integer('Vui lòng chọn giới tính')
        .min(0, 'Vui lòng chọn giới tính')
        .max(1, 'Vui lòng chọn giới tính')
        .required('Vui lòng chọn giới tính'),
    }),
    onSubmit: ({ fullname, email, password, phone, street, sex }) => {
      handleSubmit({
        fullname,
        email,
        password,
        phone,
        street,
        sex,
      });
    },
  });

  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center mt-20'>
        <div className='px-5 py-10 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>Đăng ký</h1>
          <p className='text-primary text-base text-center pb-5'>
            Tạo tài khoản để tăng trải nghiệm mua sắm cá nhân và thanh toán trực
            tuyến một cách nhanh nhất.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type='text'
              name='fullname'
              placeholder='Họ và tên*'
              onChange={formik.handleChange}
              value={formik.values.fullname}
              touched={formik.touched.fullname}
              error={formik.errors.fullname}
            />
            <Input
              type='email'
              name='email'
              placeholder='Email*'
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
            <Input
              type='password'
              name='confirmPassword'
              placeholder='Xác nhận mật khẩu*'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              touched={formik.touched.confirmPassword}
              error={formik.errors.confirmPassword}
            />
            <div className='w-full my-5'>
              <select
                name='sex'
                id='sex'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                defaultValue={-1}
                onChange={formik.handleChange}
              >
                <option value={-1} disabled>
                  Chọn giới tính*
                </option>
                <option value={1}>Nam</option>
                <option value={0}>Nữ</option>
              </select>
              {formik.touched.sex && formik.errors.sex ? (
                <div className='text-sm text-red-500'>{formik.errors.sex}</div>
              ) : null}
            </div>
            <div className='w-full my-5'>
              <input
                type='text'
                name='phone'
                className='bg-transparent w-full h-10 px-5 outline-none border border-border_input text-sm text-secondary_text'
                placeholder='Số điện thoại*'
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className='text-sm text-red-500'>
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>
            <div className='w-full my-5'>
              <select
                name='province'
                id='province'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                defaultValue={-1}
                onChange={(e) => {
                  setCityCode(e.target.value);
                  setDistrictCode(-1);
                }}
              >
                <option value={-1}>Chọn Tỉnh/Thành Phố*</option>
                {province.map(({ province_name, province_id }) => (
                  <option key={province_id} value={province_id}>
                    {province_name}
                  </option>
                ))}
              </select>
              {formik.touched.province && formik.errors.province ? (
                <div className='text-sm text-red-500'>
                  {formik.errors.province}
                </div>
              ) : null}
            </div>
            <div className='w-full my-5'>
              <select
                name='district'
                id='district'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                onChange={(e) => {
                  setDistrictCode(e.target.value);
                }}
              >
                <option value={-1}>Chọn Quận/Huyện*</option>
                {districts.map(({ district_name, district_id }) => (
                  <option key={district_name} value={district_id}>
                    {district_name}
                  </option>
                ))}
              </select>
            </div>
            <div className='w-full my-5'>
              <select
                name='ward'
                id='ward'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-[rgba(0,0,0,0.12)]'
              >
                <option value={-1}>Chọn Phường/Xã*</option>
                {ward.map(({ ward_name, ward_id }) => (
                  <option className='pr-5' key={ward_name} value={ward_id}>
                    {ward_name}
                  </option>
                ))}
              </select>
            </div>
            <div className='w-full my-5'>
              <input
                type='text'
                name='street'
                className='bg-transparent w-full h-10 px-5 outline-none border border-border_input text-sm text-secondary_text'
                placeholder='Số nhà, đường*'
                onChange={formik.handleChange}
                value={formik.values.street}
              />
              {formik.touched.street && formik.errors.street ? (
                <div className='text-sm text-red-500'>
                  {formik.errors.street}
                </div>
              ) : null}
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
              Đăng ký
            </button>
          </form>
          <div className='w-full text-center'>
            <span className='text-sm'>Bạn đã có tài khoản? </span>
            <Link href='/sign-in'>
              <a className='text-sm hover:underline transition-all font-medium'>
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
