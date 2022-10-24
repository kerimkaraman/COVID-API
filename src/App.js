import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Card from './Card';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '58d088d654mshb02d5eb4bb31287p14696bjsn0fd8c502f458',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    };

    fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
      .then(response => response.json())
      .then(response => setData([response]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='items'>
        {
          data.map((val) => {
            return (
              Object.values(val).map((datas) => {
                const { NewCases, NewDeaths, TwoLetterSymbol, NewRecovered, Population, rank, TotalTests, TotalRecovered, TotalDeaths, TotalCases, Country } = datas;
                console.log(datas)
                return (
                  <Card
                    key={rank}
                    Country={Country}
                    NewCases={NewCases}
                    NewDeaths={NewDeaths}
                    NewRecovered={NewRecovered}
                    TotalCases={TotalCases}
                    TotalTests={TotalTests}
                    TotalDeaths={TotalDeaths}
                    TotalRecovered={TotalRecovered}
                    TwoLetterSymbol={TwoLetterSymbol}
                  />
                )
              })
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

