import ClientLayout from '@/components/Layout/ClientLayout';
import {
  AboutUsBanner,
  Introduction,
  WorkProcess,
} from '@/components/about_us';

function AboutUs() {
  return (
    <>
      <AboutUsBanner></AboutUsBanner>
      <Introduction></Introduction>
      <WorkProcess></WorkProcess>
    </>
  );
}
export default AboutUs;
