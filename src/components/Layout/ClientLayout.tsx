import React, { ReactNode } from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';

type Props = {
  children: ReactNode;
};

const ClientLayout = (props: Props) => {
  return (
    <div className='relative mx-auto flex w-full flex-col'>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default ClientLayout;
