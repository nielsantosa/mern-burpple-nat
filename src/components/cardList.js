import Card from './card';

const CardList = ({ restaurants }) => {
    if (!restaurants || restaurants.length === 0) {
        return <div>No restaurants found.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {restaurants.map((restaurant) => (
                <Card title={restaurant.name} description={restaurant.description} image={restaurant.image} />
            ))}
        </div>
    );
  };
  
  export default CardList;