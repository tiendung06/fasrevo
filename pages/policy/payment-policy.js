import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';

const PaymentPolicy = () => {
  return (
    <Main heading='Chính sách thanh toán'>
      <Section>
        <div className='min-h-[400px] max-w-[800px] mx-auto'>
          <p>
            Hiện tại Fasrevo có hình thức thanh toán cho bạn khi mua hàng online
            đó là COD. Khi bạn nhận hàng từ Fasrevo, bạn có thể thanh toán phí
            vận chuyển và giá trị đơn hàng cho phía bưu cục.
          </p>
        </div>
      </Section>
    </Main>
  );
};

export default PaymentPolicy;
