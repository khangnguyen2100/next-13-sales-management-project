import ClientLayout from '@/components/Layout/ClientLayout';
import {
  AboutUsBanner,
  Introduction,
  WorkProcess,
} from '@/components/about_us';

function AboutUs() {
  return (
    <ClientLayout>
      <AboutUsBanner></AboutUsBanner>
      <Introduction></Introduction>
      <WorkProcess></WorkProcess>
    </ClientLayout>
  );
}

export default AboutUs;
