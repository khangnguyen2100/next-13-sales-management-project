import AdminLayout from '@/components/Layout/AdminLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;                      
}
