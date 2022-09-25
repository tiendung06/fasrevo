import React from 'react';
import Card from '../Card';

const List = () => {
  return (
    <div className=''>
      <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-[1920px] w-full'>
        {Array(4)
          .fill()
          .map((item, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
};

export default List;
