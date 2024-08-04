import React from 'react';

const Card = ({ title, description, image }) => {
    const handleImageError = (e) => {
        console.error('Error loading image:', e);
    };

    return (
      <div className="border rounded-lg shadow-md overflow-hidden my-4">
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-50 h-full object-cover" onError={handleImageError}/>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;