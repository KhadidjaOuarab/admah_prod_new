import React from "react";
import { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from "../Input/CountryService";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
function InputPrime() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry1, setSelectedCountry1] = useState(null);
  const [selectedCountry2, setSelectedCountry2] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [value1, setValue1] = useState("");
  const [value13, setValue13] = useState("");
  const [value14, setValue14] = useState("");
  const [val1, setVal1] = useState();
  const [value3, setValue3] = useState("");
  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  };
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src="images/flag/flag_placeholder.png"
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src="images/flag/flag_placeholder.png"
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  const [date3, setDate3] = useState(null);
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
    <div>
      <h5>Basic</h5>
      <AutoComplete
        value={selectedCountry1}
        suggestions={filteredCountries}
        completeMethod={searchCountry}
        field="name"
        onChange={(e) => setSelectedCountry1(e.value)}
        aria-label="Countries"
        dropdownAriaLabel="Select Country"
      />
      <h5>Dropdown, Templating and Force Selection</h5>
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
      <Calendar
        id="icon"
        value={date3}
        onChange={(e) => setDate3(e.value)}
        showIcon
      />
      <h5>Advanced with Templating, Filtering and Clear Icon</h5>
      <Dropdown
        value={selectedCountry}
        options={countries}
        onChange={onCountryChange}
        optionLabel="name"
        filter
        showClear
        filterBy="name"
        placeholder="Select a Country"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
      />
      <div className="field col-12 md:col-4">
        <span className="p-float-label">
          <InputText
            id="inputtext"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <label htmlFor="inputtext">InputText</label>
        </span>
      </div>
      <div className="field col-12 md:col-4">
        <span className="p-float-label">
          <Password
            inputId="password"
            value={value13}
            onChange={(e) => setValue13(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </span>
      </div>
      <div className="field col-12 md:col-4">
        <span className="p-float-label">
          <InputTextarea
            id="textarea"
            value={value14}
            onChange={(e) => setValue14(e.target.value)}
            rows={3}
          />
          <label htmlFor="textarea">Textarea</label>
        </span>
      </div>

      <div className="field col-12 md:col-4">
        <label htmlFor="basic">Basic</label>
        <InputMask
          id="basic"
          mask="99-999999"
          value={val1}
          placeholder="99-999999"
          onChange={(e) => setVal1(e.value)}
        ></InputMask>
      </div>
      <h5>Show Password</h5>
      <Password
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
        toggleMask
      />
    </div>
  );
}

export default InputPrime;
