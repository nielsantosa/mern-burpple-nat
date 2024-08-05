import React from 'react';
import CuisineTag from './cuisineTag';

const Card = ({ title, address, cuisine, description, image }) => {
    const handleImageError = (e) => {
        console.error('Error loading image:', e);
    };

    return (
      <div className="border rounded-lg shadow-md overflow-hidden my-4">
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" onError={handleImageError}/>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{address}</p>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4">
                <CuisineTag cuisine={cuisine} />
            </div>
        </div>
      </div>
    );
  };
  
  export default Card;