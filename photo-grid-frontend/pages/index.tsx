import Navbar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
