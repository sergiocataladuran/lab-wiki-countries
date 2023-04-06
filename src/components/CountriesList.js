import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="container">
      <div className="scrollable" style={{ maxHeight: '500px' }}>
        {countries.map((country) => {
          return (
            <>
              <Link to={`country/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
