import React from 'react';
import './styles.css';
import housesForSale from './data/housesForSale';
import HouseCard from './components/HouseCard';

export default function App() {
  const totalHouses = housesForSale.length;

  const houseCards = housesForSale.map((houseData, index) => {
    const details = [
      { label: 'Metrekare', value: houseData.squareFeet },
      { label: 'Dönüm', value: houseData.acres },
      { label: 'Yapım Yılı', value: houseData.yearBuilt },
      { label: 'Yatak Odası', value: houseData.bedrooms },
      { label: 'Banyo', value: houseData.bathrooms },
      { label: 'Diğer Odalar', value: houseData.otherRooms },
      { label: 'Garaj', value: houseData.garage ? 'Evet' : 'Hayır' },
      { label: 'Klima', value: houseData.airConditioning ? 'Evet' : 'Hayır' },
      { label: 'Isıtma Sistemi', value: houseData.heating ? 'Evet' : 'Hayır' },
      { label: 'Lanetli', value: houseData.haunted ? 'Evet' : 'Hayır' }
    ];

    return (
      <HouseCard
        key={houseData.id}
        image={houseData.image}
        price={houseData.price}
        location={houseData.location}
        details={details}
        index={index + 1}
        total={totalHouses}
      />
    );
  });

  return (
    <div className="wrapper">
      <header>
        <img className="logo" src="images/logo.png" alt="Logo" />
      </header>
      <div className="house-cards-container">{houseCards}</div>
    </div>
  );
}
