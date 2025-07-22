import { notFound } from 'next/navigation';

// Define a type for the single Ninja data
type Ninja = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

// This function generates dynamic metadata for each ninja page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const ninja = await getSingleNinja(params.id);
  if (!ninja) {
    return {
      title: 'Ninja Not Found',
    };
  }
  return {
    title: `${ninja.name} | Ninja Details`,
    description: `Details for the ninja: ${ninja.name}`,
  };
}

// Function to fetch a single ninja's data
async function getSingleNinja(id: string): Promise<Ninja | null> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function NinjaDetails({ params }: { params: { id: string } }) {
  const ninja = await getSingleNinja(params.id);

  // If no ninja is found, show the 404 page
  if (!ninja) {
    notFound();
  }

  return (
    <div className="ninja-details">
      <h1>{ninja.name}</h1>
      <div className="details-grid">
        <p><strong>Email:</strong> {ninja.email}</p>
        <p><strong>Phone:</strong> {ninja.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${ninja.website}`} target="_blank" rel="noopener noreferrer">{ninja.website}</a></p>
      </div>
    </div>
  );
} 