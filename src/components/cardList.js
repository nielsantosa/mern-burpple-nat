import Card from './card';
import Link from 'next/link';

const CardList = ({ restaurants }) => {
    if (!restaurants || restaurants.length === 0) {
        return <div>No restaurants found.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {restaurants.map((restaurant) => (
                <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
                    <Card key={restaurant.id} title={restaurant.name} address={restaurant.address} cuisine={restaurant.cuisine} description={restaurant.description} image={restaurant.image} />
                </Link>
            ))}
        </div>
    );
  };
  
  export default CardList;