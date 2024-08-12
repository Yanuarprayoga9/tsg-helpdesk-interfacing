import { QueryProvider } from '@/components/provider/query-provider';
import { ToastProvider } from '@/components/provider/toast-provider';
import { SidebarProvider } from '@/context/sidebar.context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <SidebarProvider>
        <ToastProvider />
        <Component {...pageProps} />
      </SidebarProvider>
    </QueryProvider>
  );
}
