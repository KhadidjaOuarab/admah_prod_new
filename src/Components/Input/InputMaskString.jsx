import React from "react";
import { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
function InputString({ label,mask ,val1,setVal1}) {
  //const [val1, setVal1] = useState();

  return (
    <div>
      <div className="field  flex flex-column ">
        <label htmlFor="basic">{label}</label>
        <InputText
          id="basic"
          value={val1}
          placeholder={mask}
          onChange={setVal1}
          className="w-15rem h-3rem"
        ></InputText>
      </div>
    </div>
  );
}

export default InputString;
