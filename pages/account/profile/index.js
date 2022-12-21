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
  const { user } = useSelector((state) => state.auth);
  const [address, setAddress] = useState(user?.address);
  const [arrayProvince, setArrayProvince] = useState([]);
  const [arrayDistricts, setArrayDistricts] = useState([]);
  const [arrayWard, setArrayWard] = useState([]);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.post(`${register}`, values).then((response) => {
        if (response.data.status === 0) {
          setMessage(response.data.message);
        } else {
          router.push('/sign-in');
        }
      });
    } catch ({ response }) {
      console.log(response);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: `${user?.fullname}`,
      phone: `${user?.phone}`,
      sex: `${user?.sex_id}`,
      ward: '',
      district: '',
      province: '',
      street: '',
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
    if (formik.values.province > 0) {
      axios
        .get(
          `https://vapi.vnappmob.com/api/province/district/${formik.values.province}`
        )
        .then((resp) => {
          setArrayDistricts(resp.data.results);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  }, [formik.values.province]);

  useEffect(() => {
    if (formik.values.district > 0) {
      axios
        .get(
          `https://vapi.vnappmob.com/api/province/ward/${formik.values.district}`
        )
        .then((resp) => {
          setArrayWard(resp.data.results);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  }, [formik.values.district]);

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
        <Select className="giới tính">
          <option value="">Nam</option>
          <option value="">Nữ</option>
        </Select>
        <Input
          type="number"
          name="phone"
          label="Số điện thoại"
          placeholder="Nhập số điện thoại của bạn*"
          onChange={formik.handleChange}
          value={formik.values.phone}
          touched={formik.touched.phone}
          error={formik.errors.phone}
        />
        <div className="mb-5 flex gap-x-5">
          <span className="font-medium text-sm">Địa chỉ: {user?.address}</span>
          <span
            className="text-sm font-medium text-primary_blue underline cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Chỉnh sửa
          </span>
        </div>
        <Modal
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          title="Thay đổi địa chỉ"
        >
          <Select
            label="Chọn Tỉnh/Thành phố"
            name="province"
            id="province"
            value={formik.values.province}
            onChange={formik.handleChange}
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
            value={formik.values.district}
            onChange={formik.handleChange}
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
            value={formik.values.ward}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            value={formik.values.street}
            touched={formik.touched.street}
            error={formik.errors.street}
          />
          <Button>Cập nhật địa chỉ</Button>
        </Modal>
        {message ? (
          <div className="text-secondary_red bg-[#ffe2e2] h-10 text-center text-sm mb-5 font-medium flex items-center justify-center">
            {message}
          </div>
        ) : null}
        <Button type="submit" loading={loading}>
          Cập nhật thông tin
        </Button>
      </form>
    </MainAccount>
  );
};

export default Profile;
