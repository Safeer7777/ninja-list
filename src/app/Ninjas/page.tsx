import React from 'react';
import Link from 'next/link';

// Define a type for our Ninja data for better type-safety
type Ninja = {
  id: number;
  name: string;
};

export default async function Ninjas() {
  // Fetch data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas: Ninja[] = await res.json();

  return (
    <div className="ninjas-center">
      <h1>All Ninjas</h1>
      <p>Here is our elite team of ninjas, fetched from a remote API.</p>
      <div className="ninja-list">
        {ninjas.map((ninja) => (
          // Each ninja card links to a dynamic route for that ninja
          <Link href={`/Ninjas/${ninja.id}`} key={ninja.id} className="ninja-card">
            <h3>{ninja.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
