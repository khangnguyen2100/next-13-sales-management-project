import ClientLayout from '@/components/Layout/ClientLayout';
import {
  ServicesBanner,
  ServicesOffering,
  ServicesAdvance,
} from '@/components/services';
import { Solutions } from '@/components/home';
import ReviewList from '@/components/review/ReviewList';

export default function Index() {
  return (
    <ClientLayout>
      <ServicesBanner />
      <Solutions full />
      <ServicesOffering />
      <ServicesAdvance />
      <ReviewList />
    </ClientLayout>
  );
}
