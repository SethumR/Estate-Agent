import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { FaHouseChimney } from "react-icons/fa6";
import propertiesData from '../Data/properties.json';

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'floorplan', label: 'Floor Plan' },
    { id: 'map', label: 'Map' },
  ];

  useEffect(() => {
    // Simulating loading behavior
    setTimeout(() => {
      const foundProperty = propertiesData.properties.find(
        (prop) => prop.id === id
      );
      setProperty(foundProperty);
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-dotted rounded-full"></div>
        <p className="mt-4 text-gray-500">Loading property details...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center py-20 text-gray-500">
        Property not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
        {property.name}
      </h1>
      <p className="text-base sm:text-lg text-gray-600 flex items-center gap-2 mb-6">
        <FaMapMarkerAlt className="text-blue-500" /> {property.location}
      </p>

      <div className="mb-8">
        <img
          src={property.prop}
          alt={property.name}
          className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnail images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
        {property.thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-[120px] sm:h-[140px] lg:h-[160px] object-cover rounded-lg shadow-sm cursor-pointer transform transition-transform hover:scale-105 duration-700 ease-out-in"
          />
        ))}
      </div>


      {/* Tabs section */}
      <div className="w-full h-14 bg-[#E8E9F3] rounded-2xl p-1.5 mb-6">
        <div className="grid grid-cols-3 gap-2 h-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                h-full rounded-xl text-sm sm:text-base font-medium
                ${activeTab === tab.id 
                  ? 'bg-white shadow-none text-black' 
                  : 'text-[#3B5BDB] hover:bg-white/50'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        {/* Content based on selected tab */}
        <div>
          {activeTab === 'description' && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-center">
                <div>
                  <span className="block text-gray-900 font-bold">Price</span>
                  <span className="text-lg text-[#3B5BDB]">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-800 flex items-center justify-center gap-1 font-bold">
                    <FaHouseChimney /> Type
                  </span>
                  <span className="text-lg text-gray-900">
                    {property.type}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-800 flex items-center justify-center gap-1 font-bold">
                    <FaBed /> Bedrooms
                  </span>
                  <span className="text-lg text-gray-900">
                    {property.bedrooms}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-800 font-bold">Tenure</span>
                  <span className="text-lg text-gray-900">
                    {property.tenure}
                  </span>
                </div>
              </div>
            
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-10">
                {property.description}
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold mb-1">Added On</h2>
              <p className="text-gray-700 leading-relaxed">
                {`${property.added.day} ${property.added.month} ${property.added.year}`}
              </p>
            </>
          )}
          {activeTab === 'floorplan' && (
            <>
              <img
                src={property.plan}
                alt="Floor Plan"
                className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-md"
              />
            </>
          )}
          {activeTab === 'map' && (
            <>
              <div className="h-[250px] sm:h-[350px] lg:h-[450px] bg-gray-200 rounded-lg">
                {/* You can integrate a map service like Google Maps or OpenStreetMap here */}
                Map content for {property.location}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
