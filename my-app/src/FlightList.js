// src/components/FlightList.js
import React from 'react';
import FlightCard from './FlightCard';
import './FlightList.css';

const FlightList = ({ flights }) => {
    return (
        <div className="flight-list">
            {flights.map((flight, index) => (
                <FlightCard key={index} flight={flight} />
            ))}
        </div>
    );
};

export default FlightList;
