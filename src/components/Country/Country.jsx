import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, flags, area, region } = props.country
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;