import React from "react";
import cardCSS from "./Card.css";
import Input from "../Input/InputMaskString";
import InputPass from "../Input/Password"
import Label from "../Label/Label";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setLogin} from "../../Redux/actions/actions"
function Card() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: username,
    password: password,
  });

  const dispatch = useDispatch();

  const getValueUsername = (e) => {
    setUsername(e.target.value);
    setUser({ username: e.target.value, password: password });
  };

  const getValuePassword = (ee) => {
    setPassword(ee.target.value);
    setUser({ username: username, password: ee.target.value });
  };

  const loginFunction = (e) => {
    console.log("111111111111111111111111111111111111");
    console.log(username);
    console.log("111111111111111111111111111111111111");
    axios
      .post("http://localhost:4000/Users/login", user)
      .then((response) => {
        dispatch(setLogin(user));
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.value);
      });
  };

  return (
    <div className="Card">
      <Label labelClass="LabelPurple" label="Login" />
      <div>
       
        <Input
          label="User Name"
          val1={username}
          setVal1={getValueUsername}
        />
      </div>
      <div>
        
        <InputPass 
          
          value13={password}
          setValue13={getValuePassword}
        />
      </div>

      <Button
        button="button"
        ButtonLabel="Login"
        onClickFunction={(e) => loginFunction(e)}
      />

      <Label labelClass="LabelPurpleMedium" label="Forgot Password?" />
    </div>
  );
}

export default Card;
