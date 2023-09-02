import Banner from '@/components/common/Banner';
import PricingOptionSection from '@/components/pricing/PricingOptionSection';
import BannerImage from 'public/images/contact/banner.jpg';
export default function Index() {
  return (
    <>
      <Banner
        imageSrc={BannerImage}
        heading='Pricing Package'
        title='Affordable Plans For Customers'
      ></Banner>
      <PricingOptionSection />
    </>
  );
}
