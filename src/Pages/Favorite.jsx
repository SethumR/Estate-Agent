import React from 'react';

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md -ml-20">
      <h3 className="text-2xl font-bold text-center mb-4">Your Favorites</h3>
      <div className="space-y-4">
        {favorites.length > 0 ? (
          favorites.map((property) => (
            <div
              key={property.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <h4 className="text-xl font-semibold">{property.name}</h4>
                <p className="text-gray-500">{property.location}</p>
              </div>
              <button
                className="text-red-500"
                onClick={() => toggleFavorite(property)}
              >
                ♥
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No favorites yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
