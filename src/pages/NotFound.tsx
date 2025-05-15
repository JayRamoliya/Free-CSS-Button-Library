
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold mb-4 text-brand">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Oops! The button you're looking for has been unpressed.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="bg-brand hover:bg-brand-600 w-full">
                Go to Homepage
              </Button>
            </Link>
            <Link to="/buttons">
              <Button variant="outline" className="w-full">
                Browse Button Library
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
