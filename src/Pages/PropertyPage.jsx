import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { FaHouseChimney } from "react-icons/fa6";
import propertiesData from '../Data/properties.json';
import './ProperyPage.css';

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
    setTimeout(() => {
      const foundProperty = propertiesData.properties.find(
        (prop) => prop.id === id
      );
      setProperty(foundProperty);
      setLoading(false);
    }, 1000);
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
    <div className="PropertyPage">
      <h1 className="heading">{property.name}</h1>
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

      {/* Thumbnail images */}
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

      {/* Tabs section */}
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

      <div className="content">
        {/* Content based on selected tab */}
        <div>
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
          {activeTab === 'floorplan' && (
            <>
              <img
                src={property.plan}
                alt="Floor Plan"
                className="image"
              />
            </>
          )}
          {activeTab === 'map' && property.map && (
            <>
              <iframe
                src={property.map}
                width="100%"
                height="450"
                className="map"
                loading="lazy"
              ></iframe>
            </>
          )}
        </div>
      </div>
    </div>

  );
}
