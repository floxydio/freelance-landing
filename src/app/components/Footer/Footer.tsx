import './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="mx-52">
        <div className="flex justify-between py-8">
          <div className="w-2/5">
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
            <h1 className="font-bold text-xl mb-8">Company</h1>
            <div className="space-y-3 text-gray-500">
              <Link href={'/'} className="block hover:text-orange-500">
                About
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Our Team
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Products
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-8">Product</h1>
            <div className="space-y-3 text-gray-500">
              <Link href={'/'} className="block hover:text-orange-500">
                Feature
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Pricing
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Credit
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-8">Download</h1>
            <div className="space-y-3 text-gray-500">
              <Link href={'/'} className="block hover:text-orange-500">
                Ios
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Android
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Microsoft
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Desktop
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-8">Support</h1>
            <div className="space-y-3 text-gray-500">
              <Link href={'/'} className="block hover:text-orange-500">
                Privacy
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Help
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                Terms
              </Link>
              <Link href={'/'} className="block hover:text-orange-500">
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <hr className="w h-px mx-auto my-4 bg-gray-300 border-0 rounded md:my-5"></hr>
        <div className='flex place-content-between py-3'>
        <div className="text-gray-500 flex">
          Copyright ©2019
          <Link
            href={'/'}
            className="font-bold text-blue-600 dark:text-blue-500"
          >
            softsas
          </Link>
          . All Rights Reserved
        </div>
        <div className="flex gap-4">
            <Link href={'/'}>
              <Image src={'/facebook.png'} alt="" width={30} height={30} />
            </Link>
            <Link href={'/'}>
              <Image src={'/instagram.png'} alt="" width={30} height={30} />
            </Link>
            <Link href={'/'}>
              <Image src={'/twitter.png'} alt="" width={30} height={30} />
            </Link>
            <Link href={'/'}>
              <Image src={'/linkedin.png'} alt="" width={30} height={30} />
            </Link>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
