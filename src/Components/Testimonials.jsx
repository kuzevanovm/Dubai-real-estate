import React from 'react';

const Testimonial = ({ image, name, role, quote }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p><strong>{name}</strong><br />{role}</p>
        <blockquote>{quote}</blockquote>
      </div>
      <img src={image} alt={name} className="testimonial-image" />
    </div>
  );
};

export default Testimonial;


