import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>Srikanto</title>
        <meta name="srikanto" content="this the hotel management system" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700  ">
        <Header className="flex justify-center items-center w-full md:h-auto p-[19px]   " />
        {children}
        <Footer />
      </div>
    </>
  );
}
