import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/DataTable.css';

const Home = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.data.gov.sg/v1/environment/24-hour-weather-forecast')
      .then((response) => {
        setResult(prev => (response.data.items[0]));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <h1>24 Hour Forecast</h1>
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
          <table className='data-table'>
            <thead>
              <tr>
                <th>Forecast</th>
                <th>Humidity</th>
                <th>Temperature</th>
                <th>Wind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.general.forecast}</td>
                <td>{`${result.general.relative_humidity.low} - ${result.general.relative_humidity.high}`}</td>
                <td>{`${result.general.temperature.low} - ${result.general.temperature.high}`}</td>
                <td>{`${result.general.wind.speed.low} - ${result.general.wind.speed.high}`}</td>
              </tr>
            </tbody>
          </table>
        )}
    </div>
  )
}

export default Home
