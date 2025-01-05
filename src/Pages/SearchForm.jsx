import React from 'react';
import './Page.css'; 

// SearchForm component for property search functionality
function SearchForm({ searchParams, handleSearchChange, handleSearchSubmit }) {
  return (
    <form onSubmit={handleSearchSubmit} className="search-form">
      <h2 className="form-title">Search Properties</h2>

      {/* Location input field */}
      {/* <label className="label mb-2 text-sm font-bold" htmlFor="type">
          Property Type
        </label> */}

      {/* Dropdown for property type selection */}
      <select
        name="propertyType"
        className="input-field"
        value={searchParams.propertyType}
        onChange={handleSearchChange} 
      >
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
        <option value="villa">Villa</option>
      </select>

      <input
        type="text"
        name="location"
        placeholder="Postcode (e.g., NW1)"
        className="input-field"
        value={searchParams.location} // The value is bound to  the state
        onChange={handleSearchChange} // Updates location when typed
      />

      {/* Grid layout for price and bedrooms input fields */}
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
          onChange={handleSearchChange} // Updates minBedrooms when typed
        />

        <input
          type="number"
          name="maxBedrooms"
          placeholder="Max Bedrooms"
          className="input-field"
          value={searchParams.maxBedrooms}
          onChange={handleSearchChange} // Updates maxBedrooms when typed
        />
      </div>

      {/* Date input for when the property was added */}
      <input
        type="date"
        name="dateAdded"
        className="input-field"
        value={searchParams.dateAdded}
        onChange={handleSearchChange} 
      />

      {/* Postcode input */}
      <input
        type="text"
        name="postcode"
        placeholder="Postcode (e.g., NW1)"
        className="input-field"
        value={searchParams.postcode}
        onChange={handleSearchChange} 
      />


      {/* Submit button to trigger the search */}
      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
