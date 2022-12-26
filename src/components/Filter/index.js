import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="pb-5">
      <button className="font-medium" onClick={handleShowFilter}>
        Bộ lọc
      </button>
      <div
        className={`fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-10 ${
          showFilter ? 'block' : 'hidden'
        }`}
      >
        <div className="max-w-[500px] w-full h-full bg-slate-50 overflow-scroll p-5">
          <div className="p-5 w-full flex justify-between items-center border-b-border_input border-b">
            <h2 className="font-medium text-xl">Bộ lọc</h2>
            <button onClick={handleShowFilter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-5 w-full border-b-border_input border-b">
            <h3 className="pb-5 font-medium">Bộ sưu tập</h3>
            <Checkbox name="winter" label="Winter collection" />
            <Checkbox name="spring" label="Spring collection" />
            <Checkbox name="autumn" label="Autumn collection" />
            <Checkbox name="fall" label="Fall collection" />
          </div>
          <div className="p-5 w-full border-b-border_input border-b">
            <h3 className="pb-5 font-medium">Màu sắc</h3>
            <Checkbox name="black" label="Đen" />
            <Checkbox name="white" label="Trắng" />
            <Checkbox name="pink" label="Hồng" />
          </div>
          <div className="p-5 w-full border-b-border_input border-b">
            <h3 className="pb-5 font-medium">Kích cỡ</h3>
            <Checkbox name="s" label="S" />
            <Checkbox name="m" label="M" />
            <Checkbox name="l" label="L" />
            <Checkbox name="xl" label="XL" />
          </div>
          <Button onClick={() => alert('Tính năng không khả dụng')}>
            Xác nhận
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
