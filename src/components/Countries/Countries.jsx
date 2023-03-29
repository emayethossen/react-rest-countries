import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <h1> Visiting Every Country Of The World!!!!</h1>
            <h3>Available Countries: {countries.length}</h3>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3} />)
                }
            </div>
        </>
    );
};

export default Countries;