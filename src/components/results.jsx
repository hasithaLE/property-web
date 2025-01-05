import { useNavigate } from "react-router-dom";
import "./results.css";

function Results({ properties, handleAddToFavorites, favorites = [], navigate }) {
  const isFavorite = (property) => {
    return favorites.some((fav) => fav.id === property.id);
  };

  const handleViewMore = (id) => {
    navigate(`/property/${id}`); // Navigate to Property page with property id
  };

  return (
    <div className="results-container">
      {properties.map((property) => (
        <div
          key={property.id}
          className="property-card"
          draggable
          onDragStart={(e) =>
            e.dataTransfer.setData("property", JSON.stringify(property))
          } // Handle drag start
        >
          {/* Property Image */}
          <div className="property-image">
            <img src={property.images[0]} alt={property.shortDescription} />
          </div>

          {/* Property Details */}
          <div className="property-details">
            <h2 className="property-title">{property.shortDescription}</h2>
            <p className="property-location">{property.location}</p>
            <div className="property-features">
              <span>
                <i className="fas fa-bed"></i> {property.bedrooms} Bedrooms
              </span>
              <span>
                <i className="fas fa-bath"></i> {property.bathrooms} Bathrooms
              </span>
              <span>
                <i className="fas fa-home"></i> {property.type}
              </span>
            </div>
            <p className="property-price">£{property.price} pcm</p>

            {/* Actions */}
            <div className="property-actions">
              <button
                className="view-more-btn"
                onClick={() => handleViewMore(property.id)}
              >
                View More
              </button>
              <i
                className={`fa-solid fa-heart ${
                  isFavorite(property) ? "liked" : ""
                }`}
                onClick={() => handleAddToFavorites(property)}
                style={{ cursor: "pointer", color: isFavorite(property) ? "red" : "gray" }}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
