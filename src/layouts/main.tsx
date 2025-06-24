import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div id="home" className="min-h-screen bg-slate-800 bg-cover bg-center">
      <Header />
      <main className="pt-20 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
