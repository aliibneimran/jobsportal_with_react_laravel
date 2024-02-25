import React from 'react'
import { useState } from 'react';

export default function Search() {
    const [industries, setIndustries] = useState([]);
    const [industry, setIndustry] = useState('0'); 
  return (
    <div>
    <form method="get" action="{{ route('search') }}">
        <div className="box-industry">
            <select className="form-input mr-10 select-active input-industry" name="industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="0">Industry</option>
            {industries.map((item) => (
            <option key={item.id} value={item.id} selected={industry === item.id}>
                {item.name}
            </option>
            ))}
            </select>
        </div>
        <select className="form-input mr-10 select-active" name="location">
            <option value>Location</option>
            
        </select>
        <select className="form-input mr-10 select-active" name="category">
            <option value>Category</option>
            
        </select>
        <input className="form-input input-keysearch mr-10" type="text" name="search" placeholder="Your keyword..."  />
        <button className="btn btn-default btn-find font-sm" type="submit">Search</button>
    </form>

    </div>
  )
}
