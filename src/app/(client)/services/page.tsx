import Banner from '@/components/common/Banner';
import { Solutions } from '@/components/home';
import ReviewList from '@/components/review/ReviewList';
import { ServicesAdvance, ServicesOffering } from '@/components/services';
import BannerImg from 'public/images/services/banner.jpg';
export default function Index() {
  return (
    <>
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
    </>
  );
}
