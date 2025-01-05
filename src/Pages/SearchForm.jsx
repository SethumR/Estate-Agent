import React from 'react';
import './Page.css'; 

function SearchForm({ searchParams, handleSearchChange, handleSearchSubmit, handleClear }) {
  
  // Resetting the searchParams state on clear button click
  const handleClearClick = () => {
    // Reset search parameters to initial empty values
    handleClear({
      propertyType: "",
      location: "",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      maxBedrooms: "",
      dateAfter: "",
      dateBefore: ""
    });
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-form">
      <h2 className="form-title">Search Properties</h2>

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

      {/* Location input field */}
      <input
        type="text"
        name="location"
        placeholder="Postcode (e.g., NW1)"
        className="input-field"
        value={searchParams.location}
        onChange={handleSearchChange}
      />

      {/* Grid layout for price and bedrooms input fields */}
      <div className="input-grid">
        {/* Min Price input */}
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="input-field"
          value={searchParams.minPrice}
          onChange={handleSearchChange} 
        />

        {/* Max Price input */}
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="input-field"
          value={searchParams.maxPrice}
          onChange={handleSearchChange} 
        />

        {/* Min Bedrooms input */}
        <input
          type="number"
          name="minBedrooms"
          placeholder="Min Bedrooms"
          className="input-field"
          value={searchParams.minBedrooms}
          onChange={handleSearchChange} 
        />

        {/* Max Bedrooms input */}
        <input
          type="number"
          name="maxBedrooms"
          placeholder="Max Bedrooms"
          className="input-field"
          value={searchParams.maxBedrooms}
          onChange={handleSearchChange} 
        />
      </div>

      {/* Date input for when the property was added */}
      <input
        type="date"
        name="dateAfter"
        className="input-field"
        value={searchParams.dateAfter}
        onChange={handleSearchChange} 
      />

      <input
        type="date"
        name="dateBefore"
        className="input-field"
        value={searchParams.dateBefore}
        onChange={handleSearchChange} 
      />

      {/* Submit button to trigger the search */}
      <button type="submit" className="submit-button">
        Search
      </button>

      {/* Clear button to reset the form */}
      <button type="button" className="clear-button" onClick={handleClearClick}>
        Clear
      </button>
    </form>
  );
}

export default SearchForm;
