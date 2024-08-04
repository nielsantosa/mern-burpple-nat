import React from 'react';

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost:3000/api/restaurants/${id}`);
    const restaurant = await res.json();

    const image = 'https://via.placeholder.com/150';
  
    return {
        props: {
            restaurant,
            image,
        },
    };
}

const Restaurants = ({ restaurant, image }) => {  
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <img src = {image} alt = {restaurant.name} />
        <div>{restaurant.description}</div>
      </div>
    );
  };
  
  export default Restaurants;