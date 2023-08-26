import ClientLayout from '@/components/Layout/ClientLayout';
import {
  HomeHeroBanner,
  Introduction,
  Solutions,
  Subscribe,
} from '@/components/home';

export default function Home() {
  return (
    <ClientLayout>
      <HomeHeroBanner />
      <Introduction />
      <Solutions />
      <Subscribe />
    </ClientLayout>
  );
}
