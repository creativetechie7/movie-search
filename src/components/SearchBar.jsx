/* ======================================================
    Lab 8 - SearchBar.jsx starter
====================================================== */

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    // TODO 13: 
    // Create local state variable inputValue initialized to "" 

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO 14: 
        // If inputValue.trim() is not empty: 
        // - call onSearch with inputValue.trim() 
        // - clear the input by setting inputValue to "" 
    };

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            {/* TODO 15: 
                Create a controlled input: 
                - value should be inputValue 
                - onChange should update inputValue 
                - add a helpful placeholder
            */}
            <button type="submit" className="primary">Search Movies</button>
        </form>
    );
}