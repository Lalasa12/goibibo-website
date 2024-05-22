// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SerachBar';
import FlightList from './FlightList';
import './App.css';

const App = () => {
    const [flights, setFlights] = useState([]);

    const handleSearch = (searchParams) => {
        // Dummy data for now
        const dummyFlights = [
            {
                airline: 'Airline A',
                origin: searchParams.origin,
                destination: searchParams.destination,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM',
                price: '$200'
            },
            {
                airline: 'Airline B',
                origin: searchParams.origin,
                destination: searchParams.destination,
                departureTime: '01:00 PM',
                arrivalTime: '03:00 PM',
                price: '$250'
            }
        ];

        setFlights(dummyFlights);
    };

    return (
        <div className="App">
            <Header />
            <SearchBar onSearch={handleSearch} />
            <FlightList flights={flights} />
        </div>
    );
};

export default App;
