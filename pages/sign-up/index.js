import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Main from '../../src/layout/Main';
import { register } from '../../src/constants/constants.js';
import useHandleChange from '../../hooks/useHandleChange.js';

const SignIn = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState();
  const [phone, setPhone] = useState('');
  const [province, setCity] = useState([]);
  const [provinceCode, setCityCode] = useState();
  const [districts, setDistricts] = useState([]);
  const [districtCode, setDistrictCode] = useState();
  const [ward, setWard] = useState([]);
  const [street, setStreet] = useState('');
  let address = `${street}, ${ward}, ${districts}, ${province}`;

  const handleSubmit = async (e) => {
    try {
      await axios
        .post(`${register}`, {
          fullname: fullname,
          email: email,
          password: password,
          phone: phone,
          address: 'Hà Nội',
          sex: sex,
        })
        .then((resp) => {
          console.log(resp);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(values);
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

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeFullname = (event) => {
    setFullname(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };

  const handleChangeProvince = (e) => {};

  const handleChangeStreet = (event) => {
    setStreet(event.target.value);
  };

  const { values, handleChange } = useHandleChange({
    fullname: '',
    email: '',
    password: '',
    sex: -1,
    phone: '0',
    street: '',
  });

  return (
    <Main>
      <div className='w-full min-h-screen flex justify-center items-center mt-[70px]'>
        <div className='px-5 py-10 w-full max-w-[500px] text-primary'>
          <h1 className='font-bold text-center text-2xl py-5'>Đăng ký</h1>
          <p className='text-primary text-base text-center pb-5'>
            Tạo tài khoản để tăng trải nghiệm mua sắm cá nhân và thanh toán trực
            tuyến một cách nhanh nhất.
          </p>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='text'
              placeholder='Họ và tên*'
              onChange={handleChange}
              // value={fullname}
              name='fullname'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='email'
              placeholder='Email*'
              onChange={handleChange}
              // value={email}
              name='email'
            />
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='password'
              placeholder='Mật khẩu*'
              onChange={handleChange}
              // value={password}
              name='password'
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
            <select
              name='sex'
              id='sex'
              className='w-full h-full px-5 text-sm text-secondary_text outline-none border border-border_input'
              defaultValue={-1}
              onChange={handleChange}
            >
              <option value={-1} disabled>
                Chọn giới tính*
              </option>
              <option value={1}>Nam</option>
              <option value={0}>Nữ</option>
            </select>
          </div>
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='text'
              placeholder='Số điện thoại*'
              onChange={handleChange}
              // value={phone}
              name='phone'
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
          <div className='w-full h-10 my-5'>
            <input
              className='bg-transparent w-full h-full px-5 outline-none border border-border_input text-sm text-secondary_text'
              type='text'
              placeholder='Số nhà, đường*'
              onChange={handleChange}
              // value={street}
              name='street'
            />
          </div>
          <button
            className='w-full h-10 my-5 bg-primary text-center text-white flex justify-center items-center cursor-pointer'
            onClick={handleSubmit}
          >
            Đăng ký
          </button>
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
