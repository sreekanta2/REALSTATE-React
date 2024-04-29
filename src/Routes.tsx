import { useRoutes } from "react-router-dom";
import CreateAccount from "./modals/AccountCreate";
import Otp from "./modals/EnterOTP";
import Login from "./modals/Login";
import NewPassword from "./modals/NewPassword";
import ResetPassword from "./modals/RessatPassword";
import AboutPage from "./pages/AboutPage";
import AgentList from "./pages/AgentLists";
import AgentProfile from "./pages/AgentProfile";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogdetailsPage";
import ContactPagePage from "./pages/ContactPage";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import LicensePage from "./pages/LicencePage";
import ListingPage from "./pages/ListingPage";
import NotFound from "./pages/NotFound";
import PrivacyPolice from "./pages/PrivacyPolice";
import PropertyDetails from "./pages/PropertyDetails";
import LandingPage from "./pages/landingPage";

const Routes = () => {
  const element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },

    { path: "/", element: <LandingPage /> },
    { path: "aboutus", element: <AboutPage /> },

    { path: "list", element: <ListingPage /> },

    // {
    // path: "listingnapview",
    // element: <ListingMapView />},
    { path: "property/:id", element: <PropertyDetails /> },

    { path: "agentlist", element: <AgentList /> },

    {
      path: "agentlist/:id",
      element: <AgentProfile />,
    },
    { path: "contactpage", element: <ContactPagePage /> },
    { path: "blogpage", element: <BlogPage /> },

    { path: "blogdetails", element: <BlogDetailsPage /> },
    // {path: "error",
    // element: <Error />},
    { path: "faq", element: <FAQ /> },

    { path: "login", element: <Login /> },
    { path: "reset", element: <ResetPassword /> },
    { path: "create-account", element: <CreateAccount /> },
    { path: "new-password", element: <NewPassword /> },
    { path: "send-otp", element: <Otp /> },

    { path: "privacypolicy", element: <PrivacyPolice /> },
    { path: "license", element: <LicensePage /> },

    { path: "/notfound", element: <NotFound /> },
  ]);
  return element;
};
export default Routes;
