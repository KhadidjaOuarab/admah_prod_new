import React from "react";
import Select from "react-select";
import InCSS from "./Input.css";
import chroma from "chroma-js";
import { useEffect, useState } from "react";
function InputSelect() {
  const options = [
    { label: "Issue", value: "Issue" },
    { label: "Flown", value: "Flown" },
    { label: "Refund", value: "Refund" },
    { label: "Exchange", value: "Exchange" },
  ];

  const [valSelected, setValSelected] = useState("Issue");

  const getValSelected = (valSelected) => {
    setValSelected(valSelected);
    console.log(valSelected);
  };

  return (
    <div style={{ width: "250.78px" }}>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,

            padding: "0",
            margin: "0",
            border: "1px solid #644ded",
            width: "250.78px",
            height: "40px",
            boxSizing: "border-box",
            background: "#ffffff",
            borderRadius: "8px",
            "&:hover": {
              background: "#EEEEF2",
              border: "1px solid #AD9FFF",
              borderRadius: "8px",
            },
          }),
          option: (styles, { isSelected }) => ({
            ...styles,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2px",
          
            left: "5.9px",
            right: "4.95px",
            top: "7px",
            width: "250.78px",
            height: "40px",
            borderRadius: "6px",
            fontFamily: "Apercu Pro",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "16px",
            paddingLeft: "16px",
            paddingTop: "10px",
          
            "&:hover": {
              background: "#EEEEF2",
              border: "0px solid #AD9FFF",
              borderRadius: "8px",
              color: "#644DED",
            },
            spacing: {
              ...styles.spacing,
              controlHeight: 30,
              baseUnit: 0,
            },
          }),

          dropdownIndicator: (base) => ({
            ...base,
            color: "black",
            border: "1.2px  #242533",
            paddingTop: 0,
            paddingBottom: 0,
            margin: 0,
          }),

          clearIndicator: (styles) => ({
            ...styles,
            paddingTop: 0,
            paddingBottom: 0,
            margin: 0,
          }),
        }}
        // styles={colourStyles}
        // className="abc"
        unstyled
        options={options}
        value={valSelected}
        onChange={getValSelected}
        menuPortalTarget={document.body}
        menuPosition={"fixed"}
        components={{
          IndicatorSeparator: () => null,
        }}
        placeholder=""
      />
    </div>
  );
}

export default InputSelect;
