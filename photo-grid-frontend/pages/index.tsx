import Navbar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import React from "react";
import ImgCard from "@/components/img-card/img-card";

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="grid grid-cols-4 gap-4">
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
