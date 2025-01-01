import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import propertiesData from '../Data/properties.json';

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {property.name}
      </h1>
      <p className="text-lg text-gray-600 flex items-center gap-2 mb-6">
        <FaMapMarkerAlt className="text-blue-500" /> {property.location}
      </p>

      <div className="mb-8">
        <img
          src={property.picture}
          alt={property.name}
          className="w-full h-[450px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnail images */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {property.thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-[200px] object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80"
          />
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-center">
          <div>
            <span className="block text-gray-500">Price</span>
            <span className="text-2xl font-bold text-gray-900">
              ${property.price.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="block text-gray-500 flex items-center justify-center gap-1">
              <FaBed /> Bedrooms
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {property.bedrooms}
            </span>
          </div>
          <div>
            <span className="block text-gray-500">Tenure</span>
            <span className="text-2xl font-bold text-gray-900">
              {property.tenure}
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {property.description}
        </p>

        <h2 className="text-2xl font-semibold mb-4">Added On</h2>
        <p className="text-gray-700 leading-relaxed">
          {`${property.added.day} ${property.added.month} ${property.added.year}`}
        </p>
      </div>
    </div>
  );
}
