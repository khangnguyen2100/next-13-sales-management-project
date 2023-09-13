'use client';
import { Chart as ChartJS } from 'chart.js/auto';
import { SlArrowDown } from 'react-icons/sl';

import AdminLayout from '@/components/Layout/AdminLayout';
import SideBar from '@/components/admin/DashBoard/SideBar';
import BarChart from '@/components/admin/DashBoard/LineChart';
function AdminDashBoard() {
  return (
    <AdminLayout>
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
    </AdminLayout>
  );
}

export default AdminDashBoard;
