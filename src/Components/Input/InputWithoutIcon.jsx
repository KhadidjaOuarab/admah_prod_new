import React from "react";
import InCSS from "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({ type, classname, inplace ,icon,onChangeFunction,valueInput}) {
  
  return (
    <div>
    
     <input className={classname} type={type} placeholder={inplace} value={valueInput} onChange={onChangeFunction} ></input>
     
    </div>
  );
}

export default Input;
