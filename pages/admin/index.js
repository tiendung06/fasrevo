import React from 'react';
import { useSelector } from 'react-redux';
import Main from '../../src/layout/admin/Main';

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
      </>
    </Main>
  );
};

export default Admin;
