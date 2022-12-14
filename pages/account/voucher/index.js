import React from 'react';
import MainAccount from '../../../src/layout/MainAccount';

const ChangePassword = () => {
  return (
    <MainAccount heading='Kho voucher'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='w-full h-20 flex shadow-md'>
          <div className='h-20 w-20 bg-primary_red flex justify-center items-center text-white'>
            Voucher
          </div>
          <div className='px-5 py-3'>
            <p className='font-medium'>DISCOUNT1</p>
            <p className='text-sm text-header'>Giảm 5% tổng giá trị đơn hàng</p>
          </div>
        </div>
      </div>
    </MainAccount>
  );
};

export default ChangePassword;
