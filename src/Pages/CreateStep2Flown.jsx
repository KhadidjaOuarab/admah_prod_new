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

function CreateStep2Flown() {
  const [flightNumber, setFlightNumber] = useState(null);
  const [flightDate, setFlightDate] = useState(null);

  const navigate = useNavigate();
  const flownInformationFunction = () => {
    dispatch(
      setAdmAction({
        flightNumber: flightNumber,
        flightDate: flightDate,
        froms: from,
        tos: to,
      })
    );
   navigate("/Anomaly");
   
  };

  //const [froms, setFroms] = useState([]);
  const [from, setFrom] = useState(null);
  //const [tos, setTos] = useState([]);
  const [to, setTo] = useState(null);
  const dispatch = useDispatch();

  const {
    data: froms,
    loading: loading1,
    error: error1,
  } = useFetch("http://localhost:4000/Cities/AllCities");

  const {
    data: tos,
    loading: loading2,
    error: error2,
  } = useFetch("http://localhost:4000/Cities/AllCities");
  const BackFunction = () => {
    navigate("/CreateStep1");
  };
  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column   align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>Flight Information</label>
      </div>
      <MenuSteps />

      <FlexBox
        input1Col1={
          <CalendarInput
            label="Flight Date"
            date3={flightDate}
            setDate={(e) => setFlightDate(e.value)}
          />
        }
        input2Col1={
          <DropDownClear
            label="From"
            placeholder="Select From "
            autoCompleteValues={froms}
            selectedValue={from}
            onChangeMethod={(e) => setFrom(e.target.value)}
            filterByProps="City Code Alpha"
            optionLabelProps="City Code Alpha"
          />
        }
        input1Col2={
          <InputMask
            label="Flight Number"
            mask="9999"
            val1={flightNumber}
            setVal1={(e) => setFlightNumber(e.value)}
          />
        }
        input2Col2={
          <DropDownClear
            label="To"
            placeholder="Select To "
            autoCompleteValues={tos}
            selectedValue={to}
            onChangeMethod={(e) => setTo(e.target.value)}
            filterByProps="City Code Alpha"
            optionLabelProps="City Code Alpha"
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
          searchFunction={flownInformationFunction}
          classname="p-button-success w-10rem"
        />
      </div>
    </div>
  );
}

export default CreateStep2Flown;
