import React from 'react';
import Image from 'next/image';

const Brand = () => {
  return (
    <div className='py-28'>
      <div className="flex justify-center gap-10">
        <Image src={'/envato.png'} alt="" width={261} height={30} className='w-16 md:w-32 lg:w-48'/>
        <Image src={'/3docean.png'} alt="" width={231} height={30} className='w-16 md:w-32 lg:w-48'/>
        <Image src={'/graphicrever.png'} alt="" width={187} height={30} className='w-16 md:w-32 lg:w-48'/>
        <Image src={'/kanba.png'} alt="" width={160} height={30} className='w-16 md:w-32 lg:w-48'/>
      </div>
    </div>
  );
};

export default Brand;
