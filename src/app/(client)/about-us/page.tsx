import { Metadata } from 'next';

import {
  AboutUsBanner,
  Introduction,
  OurTeam,
  WorkProcess,
} from '@/components/about_us';

export const metadata: Metadata = {
  title: 'Giới thiệu - Beesmart',
};
function AboutUs() {
  return (
    <>
      <AboutUsBanner></AboutUsBanner>
      <Introduction></Introduction>
      <WorkProcess></WorkProcess>
      <OurTeam></OurTeam>
    </>
  );
}
export default AboutUs;
