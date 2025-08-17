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
        <style>
          {`
            /* Force dark mode with CSS and media query fallback */
            @media (prefers-color-scheme: dark) {
              html, body, main { background-color: #0f172a !important; color: #e2e8f0 !important; }
            }
            /* Also force it for devices that have dark theme set */
            html.dark, html.dark body, html.dark main { background-color: #0f172a !important; color: #e2e8f0 !important; }
          `}
        </style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Multiple methods to detect and force dark mode
                function applyDarkMode() {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.backgroundColor = '#0f172a';
                  document.documentElement.style.color = '#e2e8f0';
                  if (document.body) {
                    document.body.style.backgroundColor = '#0f172a';
                    document.body.style.color = '#e2e8f0';
                  }
                }
                
                // Check if system prefers dark mode
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                
                if (theme === 'dark' || prefersDark) {
                  applyDarkMode();
                  localStorage.setItem('theme', 'dark');
                }
                
                // Re-apply when page loads
                document.addEventListener('DOMContentLoaded', function() {
                  if (theme === 'dark' || prefersDark) {
                    applyDarkMode();
                  }
                });
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
