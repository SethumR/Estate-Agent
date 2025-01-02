import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propertiesData from '../Data/properties.json';
import SearchForm from './SearchForm';
import Favorites from './Favorite';
import { FaHome, FaBuilding, FaBriefcase, FaHotel } from 'react-icons/fa';

const propertyTypes = [
  {
    icon: FaHome,
    title: "Family House",
    description: "Spacious homes for family living.",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: FaBuilding,
    title: "House & Villa",
    description: "Luxury houses and villas available.",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: FaBuilding,
    title: "Apartment",
    description: "Modern apartments for city living.",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    icon: FaBriefcase,
    title: "Flat",
    description: "Compact flats for efficient living.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: FaHotel,
    title: "Villa & Condo",
    description: "Stylish villas and condos available.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

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
  const [filteredResults, setFilteredResults] = useState(propertiesData.properties);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const {
      location,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      dateAdded,
      postcode,
      propertyType
    } = searchParams;

    const results = propertiesData.properties.filter((property) => {
      return (
        (!location || property.location.toLowerCase().includes(location.toLowerCase())) &&
        (!minPrice || property.price >= parseInt(minPrice)) &&
        (!maxPrice || property.price <= parseInt(maxPrice)) &&
        (!minBedrooms || property.bedrooms >= parseInt(minBedrooms)) &&
        (!maxBedrooms || property.bedrooms <= parseInt(maxBedrooms)) &&
        (!dateAdded || new Date(property.dateAdded) >= new Date(dateAdded)) &&
        (!postcode || property.postcode.toLowerCase().includes(postcode.toLowerCase())) &&
        (!propertyType || propertyType === 'any' || property.type.toLowerCase() === propertyType.toLowerCase())
      );
    });

    setFilteredResults(results);
    console.log('Search Results:', results);
  };

  const toggleFavorite = (property) => {
    const isFavorite = favorites.find((fav) => fav.id === property.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== property.id));
    } else {
      setFavorites([...favorites, property]);
    }
  };

  const scrollToFeaturedProperties = () => {
    const featuredPropertiesSection = document.getElementById('featured-properties');
    if (featuredPropertiesSection) {
      window.scrollTo({
        top: featuredPropertiesSection.offsetTop - 100,  
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 md:py-24 mb-12 mt-16 -sm:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold">
              <span className="text-blue-600">Rent</span> Your Dream
              <br />
               House With Us.
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              Find your ideal home with us. From cozy houses to luxurious villas, we offer a range of rental options to suit your needs and budget.
            </p>
            <div className="pt-4 ">
              <button
                onClick={scrollToFeaturedProperties}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg--blue-700 transition-colors mb-8"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="w-[340px] max-w-[702px] h-[300px] sm:w-[702px] sm:h-[570px]">
            <img
              src="Backgroung.png"
              alt="Modern dream house"
              className="w-full h-full object-cover rounded-tl-[100px] rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Featured Property Types Section */}
      <section className="bg-gray-50 py-12 sm:mb-24 rounded-xl">
        <h2 className="text-3xl font-extrabold text-center mb-6 sm:text-4xl">
          Featured Property Types
        </h2>
        <p className='text-center mb-8 text-lg sm:text-xl'>
          Explore our featured property types, offering great variety and options for every need.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[76rem] mx-auto">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className={`${type.bgColor} p-4 rounded-full mb-4`}>
                <type.icon className={`w-6 h-6 ${type.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="lg:flex flex-row mb-12 sm:mb-20">
        <aside className="lg:w-1/4 bg-gray-100 p-4 sm:ml-4 ml-20 md:mb-20 sm:mb-12 mb-20">
          <SearchForm
            searchParams={searchParams}
            handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
          />
          <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
        </aside>

        <main className="lg:w-3/4 p-6">
          <section id="featured-properties">
            <h2 className="text-3xl font-extrabold text-center mb-6 sm:text-4xl">
              Featured Properties
            </h2>
            <p className='text-center mb-8 text-lg sm:text-xl'>
              Explore our featured properties, offering great value, prime locations, and options for every need.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {filteredResults.length > 0 ? (
                filteredResults.map((property) => (
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
                          className={`text-2xl p-3 rounded-full ${
                            favorites.find((fav) => fav.id === property.id)
                              ? 'text-red-500 border-2 border-red-500'
                              : 'text-gray-400 border-2 border-gray-400'
                          } w-10 h-10 flex items-center justify-center`}
                          onClick={() => toggleFavorite(property)}>
                          ♥
                        </button>

                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No properties match your search criteria.</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
