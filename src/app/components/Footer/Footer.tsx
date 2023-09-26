import './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='mx-52'>
      <div className="flex justify-between py-8">
        <div className="w-1/4">
          <div>
            <Image
            className="mb-8"
              src="/logo.png"
              alt={'sofcast logo'}
              width={193}
              height={50}
            />
            <p className="text-gray-500">
              Landing page builder is a hosted platform powered by the brizy
              builder aiming to connect you with potential clients.
            </p>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-xl mb-8'>Company</h1>
          <div className="space-y-3 text-gray-500">       
          <Link href={"/"} className='block'>About Us</Link>
          <Link href={"/"} className='block'>Our Team</Link>
          <Link href={"/"} className='block'>Products</Link>
          <Link href={"/"} className='block'>Contact</Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-8">Product</h1>
          <div className="space-y-3 text-gray-500">
          <Link href={"/"} className='block'>Feature</Link>
          <Link href={"/"} className='block'>Pricing</Link>
          <Link href={"/"} className='block'>Credit</Link>
          <Link href={"/"} className='block'>FAQ</Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-8">Download</h1>
          <div className="space-y-3 text-gray-500">
          <Link href={"/"} className='block'>Ios</Link>
          <Link href={"/"} className='block'>Android</Link>
          <Link href={"/"} className='block'>Microsoft</Link>
          <Link href={"/"} className='block'>Desktop</Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-8">Support</h1>
          <div className="space-y-3 text-gray-500 hover:bg-orange-500">
          <Link href={"/"} className='block'>Privacy</Link>
          <Link href={"/"} className='block'>Help</Link>
          <Link href={"/"} className='block'>Terms</Link>
          <Link href={"/"} className='block'>FAQ</Link>
          </div>
        </div>
      </div>
      <hr className="w h-px mx-auto my-4 bg-gray-300 border-0 rounded md:my-5"></hr>
      </div>
    </footer>
  );
};

export default Footer;
