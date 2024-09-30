// src/app/layout.tsx
import './globals.css';
import Navbar from '../components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="flex flex-col min-h-screen">
      <body>
        <main className="flex-1 pb-16">
        {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}
