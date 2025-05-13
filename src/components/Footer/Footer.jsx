import React from 'react'
import bgImg from '../../../public/Footer.png'
import Image from 'next/image'
import logo from '../../../public/plant 1.png'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full relative'>
      <Image src={bgImg} alt='' className='absolute top-0 left-0 w-full h-full z-[-1]' />
      <div className='container w-11/12 mx-auto'>
        <div className='py-10'>
          <div className='flex justify-between gap-5'>
            <div>
              <div className='flex items-center gap-2'>
                <Image src={logo} alt="logo" />
                <h3 className="text-3xl font-medium text-white">Ecobazar</h3>
              </div>
              <p className='text-sm text-lightGray my-3 w-72'>
                We make shopping easy and reliable with smooth navigation and thoughtful design,
                helping you find what you need effortlessly.
              </p>
              <div className='flex items-center gap-3'>
                {[
                  { icon: <FaFacebookF />, href: "#" },
                  { icon: <FaTwitter />, href: "#" },
                  { icon: <FaPinterestP />, href: "#" },
                  { icon: <FaInstagram />, href: "#" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className='w-10 h-10 rounded-full flex items-center justify-center text-lightGray hover:bg-pureGreen hover:text-white transition-colors duration-300'
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* My Account Section */}
            <div>
              <h4 className='text-white font-medium mb-1.5'>My Account</h4>
              <div className='w-5 border-[1px] border-pureGreen mb-4'></div>
              <ul className='text-lightGray flex flex-col gap-2 text-sm'>
                <li><Link href="/account">My Account</Link></li>
                <li><Link href="/orders">Order History</Link></li>
                <li><Link href="/cart">Shopping Cart</Link></li>
                <li><Link href="/wishlist">Wishlist</Link></li>
              </ul>
            </div>

            {/* Helps Section */}
            <div>
              <h4 className='text-white font-medium mb-1.5'>Helps</h4>
              <div className='w-5 border-[1px] border-pureGreen mb-4'></div>
              <ul className='text-lightGray flex flex-col gap-2 text-sm'>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faqs">Faqs</Link></li>
                <li><Link href="/terms">Terms & Condition</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Proxy Section */}
            <div>
              <h4 className='text-white font-medium mb-1.5'>Proxy</h4>
              <div className='w-5 border-[1px] border-pureGreen mb-4'></div>
              <ul className='text-lightGray flex flex-col gap-2 text-sm'>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/track-order">Track Order</Link></li>
              </ul>
            </div>

            {/* Categories Section */}
            <div>
              <h4 className='text-white font-medium mb-1.5'>Categories</h4>
              <div className='w-5 border-[1px] border-pureGreen mb-4'></div>
              <ul className='text-lightGray flex flex-col gap-2 text-sm'>
                <li><Link href="/categories/fruit-vegetables">Fruit & Vegetables</Link></li>
                <li><Link href="/categories/meat-fish">Meat & Fish</Link></li>
                <li><Link href="/categories/bread-bakery">Bread & Bakery</Link></li>
                <li><Link href="/categories/beauty-health">Beauty & Health</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='border-[1px] border-b-darkGray2'></div>

      <div className='container w-11/12 mx-auto py-5'>
        <p className='text-lightGray text-sm'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
      </div>
    </div>
  )
}
