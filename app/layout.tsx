import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
                localStorage.setItem('theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className="dark:bg-slate-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-slate dark:prose-invert mx-auto flex-grow bg-white dark:bg-slate-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
