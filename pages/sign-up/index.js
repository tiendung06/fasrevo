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
  const [provinceCode, setProvinceCode] = useState();
  const [arrayDistricts, setArrayDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState();
  const [arrayWard, setArrayWard] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [province, setProvince] = useState('');
  const [districts, setDistricts] = useState('');
  const [ward, setWard] = useState('');

  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.post(`${register}`, values).then((response) => {
        console.log(response);
      });
    } catch ({ response }) {
      if (response.data.status === 0) {
        setMessage(response.data.message);
      } else {
        router.push('/sign-in');
      }
    } finally {
      setLoading(false);
    }
  };

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
    if (provinceCode) {
      axios
        .get(`https://vapi.vnappmob.com/api/province/district/${provinceCode}`)
        .then((resp) => {
          setArrayDistricts(resp.data.results);
        });
    }
  }, [provinceCode]);

  useEffect(() => {
    if (districtCode) {
      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${districtCode}`)
        .then((resp) => {
          setArrayWard(resp.data.results);
        });
    }
  }, [districtCode]);

  const handleSelectProvince = () => {
    const selectProvince = document.getElementById('province');
    setProvince(selectProvince.options[selectProvince.selectedIndex].text);
    console.log(selectProvince.options[selectProvince.selectedIndex].text);
  };

  const handleSelectDistricts = () => {
    const selectDistricts = document.getElementById('district');
    setDistricts(selectDistricts.options[selectDistricts.selectedIndex].text);
    console.log(selectDistricts.options[selectDistricts.selectedIndex].text);
  };

  const handleSelectWard = () => {
    const selectWard = document.getElementById('ward');
    setWard(selectWard.options[selectWard.selectedIndex].text);
    console.log(selectWard.options[selectWard.selectedIndex].text);
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      province: -1,
      street: '',
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Tên người dùng không được để trống'),
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
      password: Yup.string()
        .min(6, 'Mật khẩu phải từ 6 ký tự')
        .required('Mật khẩu không được để trống'),
      confirmPassword: Yup.string()
        .required('Mật khẩu nhập lại không được để trống')
        .oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không đúng'),
      phone: Yup.number().required('Số điện thoại không được để trống'),
      street: Yup.string().required('Số nhà không được để trống'),
    }),
    onSubmit: ({ fullname, email, password, phone, address, sex }) => {
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

  return (
    <Main heading='Đăng ký'>
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
              label='Họ tên'
              placeholder='Nhập họ và tên*'
              onChange={formik.handleChange}
              value={formik.values.fullname}
              touched={formik.touched.fullname}
              error={formik.errors.fullname}
            />
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
            <Input
              type='password'
              name='password'
              label='Mật khẩu'
              placeholder='Nhập mật khẩu của bạn*'
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <Input
              type='password'
              name='confirmPassword'
              label='Nhập lại mật khẩu'
              placeholder='Nhập lại mật khẩu*'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              touched={formik.touched.confirmPassword}
              error={formik.errors.confirmPassword}
            />
            <div className='w-full mb-5'>
              <label htmlFor='sex' className='text-sm font-medium'>
                Giới tính
              </label>
              <select
                name='sex'
                id='sex'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                defaultValue={1}
                onChange={formik.handleChange}
              >
                <option value={1}>Nam</option>
                <option value={0}>Nữ</option>
              </select>
            </div>
            <Input
              type='number'
              name='phone'
              label='Số điện thoại'
              placeholder='Nhập số điện thoại của bạn*'
              onChange={formik.handleChange}
              value={formik.values.phone}
              touched={formik.touched.phone}
              error={formik.errors.phone}
            />
            <div className='w-full my-5'>
              <label htmlFor='sex' className='text-sm font-medium'>
                Chọn Tỉnh/Thành phố
              </label>
              <select
                name='province'
                id='province'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                defaultValue={-1}
                onChange={(e) => {
                  setProvinceCode(e.target.value);
                  setDistrictCode(-1);
                  handleSelectProvince();
                }}
              >
                <option value={-1}>Chọn Tỉnh/Thành Phố*</option>
                {arrayProvince.map(({ province_name, province_id }) => (
                  <option key={province_id} value={province_id}>
                    {province_name}
                  </option>
                ))}
              </select>
              {formik.touched.province && formik.errors.province ? (
                <div className='text-sm text-secondary_red'>
                  {formik.errors.province}
                </div>
              ) : null}
            </div>
            <div className='w-full my-5'>
              <label htmlFor='sex' className='text-sm font-medium'>
                Chọn Quận/Huyện
              </label>
              <select
                name='district'
                id='district'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-border_input'
                onChange={(e) => {
                  setDistrictCode(e.target.value);
                  handleSelectDistricts();
                }}
              >
                <option value={-1}>Chọn Quận/Huyện*</option>
                {arrayDistricts.map(({ district_name, district_id }) => (
                  <option key={district_name} value={district_id}>
                    {district_name}
                  </option>
                ))}
              </select>
            </div>
            <div className='w-full my-5'>
              <label htmlFor='sex' className='text-sm font-medium'>
                Chọn Xã/Phường
              </label>
              <select
                name='ward'
                id='ward'
                className='w-full h-10 px-5 text-sm text-secondary_text outline-none border border-[rgba(0,0,0,0.12)]'
                onChange={() => {
                  handleSelectWard();
                }}
              >
                <option value={-1}>Chọn Phường/Xã*</option>
                {arrayWard.map(({ ward_name, ward_id }) => (
                  <option className='pr-5' key={ward_name} value={ward_id}>
                    {ward_name}
                  </option>
                ))}
              </select>
            </div>
            <Input
              type='text'
              name='street'
              label='Số nhà, đường'
              placeholder='Nhập số nhà của bạn*'
              onChange={formik.handleChange}
              value={formik.values.street}
              touched={formik.touched.street}
              error={formik.errors.street}
            />
            {message ? (
              <div className='text-secondary_red bg-[#ffe2e2] h-10 text-center text-sm mb-5 font-medium flex items-center justify-center'>
                {message}
              </div>
            ) : null}
            <Button type='submit' loading={loading}>
              Đăng ký
            </Button>
          </form>
          <div className='w-full text-center mt-5'>
            <span className='text-sm'>Bạn đã có tài khoản? </span>
            <Link href='/sign-in'>
              <a className='text-sm hover:underline text-primary_red transition-all font-medium'>
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
