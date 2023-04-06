import './App.css';
import countriesData from './countries.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-3">
          <CountriesList countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default App;
