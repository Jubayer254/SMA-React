import React from "react";
import Navbar from "../../components/LandingPage/Navber/Navbar";
import PopularCourse from "../../components/LandingPage/PopularCourse/PopularCourse";
import Counter from "../../components/LandingPage/Counter/Counter";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import TrendingCourse from "../../components/LandingPage/TrendingCourse/TrendingCourse";
import ActionBox from "../../components/LandingPage/ActionBox/ActionBox";
import Reviews from "../../components/LandingPage/Reviews/Reviews";
import Footer from "../../components/LandingPage/Footer.jsx/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Counter></Counter>
      {/* <PopularCourse></PopularCourse> */}
      <ActionBox></ActionBox>
      <TrendingCourse></TrendingCourse>
      {/* <Reviews></Reviews> */}
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
