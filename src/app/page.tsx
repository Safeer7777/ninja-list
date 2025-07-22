export const metadata = {
  title: "Home | Ninja List",
  description: "Welcome to the Ninja List homepage.",
  keywords: ["ninjas"]
};

import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <div className="home-center">
      <h1 className="text-4xl font-bold">HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>   
      <Link href="/Ninjas">
        See Ninja Listing
      </Link>
    </div>
  );
}
