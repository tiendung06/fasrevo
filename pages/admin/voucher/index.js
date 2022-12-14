import React from 'react';
import Button from '../../../src/components/admin/Button';
import Main from '../../../src/layout/admin/Main';

const tableData = [
  {
    id: 'DISCOUNT2010',
    name: 'Giảm giá 20% cho tổng giá trị hóa đơn',
    discount: '20%',
    date_start: '18/10/2022',
    date_end: '20/10/2022',
    status: 'Kết thúc',
  },
  {
    id: 'WINTERSALE',
    name: 'Giảm giá 10% cho tổng giá trị hóa đơn',
    discount: '10%',
    date_start: '18/10/2022',
    date_end: '20/10/2022',
    status: 'Kết thúc',
  },
];

const Voucher = () => {
  return (
    <Main heading='Quản lý chương trình khuyến mãi'>
      <>
        <h1 className='text-xl font-bold'>Quản lý chương trình khuyến mãi</h1>
        <div className='w-full bg-white rounded-lg h-20 mt-5 shadow-sm flex items-center gap-x-5 px-5'>
          <input
            type='text'
            className='h-10 px-5 text-sm border-border_input border outline-none text-header rounded-lg'
            placeholder='Nhập thông tin tìm kiếm'
          />
          <select
            name=''
            id=''
            className='border-border_input border outline-none h-10 text-sm text-header rounded-lg px-5'
          >
            <option value=''>Sắp xếp theo tên</option>
            <option value=''>Sắp xếp theo giới tính</option>
          </select>
          <Button>Thêm mới</Button>
        </div>
        <div className='w-full overflow-x-auto'>
          <table className='w-full my-5 shadow-sm'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sản phẩm</th>
                <th>Tên mã giảm giá</th>
                <th>Giảm giá</th>
                <th>Thời gian bắt đầu</th>
                <th>Thời gian kết thúc</th>
                <th>Trạng thái</th>
                <th>Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.discount}</td>
                  <td>{item.date_start}</td>
                  <td>{item.date_end}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className='flex items-center gap-x-5'>
                      <button
                        className='text-primary_blue'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModal'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-4 h-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </button>
                      <button className='text-primary_red'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-4 h-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <div
              class='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
              id='exampleModal'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <div class='modal-dialog relative w-auto pointer-events-none'>
                <div class='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'>
                  <div class='modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md'>
                    <h5
                      class='text-xl font-medium leading-normal text-gray-800'
                      id='exampleModalLabel'
                    >
                      Modal title
                    </h5>
                    <button
                      type='button'
                      class='btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div class='modal-body relative p-4'>
                    Modal body text goes here.
                  </div>
                  <div class='modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md'>
                    <button
                      type='button'
                      class='px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                    <button
                      type='button'
                      class='px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1'
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </table>
        </div>
      </>
    </Main>
  );
};

export default Voucher;
