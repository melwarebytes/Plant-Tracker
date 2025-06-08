import { useState, useEffect } from 'react';
import './PlantGrowthTracker.css';
import '../index.css';

const plants = [
  {
    name: 'Sunflower',
    sowDate: new Date('2025-06-06'),
    image: '/images/sunflower.jpg',
  },
  {
    name: 'Dahlia',
    sowDate: new Date('2025-06-08'),
    image: '/images/dahlia.jpg',
  },
  {
    name: 'Tomato',
    sowDate: new Date('2025-05-30'),
    image: '/images/tomato.jpg',
  },
];

const getElapsedTime = (sowDate) => {
  const now = new Date();
  const diff = now - sowDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default function PlantGrowthTracker() {
  const [flipped, setFlipped] = useState({});
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const updateTimers = () => {
      const newTimers = {};
      plants.forEach((plant) => {
        newTimers[plant.name] = getElapsedTime(plant.sowDate);
      });
      setTimers(newTimers);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFlip = (name) => {
    setFlipped((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
  <div className="wrapper">
    <div className="plant-container">
      {plants.map((plant) => (
        <div
          key={plant.name}
          className="plant-card-wrapper"
          onClick={() => toggleFlip(plant.name)}
        >
          <div className={`plant-card-inner ${flipped[plant.name] ? 'flipped' : ''}`}>
            <div className="plant-card-front">
              <h2>{plant.name}</h2>
              <p>Sown on: {plant.sowDate.toDateString()}</p>
              <p>Time since sowing:</p>
              <p className="plant-timer">{timers[plant.name]}</p>
            </div>
            <div className="plant-card-back">
              <img src={plant.image} alt={plant.name} className="plant-image" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}