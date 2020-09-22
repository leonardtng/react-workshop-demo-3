import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Forecast2H from './pages/Forecast2H';
import Forecast4D from './pages/Forecast4D';
import Forecast24H from './pages/Forecast24H'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Singapore Weather Forecast</h1>
      </header>
      <section>
        <h3>Navigation</h3>
        <div className='navbar'>
          <a href="/forecast2h">2 Hour Forecast</a>
          <a href="/">24 Hour Forecast</a>
          <a href="/forecast4d">4 Day Forecast</a>
        </div>
      </section>
      <BrowserRouter>
        <Switch>
          <Route path='/forecast2h' component={Forecast2H} />
          <Route path='/forecast4d' component={Forecast4D} />
          <Route path='/' component={Forecast24H} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
