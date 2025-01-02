import React from 'react';

function SearchForm({ searchParams, handleSearchChange, handleSearchSubmit }) {
  return (
    <form
      onSubmit={handleSearchSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 mt-[120px] -ml-20"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Search Properties</h2>

      <input
        type="text"
        name="location"
        placeholder="Location"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={searchParams.location}
        onChange={handleSearchChange}
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={searchParams.minPrice}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={searchParams.maxPrice}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="minBedrooms"
          placeholder="Min Bedrooms"
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={searchParams.minBedrooms}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="maxBedrooms"
          placeholder="Max Bedrooms"
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={searchParams.maxBedrooms}
          onChange={handleSearchChange}
        />
      </div>

      <input
        type="date"
        name="dateAdded"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={searchParams.dateAdded}
        onChange={handleSearchChange}
      />

      <input
        type="text"
        name="postcode"
        placeholder="Postcode (e.g., NW1)"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={searchParams.postcode}
        onChange={handleSearchChange}
      />

      <select
        name="propertyType"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={searchParams.propertyType}
        onChange={handleSearchChange}
      >
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
        <option value="any">Any</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
