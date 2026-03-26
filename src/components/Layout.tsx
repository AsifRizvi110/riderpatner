import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollRestoration } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <ScrollRestoration />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
