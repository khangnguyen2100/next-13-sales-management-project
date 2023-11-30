import { Metadata } from 'next';

import Banner from '@/components/common/Banner';
import PricingOptionSection from '@/components/pricing/PricingOptionSection';
import BannerImage from 'public/images/contact/banner.jpg';
export const metadata: Metadata = {
  title: 'Gói dịch vụ - Beesmart',
};
export default function Index() {
  return (
    <>
      <Banner
        imageSrc={BannerImage}
        heading='Gói dịch vụ'
        title='Chọn gói dịch vụ phù hợp với bạn'
      ></Banner>
      
    </>
  );
}
