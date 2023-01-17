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
import InputString from "../Components/Input/InputMaskString";

function CreateStep3AnomalyEdit() {
  //***************************************************************************** */
  const productsSelector = useSelector(
    (state) => state.reducerSetProductEdit.state
  );

  const [currencyCode, setCurrency] = useState(productsSelector[0].currencyCode);
  const [anomaly, setAnomaly] = useState(productsSelector[0].anomaly);
  const [totalAmount, setTotalAmount] = useState(
    productsSelector[0].totalAmount
  );
  console.log("agentCode");
  console.log(productsSelector[0]);
  console.log("agentCode");
  //**************************************************************************** */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [currencies, setCurrencies] = useState([]);

  const anomalyFunction = () => {
    dispatch(
      setAdmAction({
        anomaly: anomaly,
        currencyCode: currencyCode,
        totalAmount: totalAmount,
      })
    );
    navigate("/SummaryEdit");
  };
  const onChangeMethod = (e) => {
    setCurrency(e.value);
  };
  const BackFunction = () => {
    navigate("/home");
  };
  const {
    data: currencies,
    loading: loading1,
    error: error1,
  } = useFetch("http://localhost:4000/Currencies/AllCurrency");
  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>All Detail About the Anomaly</label>
      </div>
      <MenuSteps />

      <TextAreaScreen
        Textarea="Anomaly"
        value14={anomaly}
        textareaFunction={(e) => setAnomaly(e.target.value)}
      />
      <div className="flex flex-row gap-4 ml-8  ">
        <InputString
          label="Currency Code"
          val1={currencyCode}
          setVal1={(e) => setCurrency(e.value)}
        />

        <InputNumberPrime
          label="Total Amount"
          value7={totalAmount}
          setVal7={(e) => setTotalAmount(e.target.value)}
        />
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

export default CreateStep3AnomalyEdit;
