// router.js

import { createBrowserRouter } from "react-router-dom";

// Layout
import Main from "../layouts/Main";

// Core Pages
import Home from "../pages/Home/Home";
import ServicePage from "../pages/service/ServicePage";
import AboutMePage from "../pages/about/AboutMePage";
import ContactPage from "../pages/contact/ContactPage";
import FaqPage from "../pages/FAQ/FaqPage";
import Terms from "../pages/terms/Terms";
import BlogPage from "../pages/blogs/BlogPage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import Gallery from "../pages/Gallery";
import ErrorPage from "../pages/errorPage/ErrorPage";

// QPEM Service Pages
import OurServices from "../QPEM/OurServices";
import Plumbing from "../QPEM/plumbing";
import Electrical from "../QPEM/electrical";
import Appliance from "../QPEM/appliance";
import Maintenance from "../QPEM/maintenance";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Main />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      // Main Website Pages
      { path: "/", element: <Home /> },
      { path: "/service", element: <ServicePage /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/about", element: <AboutMePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/terms", element: <Terms /> },

      // QPEM Services Overview & Categories
      { path: "/services", element: <OurServices /> },
      { path: "/services/plumbing", element: <Plumbing /> },
      { path: "/services/electrical", element: <Electrical /> },
      { path: "/services/appliance", element: <Appliance /> },
      { path: "/services/maintenance", element: <Maintenance /> },
    ],
  },

  // 404 Not Found Route
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
