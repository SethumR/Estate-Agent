import { useState } from 'react';
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
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    id: 'prop2',
    title: 'Modern City Penthouse',
    location: 'New York City, New York',
    price: 8750000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 4200,
    image: '/placeholder.svg?height=300&width=400'
  },
  {
    id: 'prop3',
    title: 'Charming Countryside Estate',
    location: 'Cotswolds, England',
    price: 5900000,
    bedrooms: 7,
    bathrooms: 5,
    area: 8000,
    image: '/placeholder.svg?height=300&width=400'
  }
];

export default function HomePage() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: ''
  });

  const handleSearchChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Find Your Dream Luxury Property
          </h1>
          <p className="text-xl mb-10 font-light">
            Discover exquisite homes in the world's most desirable locations
          </p>
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-wrap gap-4"
          >
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.location}
              onChange={handleSearchChange}
            />
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.minPrice}
              onChange={handleSearchChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.maxPrice}
              onChange={handleSearchChange}
            />
            <select
              name="propertyType"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchParams.propertyType}
              onChange={handleSearchChange}
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="estate">Estate</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all flex-shrink-0"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12">
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
                    <div>
                      <span>{property.bedrooms} beds</span> •{' '}
                      <span>{property.bathrooms} baths</span> •{' '}
                      <span>{property.area} sqft</span>
                    </div>
                  </div>
                  <Link
                    to={`/property/${property.id}`}
                    className="block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            Why Choose LuxuryEstates?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Extensive Property Selection',
                description: 'Access to an unparalleled portfolio of luxury properties worldwide.',
                icon: 'search'
              },
              {
                title: 'Personalized Service',
                description: 'Dedicated agents providing tailored assistance throughout your journey.',
                icon: 'support'
              },
              {
                title: 'Trusted Expertise',
                description: 'Years of experience in the luxury real estate market, ensuring your satisfaction.',
                icon: 'shield'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 text-blue-500">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        feature.icon === 'search'
                          ? 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          : feature.icon === 'support'
                          ? 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                          : 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      }
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
