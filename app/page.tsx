import React, { useState } from "react";
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight";
import { HeroParallax } from "../components/ui/hero-parallax";
import { FloatingNav } from "../components/ui/floating-navbar";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Footer from '@/components/Footer'
import { DynamicNavbar } from "@/components/NavbarDemo";
import Link from "next/link";
import Image from 'next/image';
import Benefits from "@/components/Benefits";
import About from "@/components/about";
import Services from "@/components/services";
import Careers from "@/components/Careers";
import Head from 'next/head';

export default function Home() {



  return (
    <>
    <div className="relative  w-full">
       <DynamicNavbar /> {/* Added Navbar */}
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Spotlight Section */}
      <div className="h-[30rem] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden px-4">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#15d68f" />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
          <h1 className="text-3xl mb-9 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Welcome To <br /> NextSoft <br />
          </h1>
          <p className="mt-5 font-normal text-sm md:text-base text-neutral-300 max-w-lg mx-auto">
          Welcome to our service, a true revolution in convenience and quality. Here, you will discover a world of personalized solutions designed specifically for you and ready to exceed your expectations.
          </p>
          <a href="https://discord.gg/g2m3ExwP" target="_blank" rel="noopener noreferrer">
  <button className="px-4 mt-6 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4">
    <FaDiscord className="inline-block mr-2" /> Discord
  </button>
</a>
<a href="https://t.me/NextSoftGroup" target="_blank" rel="noopener noreferrer">
<button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
  <FaTelegramPlane className="inline-block mr-2" /> Telegram
</button></a>
        </div>
      </div>
       <Benefits />
       <About />
       <Services />
       <Careers />

      {/* Products Section */}
      <div id='services' className="px-4 py-10 text-white">
        <HeroParallax products={products} />
      </div>
    </div><Footer /></div>
    </>
  );
}
const products = [
  
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "NextSoft",
      link: "#",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },  
];
