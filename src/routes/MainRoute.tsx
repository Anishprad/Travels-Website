// Import - default
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Import - views
import * as Pages from "../Pages";
import PublicLayout from "../views/layouts/PublicLayout";
import React from "react";

// Import - utils

// Main function
const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Pages.Home />} />
          <Route path="home" element={<Pages.Home />} />
          <Route path="about" element={<Pages.About />} />
          <Route path="cart" element={<Pages.Cart />} />
          <Route path="contact" element={<Pages.Contact />} />
          <Route path="domesticPackage" element={<Pages.DomesticPackage />} />
          <Route path="signup" element={<Pages.Signup />} />
          <Route path="flight" element={<Pages.Flight />} />
          <Route path="product" element={<Pages.Product />}>
            <Route path=":productId" element={<Pages.Product />} /> {/*  */}
          </Route>
          <Route
            path="internationalPackage"
            element={<Pages.InternationalPackage />}
          />
          <Route path="submission" element={<Pages.Submission />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
