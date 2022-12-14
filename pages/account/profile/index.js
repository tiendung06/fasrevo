import React, { useEffect, useState } from 'react';
import Input from '../../../src/components/Input';
import Select from '../../../src/components/Select';
import Button from '../../../src/components/Button';
import MainAccount from '../../../src/layout/MainAccount';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../src/components/Modal';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const { user } = useSelector((state) => state.auth);
  const [address, setAddress] = useState(user?.address);
  const [arrayProvince, setArrayProvince] = useState([]);
  const [arrayDistricts, setArrayDistricts] = useState([]);
  const [arrayWard, setArrayWard] = useState([]);
  console.log(user);
  const formik = useFormik({
    initialValues: user
      ? {
          fullname: user.fullname,
          phone: user.phone,
          sex: user.sex,
          address: address,
        }
      : {
          fullname: '',
          phone: '',
          sex: 1,
          address: '',
        },
    enableReinitialize: true,
    validationSchema: Yup.object({
      fullname: Yup.string().required('Tên người dùng không được để trống'),
      phone: Yup.string()
        .min(10, 'Số điện thoại không hơp lệ')
        .max(11, 'Số điện thoại không hơp lệ')
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'Số điện thoại không hơp lệ'
        )
        .typeError('Số điện thoại không hơp lệ')
        .required('Số điện thoại không được để trống'),
      address: Yup.string().required('Số nhà không được để trống'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    try {
      setLoading(true);
      axios
        .put(`http://localhost:3030/user/update/${user.uid}`, values)
        .then((resp) => {
          setMessage(resp.data.message);
          setStatus(resp.data.status);
        });
    } catch (error) {
      setMessage(error.data.message);
      setStatus(error.data.status);
    } finally {
      setLoading(false);
    }
  };

  const changeAddress = useFormik({
    initialValues: {
      ward: '',
      district: '',
      province: '',
      street: '',
    },
    validationSchema: Yup.object({
      street: Yup.string().required('Số nhà không được để trống'),
      ward: Yup.string().required('Vui lòng chọn xã phường'),
      district: Yup.string().required('Vui lòng chọn quận huyện'),
      province: Yup.string().required('Vui lòng chọn tỉnh thành phố'),
    }),
    onSubmit: () => {
      const currentProvince = arrayProvince.find(
        (p) => p.province_id === changeAddress.values.province
      );
      const currentDistrict = arrayDistricts.find(
        (d) => d.district_id === changeAddress.values.district
      );
      const currentWard = arrayWard.find(
        (w) => w.ward_id === changeAddress.values.ward
      );
      const address = `${changeAddress.values.street}, ${currentWard.ward_name}, ${currentDistrict.district_name}, ${currentProvince.province_name}`;
      setAddress(address);
    },
  });

  useEffect(() => {
    axios
      .get('https://vapi.vnappmob.com/api/province', {
        withCredentials: false,
      })
      .then((resp) => {
        setArrayProvince(resp.data.results);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

  useEffect(() => {
    if (changeAddress.values.province > 0) {
      axios
        .get(
          `https://vapi.vnappmob.com/api/province/district/${changeAddress.values.province}`,
          {
            withCredentials: false,
          }
        )
        .then((resp) => {
          setArrayDistricts(resp.data.results);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  }, [changeAddress.values.province]);

  useEffect(() => {
    if (changeAddress.values.district > 0) {
      axios
        .get(
          `https://vapi.vnappmob.com/api/province/ward/${changeAddress.values.district}`,
          {
            withCredentials: false,
          }
        )
        .then((resp) => {
          setArrayWard(resp.data.results);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  }, [changeAddress.values.district]);

  return (
    <MainAccount heading="Thông tin cá nhân">
      <form onSubmit={formik.handleSubmit} className="max-w-[500px]">
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
        <p className="text-sm font-medium pb-5">Email: {user?.email}</p>
        <Select
          className="giới tính"
          name="sex"
          label="Giới tính"
          value={formik.values.sex}
          onChange={formik.handleChange}
        >
          <option value={1}>Nam</option>
          <option value={0}>Nữ</option>
        </Select>
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
        <div className="mb-5 flex gap-x-5">
          <span className="font-medium text-sm">Địa chỉ: {address}</span>
          <span
            className="text-sm font-medium text-primary_blue underline cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Chỉnh sửa
          </span>
        </div>
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
          Cập nhật thông tin
        </Button>
      </form>
      <Modal
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        title="Thay đổi địa chỉ"
      >
        <form onSubmit={changeAddress.handleSubmit}>
          <Select
            label="Chọn Tỉnh/Thành phố"
            name="province"
            id="province"
            value={changeAddress.values.province}
            onChange={changeAddress.handleChange}
            touched={changeAddress.touched.province}
            error={changeAddress.errors.province}
          >
            <option value={''}>Chọn Tỉnh/Thành Phố*</option>
            {arrayProvince.map(({ province_name, province_id }) => (
              <option key={province_id} value={province_id}>
                {province_name}
              </option>
            ))}
          </Select>
          <Select
            label="Chọn Quận/Huyện"
            name="district"
            id="district"
            value={changeAddress.values.district}
            onChange={changeAddress.handleChange}
            touched={changeAddress.touched.district}
            error={changeAddress.errors.district}
          >
            <option value={''}>Chọn Quận/Huyện*</option>
            {arrayDistricts.map(({ district_name, district_id }) => (
              <option key={district_name} value={district_id}>
                {district_name}
              </option>
            ))}
          </Select>
          <Select
            label="Chọn Xã/Phường"
            name="ward"
            id="ward"
            value={changeAddress.values.ward}
            onChange={changeAddress.handleChange}
            touched={changeAddress.touched.ward}
            error={changeAddress.errors.ward}
          >
            <option value={''}>Chọn Phường/Xã*</option>
            {arrayWard.map(({ ward_name, ward_id }) => (
              <option className="pr-5" key={ward_name} value={ward_id}>
                {ward_name}
              </option>
            ))}
          </Select>
          <Input
            type="text"
            name="street"
            label="Số nhà, đường"
            placeholder="Nhập số nhà, đường của bạn*"
            onChange={changeAddress.handleChange}
            value={changeAddress.values.street}
            touched={changeAddress.touched.street}
            error={changeAddress.errors.street}
          />
          <Button type="submit" loading={loading}>
            Cập nhật địa chỉ
          </Button>
        </form>
      </Modal>
    </MainAccount>
  );
};

export default Profile;
