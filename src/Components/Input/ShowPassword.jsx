import React from "react";
import { useState, useEffect } from "react";
import { Password } from "primereact/password";

function InputPrime() {
  const [value3, setValue3] = useState("");
 
  return (
    <div>
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
