
import Image from 'next/image'
import React from 'react'
import bgImg from '../../../public/Breadcrumbs.png'
import { GoHome } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
export default function BreadCrumb() {
  const navLinks = [
    { name: 'Fresh Fruit', href: '/freshFruit' },
    { name: 'Vegetables', href: '/vegetables' },
    { name: 'Cooking', href: '/cooking' },
    { name: 'Snacks', href: '/snacks' },
    { name: 'Beverages', href: '/beverages' },
    { name: 'Beauty & Health', href: '/beautyHealth' },
    { name: 'Bread & Bakery', href: '/breadBakery' },
  ]
  return (
    <div className="w-full">
      <div className="relative h-[100px]">
        <Image src={bgImg} alt="Breadcrumb Background" fill className="object-cover" />

        {/* Breadcrumb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="container w-11/12 mx-auto">
            <div className="flex items-center gap-2 text-white text-lg flex-wrap">
              {/* Home */}
              <Link href="/" className="flex items-center gap-1 text-dimGray hover:text-pureGreen">
                <GoHome className="text-xl" />
              </Link>
              <IoIosArrowForward className="text-dimGray text-xl" />

              {/* Dynamic Links */}
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link href={link.href} className="text-dimGray hover:text-pureGreen text-sm">
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <IoIosArrowForward className="text-dimGray text-xl" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

  
    </div>
  )
}
