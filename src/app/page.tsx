import ClientLayout from '@/components/Layout/ClientLayout';
import {
  HomeHeroBanner,
  Introduction,
  Solutions,
  Subscribe,
  AdvantageSection,
} from '@/components/home';
import ReviewList from 'components/review/ReviewList';

export default function Home() {
  return (
    <ClientLayout>
      <HomeHeroBanner />
      <Introduction />
      <Solutions />
      <AdvantageSection />
      <ReviewList />
      <Subscribe />
    </ClientLayout>
  );
}
