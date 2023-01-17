import React from "react";
import { useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import InputMask from "../Input/InputMask";
function TextArea({ Textarea, value14,textareaFunction }) {
  const [countries, setCountries] = useState([]);
 // const [value14, setValue14] = useState("");

  return (
    <div>
      <div className="flex flex-column gap-4 ml-8 mr-8">
        <label
          htmlFor="textarea"
          className="flex align-items-start mt-5 text-left "
        >
          {Textarea}
        </label>
        <InputTextarea
          id="textarea"
          value={value14}
          onChange={textareaFunction}
          rows={10}
          cols={80}
          className="flex flex-column justify-content-center align-items-center gap-4  mb-5"
        />
      
      </div>
    </div>
  );
}

export default TextArea;
