import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className='h-24 flex justify-between items-center  bg-white'>
      <div className='flex-col'>
        <div className='font-regular text-xs text-gray-600'>
          © 2022 — Anjil Bishowkarma
        </div>
      </div>
      <div>
        <div className='font-regular text-xs text-gray-600'>
          Deverloper Experience is key to Good Product
        </div>
      </div>
    </div>
  );
}

export default Footer;
