import React from 'react';

// Import custom components
import Header from '@/components/header.js';
import Hero from '@/components/hero';
import {LeftHomeSection, RightHomeSection} from '@/components/page-section';

// Import stylesheet and Tailwind classes
import "@/styles/globals.css"

// Import text for the page
import { homeText } from '@/text/home-text';

export default function Home() {

  // About Us Section
  const ABOUT_SECTION = {
    bgColor: "bg-lyo-cream",
    title: "About Us",
    text: homeText["meet"],
    img_1: "images/GA-1.jpg"
  };


  return (
    // Remove header from main!
    <main className="flex min-h-screen flex-col">
      
      <Header/>      
      <Hero/>
      <LeftHomeSection info={ABOUT_SECTION}/>

    </main>
  )
}
