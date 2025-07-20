import Link from "next/link"
import logo from '../../../public/plant 1.png'
import Image from "next/image"
import { PiPhoneCallLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
export default function LowerNav() {
  const navLink = ()=> {
     return (
      <>
      <li><Link href={'/'} className="navLink">Home</Link></li>
      <li><Link href={'/shop'}>Shop</Link></li>
      <li><Link href={''}>Pages</Link></li>
      <li><Link href={''}>Blog</Link></li>
      <li><Link href={''}>About Us</Link></li>
      </>
     )
  }
  return (
    <div className="w-full bg-white py-5">
      <nav className="container w-11/12 mx-auto flex items-center justify-between">
        <ul className="list-none flex items-center gap-5 text-sm text-lightGray">
          {
          navLink()
        }
        </ul>
        <div className="flex items-center gap-2">
        <Image src={logo} alt="logo"/>
         <h3 className="text-3xl font-medium text-darkEmerald">Ecobazar</h3>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
           <PiPhoneCallLight className="text-2xl"/>
           <a href="tel:+8801858909300" className="text-sm text-darkGray">+8801858909300</a>
          </div>
          <div className="flex items-center gap-2 text-darkGray">
           <CiSearch className="text-2xl"/>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
            <HiOutlineShoppingBag className="text-2xl"/>
            <CiUser className="text-2xl"/>
          </div>
        </div>
      </nav>
    </div>
  )
}
