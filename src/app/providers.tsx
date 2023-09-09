'use client';
import { StyledEngineProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        {children}
      </SnackbarProvider>
    </StyledEngineProvider>
  );
};
