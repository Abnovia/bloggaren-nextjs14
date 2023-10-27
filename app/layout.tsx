import './globals.css';
import Navbar from './components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bloggaren',
  description: 'Bloggaren som bloggar om allt mellan himmel och jord',
  keywords:
    'Sverige, småsinthet, ruttet, blogg, blog, bloggare, Clas Ohlson, produkttester, ömdömen',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="dark:bg-slate-900">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
