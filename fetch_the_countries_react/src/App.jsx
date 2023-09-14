import { useState, useEffect } from 'react'
import './App.css'
import Countries from './components/Countries'
import CountryData from './components/CountryData'

function App() {
  const [data, setData] = useState([])
  const [countryDisplay, setCountry] = useState({})
  const [displayList, setDisplay] = useState(true)
  const [rightOlder, setRightOlder] = useState(true)

  const ascending = () => data.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
  })

  const descending = () => data.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return 1;
    }
    if (a.name.common > b.name.common) {
      return -1;
    }
  })


  useEffect(() => {
    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData('https://restcountries.com/v3.1/all');
  }, []);

  const handleClick = (country) => {
    country ? (setCountry(country), setDisplay(false))
      : (setDisplay(true));
  }

  const getSortedCountries = (rightOlder) => {
    if (rightOlder) {
      setRightOlder(false);
      ascending();
    } else {
      setRightOlder(true);
      descending();
    }
  }
  console.log(rightOlder);

  return (
    <div>
      {data && displayList ? (
        <div>
          <button onClick={() => getSortedCountries(rightOlder)}>Sort</button>
          <h1>List of Countries</h1>
          <Countries countries={data} handleClick={handleClick} />
        </div>
      ) : (
        <CountryData country={countryDisplay} handleClick={handleClick} />
      )}
    </div>
  )
}

export default App
