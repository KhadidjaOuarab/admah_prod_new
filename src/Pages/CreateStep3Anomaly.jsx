import React from "react";
import homeCss from "../Pages/Home.css";
import Search from "../Components/Search/Search";
import MenuBar from "../Components/Menu/MenuBar";
import PanelCard from "../Components/Panel/PanelCard";
import DataTable from "../Components/DataTable/DataTableCrudDemo";
import BreadCrumbDemo from "../Components/Menu/BreadCrumb";
import MenuSteps from "../Components/Menu/MenuSteps";
import InputNumberPrime from "../Components/Input/InputNumberPrime";
import DropDownClear from "../Components/Input/DropDownAdvanced";
import StepCss from "../Pages/CreateStep1";
import FlexBox from "../Components/FlexBox/FlexBox";
import CalendarInput from "../Components/Input/Calendar";
import PrimeButton from "../Components/Button/ButtonPrimeIcon";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextAreaScreen from "../Components/Input/TextArea";
import { useState, useEffect } from "react";
import useFetch from "../Custom Hook/useFetch";
import { useDispatch } from "react-redux";
import { setAdmAction } from "../Redux/actions/actions";
import { useSelector } from "react-redux";
function CreateStep1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 // const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState(null);
  const [anomaly, setAnomaly] = useState("");
  const [totalAmount, setTotalAmount] = useState(null);
  const anomalyFunction = () => {

    dispatch(
      setAdmAction({
        anomaly: anomaly,
        currencyCode: currency,
        totalAmount: totalAmount,
        
      })
    );
    navigate("/Summary");
  };
  const onChangeMethod = (e) => {
    setCurrency(e.value);
  };

  const {
    data: currencies,
    loading: loading1,
    error: error1,
  } = useFetch("http://localhost:4000/Currencies/AllCurrency");
  const admType = useSelector((state) => state.createAdmReducer.admType);
  const BackFunction = () => {
    

    if (admType["code"] == "Issue") {
      navigate("/CreateStep1");
    } else {
      if (admType["code"] == "Flown") {
        navigate("/CreateStep2Flown");
      } else {
        if (admType["code"] == "Refund") {
          navigate("/CreateStep2Refund");
        } else {
          if (admType["code"] == "Exchange") {
            navigate("/CreateStep2Exchange");
          }
        }
      }
    }
   
  };
  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>All Detail About the Anomaly</label>
      </div>
      <MenuSteps />

      <TextAreaScreen Textarea="Anomaly" value14={anomaly} textareaFunction={ (e) => setAnomaly(e.target.value)}/>
      <div className="flex flex-row gap-4 ml-8  ">
        <DropDownClear
          label="Currency Code"
          placeholder="Select Currency"
          autoCompleteValues={currencies}
          selectedValue={currency}
          onChangeMethod={onChangeMethod}
          filterByProps="Currency Alpha Code"
          optionLabelProps="Currency Alpha Code"
        />
        <InputNumberPrime label="Total Amount"  value7={totalAmount} setVal7={(e) => setTotalAmount(e.target.value)}/>
      </div>
      <div className="flex flex-row  justify-content-center align-items-center gap-3">
        <PrimeButton
          label="Go Back"
          icon="pi pi-times"
          classname="p-button-secondary w-10rem"
          searchFunction={BackFunction}
        />
        <PrimeButton
          label="Next   "
          icon="pi pi-check"
          searchFunction={anomalyFunction}
          classname="p-button-success w-10rem"
        />
      </div>
    </div>
  );
}

export default CreateStep1;
