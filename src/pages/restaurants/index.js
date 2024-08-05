import React, { useState } from 'react';
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

const Restaurants = ({ restaurants: initialRestaurants }) => {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [sortDirection, setSortDirection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddRestaurant = () => {
    router.push('/restaurants/create');
  };

  const handleSort = () => {
    const sortedRestaurants = [...restaurants].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return sortDirection === 'asc' ? -1 : 1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setRestaurants(sortedRestaurants);
  };

  const handleSearch = () => {
    const filteredRestaurants = initialRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRestaurants(filteredRestaurants);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1>My Restaurant Collections</h1>
        <div className="mr-2 flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name"
              className="bg-gray-200 rounded-lg px-4 py-2 w-full mx-2"
            />
            <button
              onClick={handleSearch}
              className="bg-zinc-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Search
            </button>
          </div>
        <button
            onClick={handleSort}
            className="bg-zinc-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mr-2"
          >
            Sort by Name {sortDirection === 'asc' ? '▲' : '▼'}
        </button>
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