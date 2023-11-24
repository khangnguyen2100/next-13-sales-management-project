import ClientLayout from '@/components/Layout/ClientLayout';
import { RecentNews } from '@/components/blog';
import {
  HomeHeroBanner,
  Introduction,
  Solutions,
  AdvantageSection,
} from '@/components/home';

export default function Home() {
  return (
    <ClientLayout>
      <HomeHeroBanner />
      <Introduction />
      <Solutions />
      <AdvantageSection />
      {/* <Subscribe /> */}
      <RecentNews></RecentNews>
    </ClientLayout>
  );
}
