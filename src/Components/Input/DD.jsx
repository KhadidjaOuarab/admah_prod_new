import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import "./DropdownDemo.css";

function DD() {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const onCityChange = (e) => {
    setAgent(e.value);
    console.log(agent["Agency Code"]);
  };

  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState({ ["Agency Code"]: "" });

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch("http://localhost:4000/Agents/AllAgents");
      const newData = await response.json();
      console.log(newData);
      console.log(newData[1]["Agency Code"]);
      setAgents(newData);

      /* console.log("//////////////////");
      console.log(typeof newData);
      var parsedData = JSON.parse(newData);
      console.log(typeof parsedData);
      console.log( newData[1]["Agency Code"]       );
      console.log("///////////////");*/
    };
    fetchData();
  }, []);

  return (
    <div className="dropdown-demo">
      <div className="card">
        <h5>Basic</h5>
        <Dropdown
          value={agent["Agency Code"]}
          options={agents}
          onChange={onCityChange}
          optionLabel="Agency Code"
          placeholder="Select a City"
        />
      </div>
    </div>
  );
}

export default DD;
