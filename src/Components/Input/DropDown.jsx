import React from "react";
import { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
function InputPrime({label}) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry2, setSelectedCountry2] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  
  
  const searchCountry = (event) => {
    setTimeout(() => {
      let _filteredCountries;
      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };
  const itemTemplate = (item) => {
    return (
      <div className="country-item">
        <img
          alt={item.name}
          src={`images/flag/flag_placeholder.png`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag flag-${item.code.toLowerCase()}`}
        />
        <div>{item.name}</div>
      </div>
    );
  };
  return (
    <div className="field flex flex-column">
    <label htmlFor="auto">{label}</label>
      <AutoComplete
        value={selectedCountry2}
        suggestions={filteredCountries}
        completeMethod={searchCountry}
        field="name"
        dropdown
        forceSelection
        itemTemplate={itemTemplate}
        onChange={(e) => setSelectedCountry2(e.value)}
        aria-label="Countries"
        dropdownAriaLabel="Select Country"
      />
     
    </div>
  );
}

export default InputPrime;
