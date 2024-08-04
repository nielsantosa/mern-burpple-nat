import React from 'react';
import CardList from '../../components/cardList';

export async function getServerSideProps() {
    const userId = 1; // TODO : By default treat user_id is 1
    const res = await fetch(`http://localhost:3000/api/collections/restaurants?user_id=${userId}`);
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

const Collections = ({ restaurants, image }) => {  
    return (
      <div>
        <h1>Your collection of Restaurants</h1>
        <CardList restaurants={restaurants} />
      </div>
    );
  };
  
  export default Collections;