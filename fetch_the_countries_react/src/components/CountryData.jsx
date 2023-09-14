
function CountryData({country, handleClick}) {
    return (<div>
        <h2>{country.name.common}</h2>
        <ul>
            <li>Capital: {country.capital}</li>
            <li>Region: {country.region}</li>
            <li>Subregion: {country.subregion}</li>
            <li>Population: {country.population}</li>
            <li>Fifa: {country.fifa}</li>
            <li>Continents: {country.continents}</li>
            <img src={country.flags.png} />
        </ul>
        <button type="back" onClick={() => handleClick(null)}>Back</button>
    </div>)
}

export default CountryData;