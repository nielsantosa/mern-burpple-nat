import React, { useState } from 'react';
import NotFoundPage from '../../components/notFound'
import CuisineTag from '../../components/cuisineTag';
import { defaultImage } from '../../lib/consts'
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`http://localhost:3000/api/restaurants/${id}`);
    let restaurant = {};
    try {
      restaurant = await res.json();
    } catch (err) {
    }

    const image = `http://localhost:3000${defaultImage}`;
    restaurant.image = image;
  
    return {
        props: {
            restaurant,
        },
    };
}

const Restaurant = ({ restaurant }) => {
  const router = useRouter();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  if (!restaurant || restaurant.id == null) {
    return <NotFoundPage />
  }

  const handleEdit = () => {
    router.push(`/restaurants/${restaurant.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/restaurants/${restaurant.id}`, {
        method: 'DELETE',
      });
      router.push('/restaurants');
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  const handleDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <div className="flex gap-4">
              <button
                onClick={handleEdit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg w-24"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteConfirmation}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg w-24"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{restaurant.description}</p>
          <div className="mb-4">
            <CuisineTag cuisine={restaurant.cuisine} />
          </div>
          <p className="text-gray-600 mb-4">{restaurant.address}</p>
        </div>
      </div>

      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this restaurant?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
  
export default Restaurant;