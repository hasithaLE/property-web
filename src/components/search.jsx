import { useState } from "react";
import "./search.css"; 

function Search({ onSearch }) {
  const [search, setSearch] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAdded: "",
    postcode: "",
  });

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Type:
          <select name="type" value={search.type} onChange={handleChange}>
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>
        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={search.minPrice}
            onChange={handleChange}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={search.maxPrice}
            onChange={handleChange}
          />
        </label>
        <label>
          Min Bedrooms:
          <input
            type="number"
            name="minBedrooms"
            value={search.minBedrooms}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Max Bedrooms:
          <input
            type="number"
            name="maxBedrooms"
            value={search.maxBedrooms}
            onChange={handleChange}
          />
        </label>
        <label>
          Date Added:
          <input
            type="date"
            name="dateAdded"
            value={search.dateAdded}
            onChange={handleChange}
          />
        </label>
        <label>
          Postcode:
          <input
            type="text"
            name="postcode"
            value={search.postcode}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;