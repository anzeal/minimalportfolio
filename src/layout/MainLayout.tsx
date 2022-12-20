import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Play from "./Play";
import Work from "./Work";

type Props = {};

function MainLayout({}: Props) {
  return (
    <div className='flex-col px-24 bg-white'>
      <Navbar />
      <div className='grid gap-12 mt-10 grid-cols-6'>
        <div className='col-span-4'>
          <div className='text-lg mb-4 border-b-[1px]'>Work</div>
          <Work />
        </div>
        <div className=' col-span-2'>
          <div className='text-lg mb-4 border-b-[1px]'>Showcase</div>
          <Play />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
