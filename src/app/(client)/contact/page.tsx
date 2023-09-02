import ClientLayout from '@/components/Layout/ClientLayout';
import Banner from '@/components/common/Banner';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import BannerImage from 'public/images/contact/banner.jpg';
export default function Index() {
  return (
    <ClientLayout>
      <Banner
        imageSrc={BannerImage}
        heading='Contact Us'
        title='Hãy liên hệ với chúng tôi'
      ></Banner>
      <ContactInfoSection />
      <ContactFormSection />
    </ClientLayout>
  );
}
