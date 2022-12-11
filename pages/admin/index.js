import React from 'react';
import Main from '../../src/layout/admin/Main';
import styles from './admin.module.scss';
const tableData = [
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
  {
    id: 'KH001',
    name: 'Đỗ Tiến Dũng',
    sex: 'Nam',
    phone: '0344536552',
    email: 'dungdotien14@gmail.com',
    address: 'Ngõ 3, Giao Tác, Liên Hà, Đông Anh, Hà Nội',
    point: 5,
    total: '249.000 VND',
  },
];
const Admin = () => {
  return (
    <Main heading='Admin'>
      <div className=''>
        <h1 className='text-xl font-bold'>Trang chủ</h1>
        <div className='w-full bg-white rounded-lg h-20 mt-5 shadow-sm flex items-center gap-x-5 px-5'>
          <input
            type='text'
            className='h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg'
            placeholder='Nhập thông tin tìm kiếm'
          />
          <select
            name=''
            id=''
            className='border-border_input border outline-none h-10 text-sm text-header rounded-lg'
          >
            <option value=''>Số điện thoại</option>
            <option value=''>Tên khách hàng</option>
          </select>
          <select
            name=''
            id=''
            className='border-border_input border outline-none h-10 text-sm text-header rounded-lg'
          >
            <option value=''>Sắp xếp theo tên</option>
            <option value=''>Sắp xếp theo giới tinh</option>
          </select>
          <button className='bg-primary_blue h-10 text-white px-5 rounded-lg'>
            Xuất báo cáo
          </button>
        </div>
        <div className='w-full overflow-x-auto'>
          <table className={`${styles.table_users}`}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Giới tính</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Điểm tích lũy</th>
                <th>Tổng tiền đã thanh toán</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.sex}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.point}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Main>
  );
};

export default Admin;
