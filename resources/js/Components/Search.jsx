import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Search() {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.visit('/search', { data: { keyword } });
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                className="form-input input-keysearch mr-10"
                type="text"
                placeholder="Your keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="btn btn-default btn-find font-sm" type="submit">Search</button>
        </form>
    );
}
