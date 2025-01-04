import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propertiesData from '../Data/properties.json';
import SearchForm from './SearchForm';
import Favorites from './Favorite';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
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

  const clearFavorites = () => {
    setFavorites([]);
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
    <div className="min-vh-100 d-flex flex-column">
    <div className="container py-5 my-5">
      <div className="row align-items-center mt-20 mb-10">
        <div className="col-12 col-md-6 ">
          <div className="mb-4">
            <h1 className="display-4 fw-bold mb-6">
              <span className="text-primary ">Rent</span> Your Dream
              <br /> House With Us.
            </h1>
            <p className="text-muted max-w-lg mb-4 hp">
              Find your ideal home with us. From cozy houses to luxurious villas, we offer a range of rental options to suit your needs and budget.
            </p>
            <div className="">
              <button
                onClick={scrollToFeaturedProperties}
                className="btn btn-primary rounded-3 hb"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="">
            <img
              src="Backgroung.png"
              alt="Modern dream house"
              className="custom-img-container"
            />
          </div>
        </div>
      </div>
    </div>

    <section className="bg-light py-5 rounded-4  fsection">
      <div className="container">
        <h2 className="fs-2 fw-bold text-center mb-4">Featured Property Types</h2>
        <p className="text-center mb-10  typep">
          Explore our featured property types, offering great variety and options for every need.
        </p>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
          {propertyTypes.map((type, index) => (
            <div key={index} className="col">
              <div className="card h-56 border-0 shadow-sm rounded-2xl">
                <div className="card-body text-center">
                  <div className={`${type.bgColor} p-4 rounded-circle d-inline-flex mb-4`}>
                    <type.icon className={`${type.iconColor}`} size={24} />
                  </div>
                  <h3 className="card-title h6 mb-2 fw-bold">{type.title}</h3>
                  <p className="card-text text-muted fs-7">{type.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div className="d-lg-flex mb-8">
      <aside className="col-lg-3 p-4 ms-lg-4 ms-20 mb-20 mb-md-5 mb-sm-3">
        <div className=''>
          <SearchForm
            searchParams={searchParams}
            handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
          />
          <Favorites
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            clearFavorites={clearFavorites}
          />
        </div>
      </aside>


      <main className="col-lg-9 p-4">
        <section id="featured-properties">
           <h2 className="text-center mb-4 mb-sm-4 fw-bold fp">
            Featured Properties
          </h2>
          <p className="text-center mb-5 fpp">
            Explore our featured properties, offering great value, prime locations, and options for every need.
          </p>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 g-4 boxp">
            {filteredResults.length > 0 ? (
              filteredResults.map((property) => (
                <div
                  key={property.id}
                  className="col" >
                  <div className="bg-white rounded-4 shadow-sm overflow-hidden hover-shadow-lg">
                    <img
                      src={property.picture}
                      alt={property.type}
                      className="img-fluid p-3 rounded-3xl" 
                      style={{ width: '100%', height: '17rem', objectFit: 'cover' }}
                    />
                    <div className="p-4">
                      <h3 className="fs-4 fw-semibold mb-2">{property.name}</h3>
                      <p className="text-muted mb-3">{property.location}</p>
                      <div className="d-flex justify-content-between align-items-center mb-3 text-muted">
                        <span className="fs-5 fw-bold text-primary">
                          ${property.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={`/property/${property.id}`}
                          className="btn btn-primary py-2 px-4 rounded-2 w-40 text-center"
                        >
                          View Details
                        </Link>

                        <button
                          className={`btn btn-outline-${favorites.find((fav) => fav.id === property.id) ? 'danger' : 'secondary'} rounded-circle w-9 h-9 d-flex justify-content-center align-items-center`}
                          onClick={() => toggleFavorite(property)}
                        >
                          ♥
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No properties match your search criteria.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  </div>

  
  );
}

export default HomePage;