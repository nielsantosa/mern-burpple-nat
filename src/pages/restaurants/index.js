import React from 'react';
import CardList from '../../components/cardList';

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/restaurants');
    const restaurants = await res.json();

    const defaultImagePath = '/images/default-image.jpg';
    restaurants.forEach((restaurant) => {
        if (!restaurant.image) {
        restaurant.image = `http://localhost:3000${defaultImagePath}`;
        }
    });
  
    return {
        props: {
            restaurants,
        },
    };
}

const Restaurants = ({ restaurants }) => {
    return (
      <div>
        <h1>Browse all Restaurants</h1>
        <CardList restaurants={restaurants} />
      </div>
    );
  };
  
  export default Restaurants;