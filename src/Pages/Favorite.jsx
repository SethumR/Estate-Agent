import React from 'react';
import { MdDelete } from "react-icons/md";
import './Favourite.css';

function Favorites({ favorites, toggleFavorite, clearFavorites, properties }) {
  // Handle the drop event when a property is dropped onto the favorites container
  const handleDrop = (e) => {
    e.preventDefault();
    
    // Get the property ID from the dragged data
    const propertyId = e.dataTransfer.getData("propertyId");
    
    // Find the property object from the properties list based on the ID
    const property = properties.find((prop) => prop.id === propertyId);
    
    // If the property is found, toggle its favorite status
    if (property) {
      toggleFavorite(property);
    }
  };

  return (
    <div
      className="favorites-container"
      onDragOver={(e) => e.preventDefault()} // Allow the drop by preventing the default behavior on drag over
      onDrop={handleDrop} // Call the handleDrop function when the property is dropped
    >
      <h3 className="favorites-title">Your Favorites</h3>
      <div className="space-y-4">
        {/* Check if there are any favorites */}
        {favorites.length > 0 ? (
          // Display each favorite property
          favorites.map((property) => (
            <div key={property.id} className="favorite-item">
              <div className="property-details">
                <h4>{property.name}</h4>
                <p>{property.location}</p>
              </div>
              {/* Delete button to remove the property from favorites */}
              <button
                className="delete-button"
                onClick={() => toggleFavorite(property)} // Toggle the favorite status when clicked
              >
                <MdDelete />
              </button>
            </div>
          ))
        ) : (
          <p className="no-favorites">No favorites yet.</p> 
        )}
        
        {/* Display a button to clear all favorites if there are any */}
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
