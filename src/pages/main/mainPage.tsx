/** @format */

import { Outlet } from "react-router-dom";
import { Aside } from "./ui/aisde";
import { Navbar } from "./ui/navbar";

const AsideSection = () => (
  <aside className="w-1/4">
    <Aside />
  </aside>
);

const NavbarSection = () => (
  <nav>
    <Navbar />
  </nav>
);

const MainPage = () => {
  return (
    <div className="flex h-screen">
      <AsideSection />
      <main className="flex-1">
        <NavbarSection />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
