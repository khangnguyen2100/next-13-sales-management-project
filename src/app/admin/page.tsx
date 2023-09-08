import { ReactNode } from 'react';

import AdminLayout from '@/components/Layout/AdminLayout';

type Props = {
  children: ReactNode;
};
function Admin({ children }: Props) {
  return <AdminLayout>{children}</AdminLayout>;
}

export default Admin;
