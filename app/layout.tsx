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
              try {
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.body.style.backgroundColor = '#0f172a';
                }
                localStorage.setItem('theme', theme);
              } catch(e) {
                // Fallback for browsers that don't support matchMedia
                document.documentElement.classList.add('dark');
                document.body.style.backgroundColor = '#0f172a';
              }
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
