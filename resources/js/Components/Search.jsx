import React from "react";
import { useState } from "react";

export default function Search() {
    const [keyword, setKeyword] = useState("");

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your search logic with the 'keyword' value
        console.log("Search for:", keyword);
        // You can add more complex search logic or API calls here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-input input-keysearch mr-10"
                type="text"
                placeholder="Your keyword..."
                value={keyword}
                onChange={handleInputChange}
            />
            <button className="btn btn-default btn-find font-sm" type="submit">Search</button>
        </form>
    );
}
