import React from "react";
import headerCSS from "./HeaderLogin.css";
import Label from "../Label/Label";
var logoAh = require("../../Assets/LogoAh.png");

function HeaderLogin() {
  return (
    <div className="HeaderLogin">
      <div className="HeaderLoginLeft">
        <img src={logoAh} />
        <Label label="ADM" labelClass="LabelRed" />
      </div>
    </div>
  );
}

export default HeaderLogin;
