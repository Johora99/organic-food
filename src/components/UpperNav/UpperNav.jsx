import React from 'react'
import { CiLocationOn } from "react-icons/ci";
export default function UpperNav() {
  return (
    <div className='w-full bg-grayishGreen py-3'>
      <nav className='container w-11/12 mx-auto bg-grayishGreen flex items-center justify-between'>
         <p className='flex items-center gap-2 text-xs text-darkGreen'> <CiLocationOn className='text-base'/> Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
         <div className='text-xs text-darkGreen'>
          <select name="" id="">
            <option value="ENG">ENG</option>
            <option value="BNG">BNG</option>
          </select>
          <select name="" id="">
            <option value="">USD</option>
            <option value="">BDT</option>
          </select>
         </div>
      </nav>
    </div>
  )
}
