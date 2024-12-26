import React from "react";
import "../App.css";

function PropertyCard({ image, title, description, linkText }) {
    return (
        <div className="property-card">
            <img src={image} alt={title} className="property-card-image" />
            <div className="property-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="/" className="property-card-link">
                    {linkText}
                </a>
            </div>
        </div>
    );
}

export default PropertyCard;
