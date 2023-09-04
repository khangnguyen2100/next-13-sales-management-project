import ClientLayout from '@/components/Layout/ClientLayout';
import {
  AboutUsBanner,
  Introduction,
  WorkProcess,
} from '@/components/about_us';

function AboutUs() {
  return (
    <ClientLayout>
      <main className='mt-[92px]'>
        <h2>About Us</h2>
      </main>
      <AboutUsBanner></AboutUsBanner>
      <Introduction></Introduction>
      <WorkProcess></WorkProcess>
    </ClientLayout>
  );
}
export default AboutUs;
