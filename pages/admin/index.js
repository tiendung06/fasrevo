import React from 'react';
import { useSelector } from 'react-redux';
import Main from '../../src/layout/admin/Main';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ordersOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Tổng quan đơn hàng',
    },
  },
};

export const customersOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Tổng quan khách hàng',
    },
  },
};

const labels = [
  '12/12/2022',
  '14/12/2022',
  '16/12/2022',
  '18/12/2022',
  '20/12/2022',
  '22/12/2022',
  '24/12/2022',
];

export const ordersData = {
  labels,
  datasets: [
    {
      label: 'Đơn hàng',
      data: [5, 10, 24, 12, 14, 51, 12],
      borderColor: '#2563eb',
      backgroundColor: '#2563eb',
    },
  ],
};

export const customersData = {
  labels,
  datasets: [
    {
      label: 'Khách hàng mới',
      data: [0, 2, 1, 0, 2, 3, 2],
      borderColor: '#2563eb',
      backgroundColor: '#2563eb',
    },
  ],
};

const Admin = () => {
  const { user, authenticated } = useSelector((state) => state.auth);

  if (user && authenticated && user.role !== 1) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-10 h-10 rounded-full border-4 border-primary_red border-t-transparent border-t-4 mx-auto animate-spin"></div>
      </div>
    );
  }

  return (
    <Main heading="Admin">
      <>
        <h1 className="text-xl font-bold">Trang chủ</h1>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="bg-white mt-5 rounded-lg overflow-hidden shadow-sm">
            <Line options={ordersOptions} data={ordersData} />
          </div>
          <div className="bg-white mt-5 rounded-lg overflow-hidden shadow-sm">
            <Line options={customersOptions} data={customersData} />
          </div>
        </div>
      </>
    </Main>
  );
};

export default Admin;
