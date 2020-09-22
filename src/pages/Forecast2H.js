import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/DataTable.css';

const Forecast2H = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')
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
      <h1>2 Hour Forecast</h1>
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
          <table className='data-table'>
            <thead>
              <tr>
                <th>Area</th>
                <th>Forecast</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => {
                return <tr>
                  <td>{item.area}</td>
                  <td>{item.forecast}</td>
                </tr>
              })
              }
            </tbody>
          </table>
        )}
    </div>
  )
}

export default Forecast2H
