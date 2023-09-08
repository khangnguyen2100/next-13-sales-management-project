'use client';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

import ButtonLink from '../common/ButtonLink';

import LoginForm from './LoginForm';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export default function LoginModal() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleShowLoginModal = () => {
    setOpenModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <ButtonLink onClick={handleShowLoginModal} color='primary'>
        Đăng nhập
      </ButtonLink>
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseLoginModal}
      >
        <DialogContent className=''>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
