import React from 'react';
import './Page.css'; 

function SearchForm({ searchParams, handleSearchChange, handleSearchSubmit }) {
  return (
    <form onSubmit={handleSearchSubmit} className="search-form">
      <h2 className="form-title">Search Properties</h2>

      <input
        type="text"
        name="location"
        placeholder="Postcode (e.g., NW1)"
        className="input-field"
        value={searchParams.location}
        onChange={handleSearchChange}
      />

      <div className="input-grid">
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="input-field"
          value={searchParams.minPrice}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="input-field"
          value={searchParams.maxPrice}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="minBedrooms"
          placeholder="Min Bedrooms"
          className="input-field"
          value={searchParams.minBedrooms}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="maxBedrooms"
          placeholder="Max Bedrooms"
          className="input-field"
          value={searchParams.maxBedrooms}
          onChange={handleSearchChange}
        />
      </div>

      <input
        type="date"
        name="dateAdded"
        className="input-field"
        value={searchParams.dateAdded}
        onChange={handleSearchChange}
      />

      <input
        type="text"
        name="postcode"
        placeholder="Postcode (e.g., NW1)"
        className="input-field"
        value={searchParams.postcode}
        onChange={handleSearchChange}
      />

      <select
        name="propertyType"
        className="input-field"
        value={searchParams.propertyType}
        onChange={handleSearchChange}
      >
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
        <option value="any">Any</option>
      </select>

      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
