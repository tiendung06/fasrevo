import React from 'react';
import Button from '../../../src/components/admin/Button';
import Main from '../../../src/layout/admin/Main';

const Point = () => {
  return (
    <Main heading="Quản lý tích điểm">
      <>
        <h1 className="text-xl font-bold">Quản lý tích điểm</h1>
        <div className="w-full bg-white rounded-lg mt-5 shadow-sm p-10">
          <div className="mb-10">
            <h2 className="font-medium text-xl">Quản lý tích lũy điểm</h2>
            <p className="text-header my-2 text-sm">
              Chọn số điểm tích lũy khi người dùng mua hàng thành công
            </p>
            <input
              type="number"
              className="h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg"
              placeholder="Chọn số điểm tích lũy khi người dùng mua hàng thành công"
            />
          </div>
          <div className="mb-10">
            <h2 className="font-medium text-xl">Công thức tích lũy điểm</h2>
            <p className="text-header my-2 text-sm">
              Chọn số điểm tích lũy cộng dồn để người dùng nhận voucher giảm giá
            </p>
            <input
              type="number"
              className="h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg"
              placeholder="Chọn số điểm tích lũy cộng dồn để người dùng nhận voucher giảm giá"
            />
          </div>
          <Button
            onClick={() => {
              alert('Tính năng hiện không khả dụng');
            }}
          >
            Lưu thay đổi
          </Button>
        </div>
      </>
    </Main>
  );
};

export default Point;
