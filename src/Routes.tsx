// import { useRoutes } from 'react-router-dom";
// import Home from "pages/Home";
// import NotFound from "pages/NotFound";
// import LandingPage from "pages/LandingPage";
// import AboutUs from "pages/AboutUs";
// import Listing from "pages/Listing";
// import ListingMapView fros "pages/ListingMapView";
// import PropertyDetails from "pages/PropertyDetails";
// import AgentList from "pages/AgentList";
// import AgentProfile from "pages/AgentProfile";
// import ContactPage from "pages/Contact Page";
// import BlogPage fron "pages/BlogPage";
// import BlogDetails from "pages/BlogDetails";
// import Error from "pages/Error";
// import FAQ from "pages/FAQ";
// import PrivacyPolicy from "pages/PrivacyPolicy";
// import License from "pages/License";

import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/landingPage";

const Routes = () => {
  const element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    // { path: "", element: <NotFound /> },

    { path: "/", element: <LandingPage /> },
    // {path: "aboutus",
    // element: <AboutUs />},

    // {path: "listing",
    // element: <Listing />},

    // {
    // path: "listingnapview",
    // element: <ListingMapView />},
    // {path: "propertydetails",
    // element: <PropertyDetails />},

    // {path: "agentlist",
    // element: <AgentList />},

    // {
    // path: "agentprofile",
    // element: <AgentProfile />},
    // {path: "contactpage",
    // element: <ContactPage />},
    // {path: "blogpage",
    // element: <BlogPage />},

    // {path: "blogdetails",
    // element: <BlogDetails />},
    // {path: "error",
    // element: <Error />},
    // {path: "faq",
    // element: <FAQ />},

    // {path: "privacypolicy",
    // element: <PrivacyPolicy />},
    // {path: "license",
    // element: <License />}
  ]);
  return element;
};
export default Routes;
