import React from "react";
import { useState, useEffect } from "react";
import { Password } from "primereact/password";

function InputPrime({value13,setValue13 }) {
 
  //const [value13, setValue13] = useState("");

  return (
    <div>
      <div className="field  flex flex-column ">
       
        <label htmlFor="password">Password</label>
          <Password className="w-15rem h-3rem"
            value={value13}
            onChange={setValue13}
          />
         
       
      </div>
    </div>
  );
}

export default InputPrime;
