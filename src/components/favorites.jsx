import React from "react";
import "./favorites.css";

function Favorites({ favorites, handleRemoveFromFavorites, onDrop }) {
  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault(); // Allow dropping
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    const property = JSON.parse(e.dataTransfer.getData("property"));
    onDrop(property); // Call the parent's onDrop handler
  };

  return (
    <div
      className="favorites-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop} // Handle dropping into favorites
    >
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet <br/> Drag and Drop here</p>
      ) : (
        <ul>
          {favorites.map((property) => (
            <li
              key={property.id}
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("property", JSON.stringify(property))
              } // Handle drag start
              onDragEnd={() => handleRemoveFromFavorites(property)} // Handle drag out
            >
              <img src={property.images[0]} alt={property.shortDescription} className="fav-property-image" /><br/>  
              {property.shortDescription}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
