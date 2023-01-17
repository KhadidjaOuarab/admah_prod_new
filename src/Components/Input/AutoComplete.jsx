import React from "react";
import { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";

function InputPrime({ label }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry1, setSelectedCountry1] = useState(null);
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

  return (
    <div className="field flex flex-column">
      <label htmlFor="auto">{label}</label>
      <AutoComplete
        value={selectedCountry1}
        suggestions={filteredCountries}
        completeMethod={searchCountry}
        field="name"
        onChange={(e) => setSelectedCountry1(e.value)}
        aria-label="Countries"
        dropdownAriaLabel="Select Country"
      />
    </div>
  );
}

export default InputPrime;
