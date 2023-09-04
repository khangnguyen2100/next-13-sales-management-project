import Image from 'next/image';
import React, { Fragment } from 'react';

import Image1 from 'public/images/contact/img-1.jpg';
import PhoneIcon from 'public/icons/phone-primary.svg';
import MailIcon from 'public/icons/mail-primary.svg';
import LocationIcon from 'public/icons/location-primary.svg';

import HeadingWithDot from '../common/HeadingWithDot';
import { ContactItemProp } from '../common/Footer';

const contacts: ContactItemProp[] = [
  {
    heading: 'Liên hệ',
    description: '+01 569 896 654',
    icon: PhoneIcon,
  },
  {
    heading: 'Mail Us',
    description: 'Info@Example.com',
    icon: MailIcon,
  },
  {
    heading: 'Địa chỉ',
    description: 'CVPM Quang Trung',
    icon: LocationIcon,
  },
];
const ContactItem = ({ props }: { props: ContactItemProp }) => {
  const { heading, description, icon } = props;
  return (
    <div className='flex items-center gap-x-[10px]'>
      {/* icon */}
      <div className='flex h-[68px] w-[68px] items-center justify-center rounded-full bg-section-5 shadow-md '>
        <Image src={icon} width={26} height={26} alt={heading} />
      </div>
      <div className='flex flex-col  text-typo-1 md:gap-y-1'>
        <h4 className='text-lg font-semibold'>{heading}</h4>
        <p className='text-typo-3'>{description}</p>
      </div>
      {/* content */}
    </div>
  );
};
const ContactInfoSection = () => {
  return (
    <div className='container my-24 flex items-center gap-[50px] lgd:flex-col'>
      <Image src={Image1} width={585} height={454} alt='contact with us' />
      {/* content side */}
      <div className='flex flex-col gap-8'>
        {/* header */}
        <div>
          <HeadingWithDot color='black' variant='secondary' align='start'>
            Let’s Talk
          </HeadingWithDot>
          <h2 className='mb-3 mt-4 text-[40px] text-typo-1 mdd:text-3xl'>
            Get in touch with us
          </h2>
          <p className='text-typo-3'>
            Completely synergize resource taxing relationships via premier niche
            ynamically innovate state of the art customer service.
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          {contacts.map((item, i) => (
            <Fragment key={i}>
              <ContactItem props={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
