import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

type Props = {};
const data = [
  {
    subject: "Design",
    A: 80,
    B: 90,
    fullMark: 100,
  },
  {
    subject: "Code",
    A: 60,
    B: 70,
    fullMark: 100,
  },
  {
    subject: "Author",
    A: 40,
    B: 50,
    fullMark: 100,
  },
  {
    subject: "Entrepreneur",
    A: 40,
    B: 50,
    fullMark: 100,
  },
  {
    subject: "Content Creator",
    A: 50,
    B: 70,
    fullMark: 100,
  },
  {
    subject: "Procastinator",
    A: 95,
    B: 100,
    fullMark: 100,
  },
];

function Home({}: Props) {
  return (
    <div className='md:h-screen hidden md:flex p-8 '>
      <div className=' w-full h-full'>
        <div className='grid  grid-cols-3 h-full'>
          <div className='h-full flex-col flex justify-between align-middle'>
            <div>
              <div className='font-bold text-4xl text-gray-600 uppercase '>
                Anjil Bishowkarma
              </div>
              <div className=' text-base text-gray-400'>
                Product Designer, Frontend Developer
              </div>
            </div>

            {/* FEATURES */}
            <div className='flex-col gap-[40px]'>
              <div className='flex gap-6'>
                <div className='h-[60px] w-[60px] '>
                  <img src='/d1.png' alt='' />
                </div>
                <div className='flex-col'>
                  <div className='uppercase text-base font-bold '>Designer</div>
                  <div className=' text-xs'>
                    With 6 years of experience, i am aiming to become a designer
                    who design for change.
                  </div>
                </div>
              </div>
              <div className='flex gap-6'>
                <div className='h-[60px] w-[60px] '>
                  <img src='/d2.png' alt='' />
                </div>
                <div className='flex-col'>
                  <div className='uppercase text-base font-bold '>Designer</div>
                  <div className=' text-xs'>
                    With 6 years of experience, i am aiming to become a designer
                    who design for change.
                  </div>
                </div>
              </div>
              <div className='flex gap-6'>
                <div className='h-[60px] w-[60px] '>
                  <img src='/d3.png' alt='' />
                </div>
                <div className='flex-col'>
                  <div className='uppercase text-base font-bold '>Designer</div>
                  <div className=' text-xs'>
                    With 6 years of experience, i am aiming to become a designer
                    who design for change.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-full w-full'>
            <img src='/image.png' alt='' />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='h-[300px] w-auto'>
              <ResponsiveContainer width='100%' height='100%'>
                <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey='subject' />
                  <PolarRadiusAxis />
                  <Radar
                    name='anjil'
                    dataKey='A'
                    stroke='#v'
                    fill='#3f3f3f'
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div>Tools</div>
              <div className='grid grid-cols-3 gap-3'>
                <div className='w-full'>
                  <img src='/next.svg' width='100%' alt='' />
                </div>
                <div>
                  <img src='/Frame 8.svg' alt='' width='100%' />
                </div>
                <div>
                  <img src='/Group 6.svg' alt='' width='100%' />
                </div>
                <div>
                  <img src='/Group 6-1.svg' alt='' width='100%' />
                </div>
                <div>
                  <img src='/Groun 7.svg' alt='' width='100%' />
                </div>
              </div>
            </div>
            <div className='w-full flex justify-end'>
              <div className='rounded-lg border-gray-700 text-2xl border-2  font-medium px-5 py-3'>
                Say Hello 👋🏻
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
