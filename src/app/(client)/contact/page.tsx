import ClientLayout from '@/components/Layout/ClientLayout';
import HeadingWithDot from '@/components/common/HeadingWithDot';
import HeroBanner from '@/components/common/HeroBanner';
import BannerImage from 'public/images/contact/banner.jpg';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
export default function Index() {
  return (
    <ClientLayout>
      <HeroBanner imageSrc={BannerImage}>
        <HeadingWithDot color='white' variant='secondary' align='start'>
          Contact Us
        </HeadingWithDot>
        <h1 className='mt-5 text-[60px] text-white lgd:text-5xl mdd:text-4xl'>
          Feel Free Reach Us
        </h1>
      </HeroBanner>
      <ContactInfoSection />
      <ContactFormSection />
    </ClientLayout>
  );
}
