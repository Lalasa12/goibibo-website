// src/components/FlightCard.js
import React from 'react';
import './FlightCard.css';

const FlightCard = ({ flight }) => {
    return (
        <div className="flight-card">
            <h3>{flight.airline}</h3>
            <p>{flight.origin} to {flight.destination}</p>
            <p>Departure: {flight.departureTime}</p>
            <p>Arrival: {flight.arrivalTime}</p>
            <p>Price: {flight.price}</p>
        </div>
    );
};

export default FlightCard;
