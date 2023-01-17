import React from "react";
import buttonClass from "./Button.css";
import IconButton from "@mui/material/IconButton";
import ButtonUI from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Button({ button, ButtonLabel, onClickFunction }) {
  return (
    <>
      <button className={button} onClick={onClickFunction}>{ButtonLabel}</button>
     
    </>
  );
}

export default Button;
