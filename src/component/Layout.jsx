import { Outlet } from "react-router-dom";
import Header from "./Header";
import Introduction from "./Introduction";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <Introduction />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
