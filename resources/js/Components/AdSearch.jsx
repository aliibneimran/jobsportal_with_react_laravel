import { usePage } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

export default function AdSearch() {
    const{locations,industries,categories} = usePage().props

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        let filteredJobs = jobs;
        if (selectedLocation) {
            filteredJobs = filteredJobs.filter((job) => job.location === selectedLocation);
        }
        setSearchResults(filteredJobs);
    };


    return (
        <div>
            <div className="sidebar-shadow none-shadow mb-30">
                <div className="sidebar-filters">
                    <div className="filter-block head-border mb-30">
                        <h5>Advance Filter<a className="link-reset" href="#">Reset</a></h5>
                    </div>
                    <div className="filter-block mb-30">
                        <div className="form-group select-style select-style-icon">
                            <select className="form-control form-icons select-active" onChange={(e) => setSelectedLocation(e.target.value)}>
                                {locations.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                                ))}
                            </select>
                            <i className="fi-rr-marker" />
                        </div>
                    <button className="btn btn-success w-100" onClick={handleSearch}>Search</button>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Industry</h5>
                        <div className="form-group">
                            <ul className="list-checkbox">
                            {industries.map((industry) => (
                                <li key={industry.id}>
                                <label className="cb-container">
                                    <input type="checkbox" />
                                    <span className="text-small">{industry.name}</span>
                                    <span className="checkmark" />
                                </label>
                                <span className="number-item">{industry.jobs_count}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">
                            Job Type
                        </h5>
                        <div className="form-group">
                            <ul className="list-checkbox">
                            {categories.map((category) => (
                            <li key={category.id}>
                                <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-small">{category.name}</span>
                                <span className="checkmark" />
                                </label>
                                <span className="number-item">{category.count}</span>
                            </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
