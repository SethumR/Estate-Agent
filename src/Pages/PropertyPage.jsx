import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { FaHouseChimney } from "react-icons/fa6";
import propertiesData from '../Data/properties.json';
import './ProperyPage.css';

export default function PropertyPage() {
  // Extract the property ID from the URL params
  const { id } = useParams();
  
  // State hooks to manage property data, loading state, and active tab
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  
  // Tabs for displaying property details (Description, Floor Plan, Map)
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'floorplan', label: 'Floor Plan' },
    { id: 'map', label: 'Map' },
  ];

  // Fetch property data when component mounts or when the property ID changes
  useEffect(() => {
    setTimeout(() => {
      const foundProperty = propertiesData.properties.find(
        (prop) => prop.id === id
      );
      setProperty(foundProperty);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, [id]);

  // Loading state view
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-dotted rounded-full"></div>
        <p className="mt-4 text-gray-500">Loading property details...</p>
      </div>
    );
  }

  // If property not found
  if (!property) {
    return (
      <div className="text-center py-20 text-gray-500">
        Property not found
      </div>
    );
  }

  return (
    <div className="PropertyPage">
      <h1 className="heading">{property.name}</h1>
      
      {/* Location and main property image */}
      <p className="location">
        <FaMapMarkerAlt className="icon" /> {property.location}
      </p>

      <div className="main-image">
        <img
          src={property.prop}
          alt={property.name}
          className="image"
        />
      </div>

      {/* Thumbnail images of the property */}
      <div className="thumbnails">
        {property.thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
          />
        ))}
      </div>

      {/* Tabs for Description, Floor Plan, and Map */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content based on the selected tab */}
      <div className="content">
        {activeTab === 'description' && (
          <>
            <div className="info">
              <div className="info-item">
                <span className="info-title">Price</span>
                <span className="info-value">${property.price.toLocaleString()}</span>
              </div>
              <div className="info-item">
                <span className="info-title">
                  <FaHouseChimney /> Type
                </span>
                <span className="info-value">{property.type}</span>
              </div>
              <div className="info-item">
                <span className="info-title">
                  <FaBed /> Bedrooms
                </span>
                <span className="info-value">{property.bedrooms}</span>
              </div>
              <div className="info-item">
                <span className="info-title">Tenure</span>
                <span className="info-value">{property.tenure}</span>
              </div>
            </div>

            <h2 className="sub-heading">Description</h2>
            <p className="description">{property.description}</p>

            <h2 className="sub-heading">Added On</h2>
            <p className="added-date">{`${property.added.day} ${property.added.month} ${property.added.year}`}</p>
          </>
        )}

        {/* Display Floor Plan if selected */}
        {activeTab === 'floorplan' && (
          <img
            src={property.plan}
            alt="Floor Plan"
            className="image"
          />
        )}

        {/* Display Map if selected */}
        {activeTab === 'map' && property.map && (
          <iframe
            src={property.map}
            width="100%"
            height="450"
            className="map"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
}
