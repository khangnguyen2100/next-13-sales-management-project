import Banner from '@/components/common/Banner';
import FaqMainSection from '@/components/faq/FaqMainSection';
import BannerImage from 'public/images/contact/banner.jpg';

export default function Index() {
  return (
    <>
      <Banner
        imageSrc={BannerImage}
        heading='FAQ'
        title='Frequently Asked Questions'
      ></Banner>
      <FaqMainSection />
    </>
  );
}
