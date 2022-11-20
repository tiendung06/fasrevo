import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Main from '../../src/layout/Main';

const SignIn = () => {
  const [province, setCity] = useState([]);
  const [provinceCode, setCityCode] = useState();
  const [districts, setDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState();
  const [ward, setWard] = useState([]);

  const handleSubmit = async (e) => {
    try {
      await axios
        .post(`${register}`, {
          fullname: fullname,
          email: email,
          password: password,
        })
        .then((resp) => {
          dispatch(setToken(resp.data.authToken));
          sessionStorage.setItem('token', resp.data.authToken);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get('https://vapi.vnappmob.com/api/province').then((resp) => {
      setCity(resp.data.results);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://vapi.vnappmob.com/api/province/district/${provinceCode}`)
      .then((resp) => {
        setDistricts(resp.data.results);
      });
  }, [provinceCode]);

  useEffect(() => {
    axios
      .get(`https://vapi.vnappmob.com/api/province/ward/${districtCode}`)
      .then((resp) => {
        setWard(resp.data.results);
      });
  }, [districtCode]);

  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center mt-[70px]'>
        <div className='px-5 py-10 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>Đăng ký</h1>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='text'
              placeholder='Họ và tên*'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='text'
              placeholder='Tên tài khoản*'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='password'
              placeholder='Mật khẩu*'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='password'
              placeholder='Xác nhận mật khẩu*'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='text'
              placeholder='Số điện thoại*'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='email'
              placeholder='Email*'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='text'
              placeholder='Địa chỉ chi tiết*'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <select
              name='province'
              id='province'
              className='w-full h-full px-5 text-sm text-secondary_text outline-none border border-border_input'
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
          </div>
          <div className='w-full h-10 my-5'>
            <select
              name='district'
              id='district'
              className='w-full h-full px-5 text-sm text-secondary_text outline-none border border-border_input'
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
          <div className='w-full h-10 my-5'>
            <select
              name='ward'
              id='ward'
              className='w-full h-full px-5 text-sm text-secondary_text outline-none border border-[rgba(0,0,0,0.12)]'
            >
              <option value={-1}>Chọn Phường/Xã*</option>
              {ward.map(({ ward_name, ward_id }) => (
                <option className='pr-5' key={ward_name} value={ward_id}>
                  {ward_name}
                </option>
              ))}
            </select>
          </div>
          <div className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'>
            Đăng nhập
          </div>
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

export default SignIn;
