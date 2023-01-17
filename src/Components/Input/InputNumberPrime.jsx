import React from "react";
import { useState, useEffect } from "react";
import { InputNumber } from 'primereact/inputnumber';
function InputNumberPrime({ label, value7, setVal7 }) {
  //const [val1, setVal1] = useState();

  return (
    <div>
      <div className="field  flex flex-column ">
        <label htmlFor="basic">{label}</label>
        <InputNumber
          inputId="locale-german"
          value={value7}
          onValueChange={setVal7}
          mode="decimal"
          locale="de-DE"
          minFractionDigits={2}
        />
      </div>
    </div>
  );
}

export default InputNumberPrime;
