import React from 'react';

const CuisineTag = ({ cuisine }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      {cuisine}
    </span>
  );
};

export default CuisineTag;