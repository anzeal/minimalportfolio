import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className='h-24 flex justify-between items-center  bg-white'>
      <div className='flex-col'>
        <div className='font-bold leading-5 text-gray-700 text-lg uppercase'>
          Anjil Bishowkarma{" "}
          <span className='text-[12px] font-medium text-gray-500 capitalize'>
            Lalitpur, NP
          </span>
        </div>
        <div className='font-regular text-xs text-gray-600'>
          Product Designer, Frontend Developer
        </div>
      </div>
      <div>
        <ul className='flex space-x-4'>
          <li className='hover:underline cursor-pointer text-gray-600 hover:text-blue-600'>
            Work
          </li>
          <li className='hover:underline cursor-pointer text-gray-600 hover:text-blue-600'>
            About
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
