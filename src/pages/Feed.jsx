import { useNavigate } from "react-router-dom";
import "./feed.css";
import SearchForm from "../components/search";
import properties from "../properties.json";
import Results from "../components/results";
import { useState, useEffect } from "react";
import Favorites from "../components/favorites"; // Import Favorites component

function Feed() {
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a property to favorites
  const handleAddToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites((prev) => [...prev, property]);
    }
  };

  // Remove a property from favorites
  const handleRemoveFromFavorites = (property) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== property.id));
  };

  // Handle search functionality
  const handleSearch = (criteria) => {
    const filtered = properties.filter((property) => {
      return (
        (criteria.type === "" || property.type === criteria.type) &&
        (criteria.minPrice === "" ||
          property.price >= parseInt(criteria.minPrice)) &&
        (criteria.maxPrice === "" ||
          property.price <= parseInt(criteria.maxPrice)) &&
        (criteria.minBedrooms === "" ||
          property.bedrooms >= parseInt(criteria.minBedrooms)) &&
        (criteria.maxBedrooms === "" ||
          property.bedrooms <= parseInt(criteria.maxBedrooms)) &&
        (criteria.dateAdded === "" ||
          new Date(property.dateAdded) >= new Date(criteria.dateAdded)) &&
        (criteria.postcode === "" ||
          property.postcode.startsWith(criteria.postcode))
      );
    });
    setResults(filtered);
  };

  return (
    <div className="feed-container">
      <SearchForm onSearch={handleSearch} />
      <div className="main-content">
        <Results
          properties={results}
          handleAddToFavorites={handleAddToFavorites}
          favorites={favorites}
          navigate={navigate}
        />
        <Favorites
          favorites={favorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
          onDrop={(property) => handleAddToFavorites(property)} // Handle drop event
        />
      </div>
    </div>
  );
}

export default Feed;
