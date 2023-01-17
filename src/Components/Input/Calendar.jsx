import React from "react";
import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

function InputPrime({ label,date3 , setDate}) {
 // const [date3, setDate3] = useState(null);

  return (
    <div>
      <div className="field  flex flex-column">
        <label htmlFor="basic">{label}</label>
        <Calendar
          id="icon"
          value={date3}
          onChange={setDate}
          showIcon
          className="w-12"
          dateFormat="dd-mm-yy" 
        />
      </div>
    </div>
  );
}

export default InputPrime;
