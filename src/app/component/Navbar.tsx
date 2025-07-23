import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <Link href="/"><Image src="/logo.png" alt="Logo" width={40} height={40} /> </Link>
            
        </div>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Ninjas">Ninjas</Link>         
    </nav>
  )
}
