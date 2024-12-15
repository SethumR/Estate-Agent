import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

// Mock function to simulate fetching property data
const fetchPropertyData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: 'Luxurious Beachfront Villa',
        location: 'Malibu, California',
        price: 12500000,
        bedrooms: 5,
        bathrooms: 6,
        area: 6500,
        description:
          'This stunning beachfront villa offers breathtaking ocean views and luxurious living spaces. Featuring 5 bedrooms, 6 bathrooms, and a spacious open-plan living area, this property is perfect for those seeking the ultimate coastal lifestyle.',
        images: [
          '/placeholder.svg?height=600&width=800',
          '/placeholder.svg?height=600&width=800',
          '/placeholder.svg?height=600&width=800',
        ],
        features: [
          'Private beach access',
          'Infinity pool',
          'Home theater',
          'Wine cellar',
          'Gourmet kitchen',
          'Multiple terraces',
        ],
      });
    }, 1000);
  });
};

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPropertyData(id).then((data) => {
      setProperty(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 animate-pulse">Loading...</div>;
  }

  if (!property) {
    return <div className="text-center py-20 text-gray-500">Property not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-12 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{property.title}</h1>
      <p className="text-lg text-gray-600 flex items-center gap-2 mb-6">
        <FaMapMarkerAlt className="text-blue-500" /> {property.location}
      </p>

      <div className="mb-8">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {property.images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${property.title} - ${index + 2}`}
            className="w-full h-56 object-cover rounded-lg shadow-sm transition-transform transform hover:scale-105"
          />
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-center">
          <div>
            <span className="block text-gray-500">Price</span>
            <span className="text-2xl font-bold text-gray-900">${property.price.toLocaleString()}</span>
          </div>
          <div>
            <span className="block text-gray-500 flex items-center justify-center gap-1">
              <FaBed /> Bedrooms
            </span>
            <span className="text-2xl font-bold text-gray-900">{property.bedrooms}</span>
          </div>
          <div>
            <span className="block text-gray-500 flex items-center justify-center gap-1">
              <FaBath /> Bathrooms
            </span>
            <span className="text-2xl font-bold text-gray-900">{property.bathrooms}</span>
          </div>
          <div>
            <span className="block text-gray-500 flex items-center justify-center gap-1">
              <FaRulerCombined /> Area
            </span>
            <span className="text-2xl font-bold text-gray-900">{property.area} sqft</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>

        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-4">Interested in this property?</h2>
        <p className="mb-6">
          Contact our team to schedule a viewing or get more information about this luxurious property.
        </p>
        <button className="bg-white text-blue-600 py-3 px-6 rounded-md font-semibold shadow-lg hover:shadow-xl transition duration-300">
          Contact Agent
        </button>
      </div>
    </div>
  );
}
