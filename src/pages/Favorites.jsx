import React, { useState, useEffect } from "react";
import "./favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorite properties from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Handle removing a property from favorites
  const handleRemoveFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(property => property.id !== id);
    setFavorites(updatedFavorites);

    // Update localStorage with the new favorites list
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h2>Your Favorite Properties</h2>
      {favorites.length > 0 ? (
        <table className="favorites-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Location</th>
              <th>Price</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((property) => (
              <tr key={property.id}>
                <td><img src={property.images[0]} alt={property.shortDescription} className="property-image-small" /></td>
                <td>{property.shortDescription}</td>
                <td>{property.location}</td>
                <td>£{property.price} pcm</td>
                <td>{property.bedrooms}</td>
                <td>{property.bathrooms}</td>
                <td>{property.type}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveFromFavorites(property.id)}
                  >
                    Remove from Favorites
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}

export default Favorites;
