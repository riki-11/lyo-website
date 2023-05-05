import React from 'react';

// Import custom components
import Header from '@/components/header.js';

// Import stylesheet and Tailwind classes
import "@/styles/globals.css"

export default function Home() {
  return (
    // Don't forget about changing these classes! I may not want some of these
    // Remove header from main!
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <Header/>

    </main>
  )
}
