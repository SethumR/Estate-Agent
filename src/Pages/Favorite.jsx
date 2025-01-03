import React from 'react';
import { MdDelete } from "react-icons/md";

function Favorites({ favorites, toggleFavorite, clearFavorites }) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md -ml-20">
      <h3 className="text-2xl font-semibold text-center mb-4">Your Favorites</h3>
      <div className="space-y-4">
        {favorites.length > 0 ? (
          favorites.map((property) => (
            <div
              key={property.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
              {/* <img
                src={property.prop}
                alt="Floor Plan"
                className="w-full h-[250px] sm:h-[350px] lg:h-[150px] object-cover rounded-lg shadow-md mb-4"
              /> */}
                <h4 className="text-xl font-medium">{property.name}</h4>
                <p className="text-gray-500">{property.location}</p>
              </div>
              <button
                className="text-red-500"
                onClick={() => toggleFavorite(property)}
              >
                <MdDelete className="w-7 h-7" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No favorites yet.</p>
        )}
        {favorites.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={clearFavorites}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
            >
              Clear Favorites
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
