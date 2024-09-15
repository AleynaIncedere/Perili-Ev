import React from 'react';

function HouseCard({ image, price, location, details, index, total }) {
  return (
    <div className="house-card">
      <p>{total} / {index}</p>
      <img src={image} alt="House" />
      <div>
        <ul>
          <li>
            <span>Fiyat:</span> {price}
          </li>
          <li>
            <span>Lokasyon:</span> {location}
          </li>
          {details.map((detail, idx) => (
            <li key={idx}>
              <span>{detail.label}:</span> {detail.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HouseCard;
