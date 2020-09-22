import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/DataTable.css';

const Forecast4D = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
      .then((response) => {
        setResult(prev => (response.data.items[0].forecasts));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);



  return (
    <div>
      <h1>4 Day Forecast</h1>
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
          <table className='data-table'>
            <thead>
              <tr>
                <th>Day</th>
                <th>Forecast</th>
                <th>Humidity</th>
                <th>Temperature</th>
                <th>Wind</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => {
                return <tr>
                  <td>{item.date}</td>
                  <td>{item.forecast}</td>
                  <td>{`${item.relative_humidity.low} - ${item.relative_humidity.high}`}</td>
                  <td>{`${item.temperature.low} - ${item.temperature.high}`}</td>
                  <td>{`${item.wind.speed.low} - ${item.wind.speed.high}`}</td>
                </tr>
              })}
            </tbody>
          </table>
        )}
    </div>
  )
}

export default Forecast4D
