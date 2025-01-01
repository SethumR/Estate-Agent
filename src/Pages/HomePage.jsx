// HomePage Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propertiesData from '../Data/properties.json';

function HomePage() {
  const [favorites, setFavorites] = useState([]);
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAdded: '',
    postcode: '',
    propertyType: ''
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Search Params:', searchParams);
  };

  const toggleFavorite = (property) => {
    const isFavorite = favorites.find((fav) => fav.id === property.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== property.id));
    } else {
      setFavorites([...favorites, property]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <aside className="lg:w-1/4 bg-gray-100 p-6">
        {/* Search Form */}
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4 mt-[120px] -ml-20"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Search Properties</h2>

          {/* Location Input */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchParams.location}
            onChange={handleSearchChange}
          />

          {/* Price and Bedrooms Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.minPrice}
              onChange={handleSearchChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.maxPrice}
              onChange={handleSearchChange}
            />
            <input
              type="number"
              name="minBedrooms"
              placeholder="Min Bedrooms"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.minBedrooms}
              onChange={handleSearchChange}
            />
            <input
              type="number"
              name="maxBedrooms"
              placeholder="Max Bedrooms"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.maxBedrooms}
              onChange={handleSearchChange}
            />
          </div>

          {/* Additional Inputs */}
          <input
            type="date"
            name="dateAdded"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchParams.dateAdded}
            onChange={handleSearchChange}
          />

          <input
            type="text"
            name="postcode"
            placeholder="Postcode (e.g., NW1)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchParams.postcode}
            onChange={handleSearchChange}
          />

          <select
            name="propertyType"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchParams.propertyType}
            onChange={handleSearchChange}
          >
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
            <option value="any">Any</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Search
          </button>
        </form>

        {/* Favorites Section */}
        <div className="mt-20 -ml-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Your Favorites</h2>
            {favorites.length > 0 ? (
              <ul className="space-y-4">
                {favorites.map((property) => (
                  <li
                    key={property.id}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
                  >
                    <span className="text-lg font-semibold">{property.name}</span>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => toggleFavorite(property)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">No favorites yet.</p>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 p-6">
        <section className="py-8">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Featured Properties
          </h2>
          {/* Adjust the grid to have two items per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
            {propertiesData.properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={property.picture}
                  alt={property.type}
                  className="w-full h-64 object-cover p-3 rounded-3xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-500 mb-4">{property.location}</p>
                  <div className="flex justify-between items-center mb-4 text-gray-600">
                    <span className="text-xl font-bold text-blue-600">
                      ${property.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/property/${property.id}`}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all w-40 text-center"
                    >
                      View Details
                    </Link>

                    <button
                      className={`text-2xl ${
                        favorites.find((fav) => fav.id === property.id)
                          ? 'text-red-500'
                          : 'text-gray-400'
                      }`}
                      onClick={() => toggleFavorite(property)}
                    >
                      ♥
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
