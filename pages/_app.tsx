import type { AppProps } from 'next/app';
import '../styles/linktree.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
