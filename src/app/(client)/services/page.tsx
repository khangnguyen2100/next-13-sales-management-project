import ClientLayout from '@/components/Layout/ClientLayout';
import { ServicesOffering, ServicesAdvance } from '@/components/services';
import { Solutions } from '@/components/home';
import ReviewList from '@/components/review/ReviewList';
import Banner from '@/components/common/Banner';
import BannerImg from 'public/images/services/banner.jpg';
export default function Index() {
  return (
    <ClientLayout>
      <Banner
        imageSrc={BannerImg}
        heading='Dịch vụ của chúng tôi'
        title='Quản lý dịch vụ'
        description='Chúng tôi thiết kế từng loại dịch vụ cho riêng từng ngành hàng khác nhau, đa dạng dịch vụ. '
      ></Banner>
      <Solutions full />
      <ServicesOffering />
      <ServicesAdvance />
      <ReviewList />
    </ClientLayout>
  );
}
