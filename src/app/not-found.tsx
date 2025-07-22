"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <p>Redirecting to the <Link href="/">Homepage</Link> in 3 seconds...</p>
    </div>
  );
}
