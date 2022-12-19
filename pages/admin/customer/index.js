import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '../../../src/components/admin/Button';
import { getUser } from '../../../src/constants/constants';
import Main from '../../../src/layout/admin/Main';

const Customer = () => {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    axios.get(getUser).then((resp) => {
      setCustomers(resp.data.users);
    });
  }, []);
  return (
    <Main heading="Tổng quan khách hàng">
      <>
        <h1 className="text-xl font-bold">Tổng quan khách hàng</h1>
        <div className="w-full bg-white rounded-lg h-20 mt-5 shadow-sm flex items-center gap-x-5 px-5">
          <input
            type="text"
            className="h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg"
            placeholder="Nhập thông tin tìm kiếm"
          />
          <select
            name=""
            id=""
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg"
          >
            <option value="">Số điện thoại</option>
            <option value="">Tên khách hàng</option>
          </select>
          <select
            name=""
            id=""
            className="border-border_input border outline-none h-10 text-sm text-header rounded-lg"
          >
            <option value="">Sắp xếp theo tên</option>
            <option value="">Sắp xếp theo giới tinh</option>
          </select>
          <Button>Xuất báo cáo</Button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full my-5 shadow-sm">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Giới tính</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map(
                ({ uid, fullname, email, phone, sex, address }, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{uid}</td>
                    <td>{fullname}</td>
                    <td>{sex === 1 ? 'Nam' : 'Nữ'}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>
                      <div className="flex items-center gap-x-5">
                        <button className="text-primary_blue">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                          </svg>
                        </button>
                        <button className="text-primary_red">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </>
    </Main>
  );
};

export default Customer;
