import '../src/app/style/root.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '~/src/app/provider/providers';
import { ClarityScript } from '~/src/shared/external/clarity-script';
import { GoogleScript } from '~/src/shared/external/google-script';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <GoogleScript />
        <ClarityScript />
      </body>
    </html>
  );
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'hello',
    template: `%s - 'hello`,
  },
  description: 'description',
};
