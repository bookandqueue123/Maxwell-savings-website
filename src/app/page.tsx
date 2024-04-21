'use client'
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
