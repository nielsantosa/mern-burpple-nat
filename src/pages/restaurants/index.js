import React from 'react';
import CardList from '../../components/cardList';
import { defaultImage } from '../../lib/consts'
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const userId = 1; // default
    const hostname = context.req.headers.host
    const res = await fetch(`http://${hostname}/api/restaurants?user_id=${userId}`)
    const restaurants = await res.json();

    restaurants.forEach((restaurant) => {
        if (!restaurant.image) {
        restaurant.image = defaultImage;
        }
    });
  
    return {
        props: {
            restaurants,
        },
    };
}

const Restaurants = ({ restaurants }) => {
  const router = useRouter();

  const handleAddRestaurant = () => {
    router.push('/restaurants/create');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1>My Restaurant Collections</h1>
        <button
          onClick={handleAddRestaurant}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Add Restaurant
        </button>
      </div>
      <CardList restaurants={restaurants} />
    </div>
  );
};
  
export default Restaurants;