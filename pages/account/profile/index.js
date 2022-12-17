import React, { useState } from 'react';
import Input from '../../../src/components/Input';
import Select from '../../../src/components/Select';
import Button from '../../../src/components/Button';
import MainAccount from '../../../src/layout/MainAccount';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../src/components/Modal';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const formik = useFormik({
    initialValues: {
      fullname: 'Đỗ Tiến Dũng',
      phone: '0344536552',
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Tên người dùng không được để trống'),
      phone: Yup.number().required('Số điện thoại không được để trống'),
      street: Yup.string().required('Số nhà không được để trống'),
    }),
    onSubmit: ({ fullname, email, password, phone, address, sex }) => {
      handleSubmit({
        fullname,
        phone,
        address,
        sex,
      });
    },
  });

  return (
    <MainAccount heading='Thông tin cá nhân'>
      <form onSubmit={formik.handleSubmit} className='max-w-[500px]'>
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
        <p className='text-sm font-medium pb-5'>
          Email: dungdotien14@gmail.com
        </p>
        <Select className='giới tính'>
          <option value=''>Nam</option>
          <option value=''>Nữ</option>
        </Select>
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
        <div className='mb-5 flex gap-x-5'>
          <span className='font-medium text-sm'>
            Địa chỉ: Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội
          </span>
          <span
            className='text-sm font-medium text-primary_blue underline cursor-pointer'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Chỉnh sửa
          </span>
        </div>
        <Modal
          id='exampleModal'
          aria-labelledby='exampleModalLabel'
          title='Thay đổi địa chỉ'
        >
          <Select label='Chọn Tỉnh/Thành phố'></Select>
          <Select label='Chọn Quận/Huyện'></Select>
          <Select label='Chọn Xã/Phường'></Select>
          <Input
            type='text'
            name='street'
            label='Số nhà, đường'
            placeholder='Nhập số nhà, đường của bạn*'
            onChange={formik.handleChange}
            value={formik.values.street}
            touched={formik.touched.street}
            error={formik.errors.street}
          />
          <Button>Cập nhật địa chỉ</Button>
        </Modal>
        {message ? (
          <div className='text-secondary_red bg-[#ffe2e2] h-10 text-center text-sm mb-5 font-medium flex items-center justify-center'>
            {message}
          </div>
        ) : null}
        <Button type='submit' loading={loading}>
          Cập nhật thông tin
        </Button>
      </form>
    </MainAccount>
  );
};

export default Profile;
