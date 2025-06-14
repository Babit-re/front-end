import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-7 w-full max-w-[1200px] mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
