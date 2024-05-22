// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleSearch = () => {
        onSearch({ origin, destination, date });
    };

    return (
        <div className="search-bar">
            <input type="text" placeholder="Origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
