import { Metadata } from 'next';

import Banner from '@/components/common/Banner';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import BannerImage from 'public/images/contact/banner.jpg';
export const metadata: Metadata = {
  title: 'Liên hệ - Beesmart',
};
export default function Index() {
  return (
    <>
      <Banner
        imageSrc={BannerImage}
        heading='Thông tin liên hệ'
        title='Hãy liên hệ với chúng tôi'
      ></Banner>
      <ContactInfoSection />
      <ContactFormSection />
    </>
  );
}
