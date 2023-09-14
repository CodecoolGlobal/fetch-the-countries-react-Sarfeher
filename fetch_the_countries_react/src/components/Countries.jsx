
function Countries({ countries, handleClick }) {
  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h2>{country.name.common}</h2>
          <button type="learnMore" onClick={() => handleClick(country)}>Learn more</button>
        </div>
      ))}
    </div>
  );
}

export default Countries;
