import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateRestaurantPage = () => {
  const user_id = 1; // DEFAULT USERID
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, cuisine, address, user_id }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/restaurants`);
      } else {
        console.error('Failed to create restaurant');
      }
    } catch (error) {
      console.error('Error creating restaurant:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Create a New Restaurant</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="cuisine" className="block font-medium mb-1">
            Cuisine
          </label>
          <input
            type="text"
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Create Restaurant
        </button>
      </form>
    </div>
  );
};

export default CreateRestaurantPage;