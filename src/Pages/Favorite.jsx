import React from 'react';
import { MdDelete } from "react-icons/md";
import './Favourite.css';

function Favorites({ favorites, toggleFavorite, clearFavorites, properties }) {
  // Handle the drop event when a property is dropped
  const handleDrop = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("propertyId");

    // Find the property from the dragged ID
    const property = properties.find((prop) => prop.id === propertyId);
    
    if (property) {
      // If property is found, toggle its favorite status
      toggleFavorite(property);
    }
  };

  return (
    <div
      className="favorites-container"
      onDragOver={(e) => e.preventDefault()}  // This allows the drop event to happen
      onDrop={handleDrop}  // Handle drop event
    >
      <h3 className="favorites-title">Your Favorites</h3>
      <div className="space-y-4">
        {favorites.length > 0 ? (
          favorites.map((property) => (
            <div key={property.id} className="favorite-item">
              <div className="property-details">
                <h4>{property.name}</h4>
                <p>{property.location}</p>
              </div>
              <button
                className="delete-button"
                onClick={() => toggleFavorite(property)}
              >
                <MdDelete />
              </button>
            </div>
          ))
        ) : (
          <p className="no-favorites">No favorites yet.</p>
        )}
        {favorites.length > 0 && (
          <div className="flex justify-center mt-4">
            <button onClick={clearFavorites} className="clear-favorites-btn">
              Clear Favorites
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
