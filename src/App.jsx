import React from 'react';
function Room() {
  return (
    <div>
      <h2>Hotel Room Details</h2>
      <p>Room Type: Deluxe</p>
      <p>Price: ₹2000</p>
      <p>Occupancy: 2 Persons</p>
    </div>
  );
}
export default function App() {
  return <Room />;
}
