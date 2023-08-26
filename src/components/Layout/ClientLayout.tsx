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
      <main className='mt-[92px] mdd:mt-[71px]'>{props.children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
