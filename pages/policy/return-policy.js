import React from 'react';
import Main from '../../src/layout/Main';
import Section from '../../src/layout/Section';

const ReturnPolicy = () => {
  return (
    <Main heading='Chính sách đổi trả'>
      <Section title='Chính sách đổi trả'>
        <div className='min-h-[400px] max-w-[800px] mx-auto'>
          <p className='mb-3'>
            Fasrevo hy vọng rằng bạn sẽ yêu thích những sản phẩm mà bạn đặt hàng
            từ Fasrevo nhưng nếu có điều gì đó không ổn về chất lượng sản phẩm
            hãy liên hệ với chúng mình để được hỗ trợ đổi trả.
          </p>
        </div>
      </Section>
    </Main>
  );
};

export default ReturnPolicy;
