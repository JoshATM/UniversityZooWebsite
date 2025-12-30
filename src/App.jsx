// Importing Modules
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import GlobalComponents from "./components/GlobalComponents";

import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Tickets from "../src/components/pages/Tickets";
import CookiePolicy from "../src/components/pages/CookiePolicy";
import Dashboard from "./components/pages/Dashboard";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import AccessibilityStatement from "./components/pages/AccessibilityStatement";

// Gets loggedIn from local storage
const loggedIn = localStorage.getItem("loggedIn");

export default function App() {
  const router = createBrowserRouter([
    // Makes it so anything in GlobalComponents (such as the Header) is not displayed in PageNotFound
    { path: "*", element: <PageNotFound /> },
    {
      path: "/",
      element: <GlobalComponents />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <LogIn /> },
        { path: "signup", element: <SignUp /> },
        { path: "tickets", element: <Tickets /> },
        { path: "cookie-policy", element: <CookiePolicy /> },
        // If the user is not Logged In then to redirect them to the Log in screen
        { path: "dashboard", element: loggedIn ? <Dashboard /> : <LogIn /> },
        // GDPR and Legal Pages (UK Law Compliant)
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-of-service", element: <TermsOfService /> },
        { path: "accessibility", element: <AccessibilityStatement /> },
      ],
    },
  ]);

  return (
    <>
      {/* Allows the elements above to be used */}
      <RouterProvider router={router} />
      {/* Toaster Pop-up Styles */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#1A8940",
            color: "#ffffff",
          },
        }}
      />
    </>
  );
}
