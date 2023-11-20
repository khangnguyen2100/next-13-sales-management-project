'use client';
import { SlArrowDown } from 'react-icons/sl';

import BarChart from '@/components/admin/DashBoard/LineChart';
import SideBar from '@/components/admin/DashBoard/SideBar';
function AdminDashBoard() {
  return (
    <div className='mx-auto grid max-w-xl grid-cols-12 gap-x-8'>
      <div className='col-span-9 flex flex-col gap-y-5 rounded-md px-10 shadow-lg'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base'>
            Doanh thu tháng này: <span className='text-typo-4'>564,000</span>
          </h3>
          <div className='flex items-center gap-x-1 text-sm text-typo-4'>
            <span>Tháng này</span>
            <SlArrowDown />
          </div>
        </div>
        <div className='flex gap-x-3'>
          <span>Theo ngày</span>
          <span>Theo giờ</span>
          <span>Theo thứ</span>
        </div>
        <BarChart />
      </div>
      <div className='col-span-3'>
        <SideBar />
      </div>
    </div>
  );
}

export default AdminDashBoard;
