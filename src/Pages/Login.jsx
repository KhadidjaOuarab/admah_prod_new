import React from "react";
import HeaderLogin from "../Components/HeaderLogin/HeaderLogin";
import Card from "../Components/Card/Card";
import bgCss from "../Pages/Login.css";

function Login() {
  return (
    <div className="bg">
      <HeaderLogin />
      <Card />
    </div>
  );
}

export default Login;
