import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';

const DelivertyPolicy = () => {
  return (
    <Main heading='Chính sách vận chuyển'>
      <Section title='Chính sách vận chuyển'>
        <div className='min-h-[400px] max-w-[800px] mx-auto'>
          <div className='mb-10'>
            <h2 className='text-lg font-bold mb-3'>
              Thân gửi tới những khách hàng yêu quý của Fasrevo
            </h2>
            <p className='mb-3'>
              Fasrevo đang cố gắng làm việc nhanh nhất có thể và ngay sau khi
              đơn đặt hàng của bạn thành công, chúng mình sẽ thông báo cho bạn
              bằng email xác nhận giao hàng.
            </p>
          </div>
          <div className='mb-10'>
            <h2 className='text-lg font-bold mb-3'>
              Fasrevo có những lựa chọn giao hàng nào?
            </h2>
            <p className='mb-3'>
              Chúng mình cung cấp dịch vụ Giao hàng tại nhà tiêu chuẩn 30.000VND
            </p>
            <p className='mb-3'>
              Fasrevo sẽ vận chuyển bưu kiện của bạn trong khoảng thời gian từ
              5-7 ngày. Trong mùa cao điểm, việc giao hàng có thể lâu hơn một
              chút. Xin bạn hãy lưu ý đơn đặt hàng của bạn được vận chuyển từ
              kho của chúng mình tại Thành phố Hà Nội.
            </p>
          </div>
          <div className='mb-10'>
            <h2 className='text-lg font-bold mb-3'>
              Cảm ơn bạn đã tin tưởng và lựa chọn sản phẩm của Fasrevo
            </h2>
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default DelivertyPolicy;
