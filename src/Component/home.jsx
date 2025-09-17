import React from "react";
import NavBar from "./NavBar"; // ✅ correct import

import { Outlet } from "react-router-dom"; // ✅ import Outlet if you plan nested routes
import Carousel from "./Crousel";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Outlet /> {/* will render child routes inside Home */}
      <Footer />
    </div>
  );
}
