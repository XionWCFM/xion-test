import '../src/app/style/tailwind.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '~/src/app/provider/providers';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
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
