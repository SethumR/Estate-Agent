import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const featuredProperties = [
  {
    id: 'prop1',
    title: 'Luxurious Beachfront Villa',
    location: 'Malibu, California',
    price: 12500000,
    bedrooms: 5,
    bathrooms: 6,
    area: 6500,
    image: 'Bg.png'
  },
  {
    id: 'prop2',
    title: 'Modern City Penthouse',
    location: 'New York City, New York',
    price: 8750000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 4200,
    image: 'p2.png'
  },
  {
    id: 'prop3',
    title: 'Charming Countryside Estate',
    location: 'Cotswolds, England',
    price: 5900000,
    bedrooms: 7,
    bathrooms: 5,
    area: 8000,
    image: 'p3.png'
  },
  {
    id: 'prop1',
    title: 'Luxurious Beachfront Villa',
    location: 'Malibu, California',
    price: 12500000,
    bedrooms: 5,
    bathrooms: 6,
    area: 6500,
    image: 'Bg.png'
  },
  {
    id: 'prop2',
    title: 'Modern City Penthouse',
    location: 'New York City, New York',
    price: 8750000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 4200,
    image: 'p2.png'
  },
  {
    id: 'prop3',
    title: 'Charming Countryside Estate',
    location: 'Cotswolds, England',
    price: 5900000,
    bedrooms: 7,
    bathrooms: 5,
    area: 8000,
    image: 'p3.png'
  },
  {
    id: 'prop3',
    title: 'Charming Countryside Estate',
    location: 'Cotswolds, England',
    price: 5900000,
    bedrooms: 7,
    bathrooms: 5,
    area: 8000,
    image: 'p3.png'
  }
];

function HomePage() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (property) => {
    const isFavorite = favorites.find((fav) => fav.id === property.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== property.id));
    } else {
      setFavorites([...favorites, property]);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Image Section */}
      {/* Featured Properties Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-20">
              Featured Properties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover p-3 rounded-3xl"
                  />
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-semibold mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-500 mb-4">{property.location}</p>
                    <div className="flex justify-between items-center mb-4 text-gray-600">
                      <span className="text-xl font-bold text-blue-600">
                        ${property.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/property/${property.id}`}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all w-40 text-center">
                        View Details
                      </Link>
       
                      <button
                        className={`text-2xl ${
                          favorites.find((fav) => fav.id === property.id)
                            ? 'text-red-500'
                            : 'text-gray-400'
                        }`}
                        onClick={() => toggleFavorite(property)}>
                        ♥
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      {/* Favorites Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-8">
            Your Favorites
          </h2>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-500 mb-4">{property.location}</p>
                    <div className="flex justify-between items-center mb-4 text-gray-600">
                      <span className="text-xl font-bold text-blue-600">
                        ${property.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              You have not added any favorites yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
