import React from "react";
import homeCss from "../Pages/Home.css";
import Search from "../Components/Search/Search";
import MenuBar from "../Components/Menu/MenuBar";
import PanelCard from "../Components/Panel/PanelCard";
import DataTable from "../Components/DataTable/DataTableCrudDemo";
import BreadCrumbDemo from "../Components/Menu/BreadCrumb";
import MenuSteps from "../Components/Menu/MenuSteps";
import InputMask from "../Components/Input/InputMask";
import DropDownClear from "../Components/Input/DropDownAdvanced";
import StepCss from "../Pages/CreateStep1";
import FlexBox from "../Components/FlexBox/FlexBox";
import CalendarInput from "../Components/Input/Calendar";
import PrimeButton from "../Components/Button/ButtonPrimeIcon";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../Custom Hook/useFetch";
import { useDispatch } from "react-redux";
import { setAdmAction } from "../Redux/actions/actions";

function CreateStep1() {
  //const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState(null);
  const [exchangeNumber, setExchangeNumber] = useState(null);
  const [couponNumber, setCouponNumber] = useState(null);
  const [exchangedDate, setExchangedDate] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exchangeFunction = () => {
    dispatch(
      setAdmAction({
        exchangeNumber: exchangeNumber,
        exchangedDate: exchangedDate,
        couponNumberExchange: couponNumber,
        agentCodeExchange: agent,
      })
    );
    navigate("/Anomaly");
   
  };
  const onChangeMethod = (e) => {
    setAgent(e.value);
  };

  const {
    data: agents,
    loading: loading1,
    error: error1,
  } = useFetch("http://localhost:4000/Agents/AllAgents");
  const BackFunction = () => {
    navigate("/CreateStep1");
  };
  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>Exchanged Document Detail</label>
      </div>
      <MenuSteps />

      <FlexBox
        input1Col1={
          <CalendarInput
            label="Exchanged Date"
            date3={exchangedDate}
            setDate={(e) => setExchangedDate(e.value)}
          />
        }
        input2Col1={
          <InputMask
            label="Exchanged Document "
            mask="9999999999"
            val1={exchangeNumber}
            setVal1={(e) => setExchangeNumber(e.value)}
          />
        }
        input1Col2={
          <DropDownClear
            label="Agent Code"
            placeholder="Select an Agent"
            autoCompleteValues={agents}
            selectedValue={agent}
            onChangeMethod={onChangeMethod}
            filterByProps="Agency Code"
            optionLabelProps="Agency Code"
          />
        }
        input2Col2={
          <InputMask
            label="Coupon Number"
            mask="9"
            val1={couponNumber}
            setVal1={(e) => setCouponNumber(e.value)}
          />
        }
      />

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
          searchFunction={exchangeFunction}
          classname="p-button-success w-10rem"
        />
      </div>
    </div>
  );
}

export default CreateStep1;
