import React, { ReactNode } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

type Props = {
  children: ReactNode;
};

const ClientLayout = (props: Props) => {
  return (
    <div className='relative flex flex-col w-full mx-auto'>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default ClientLayout;
