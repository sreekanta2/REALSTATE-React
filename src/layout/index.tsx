import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Srikanto</title>
        <meta name="srikanto" content="this the hotel management system" />
      </Helmet>
      <div className=" bg-white-A700  ">
        <Header2 />
        <main className=" ">{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
