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
import { useSelector } from "react-redux";
import InputString from "../Components/Input/InputMaskString";

function CreateStep2FlownEdit() {
  //***************************************************************************** */
  console.log("%%%%%%%%%%%%   AVANT SELECTOR  %%%%%%%%%%%%%%%%%%%");
  const productsSelector = useSelector(
    (state) => state.reducerSetProductEdit.state
  );
  const [flightNumber, setFlightNumber] = useState(
    productsSelector[0].flightNumber
  );
  const [flightDate, setFlightDate] = useState(
    new Date(productsSelector[0].flightDate)
  );
  const [froms, setFroms] = useState(productsSelector[0].froms);
  const [tos, setTos] = useState(productsSelector[0].tos);
  const dispatch = useDispatch();
  console.log("agentCode");
  console.log(productsSelector);
  console.log(productsSelector[0].froms);
  console.log("agentCode");
  console.log(
    "useSelectoruseSelectoruseSelectoruseSelectoruseSelectoruseSelector"
  );
  //const [tos, setTos] = useState([]);
  //const [froms, setFroms] = useState([]);
  //**************************************************************************** */

  const navigate = useNavigate();
  const flownInformationFunction = () => {
    dispatch(
      setAdmAction({
        flightNumber: flightNumber,
        flightDate: flightDate,
        froms: froms,
        tos: tos,
      })
    );
    navigate("/CreateStep2ExchangeEdit");
  };
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
          /*   <DropDownClear
            label="From"
            placeholder={productsSelector[0].froms}
            autoCompleteValues={froms}
            selectedValue={from}
            onChangeMethod={(e) => setFrom(e.target.value)}
            filterByProps="City Code Alpha"
            optionLabelProps="City Code Alpha"
          />*/
          <InputString
            label="From"
            val1={froms}
            setVal1={(e) => setFroms(e.value)}
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
          /*   <DropDownClear
            label="To"
            placeholder={productsSelector[0].tos}
            autoCompleteValues={tos}
            selectedValue={to}
            onChangeMethod={(e) => setTo(e.target.value)}
            filterByProps="City Code Alpha"
            optionLabelProps="City Code Alpha"
          />*/
          <InputString
            label="To"
            val1={tos}
            setVal1={(e) => setTos(e.value)}
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

export default CreateStep2FlownEdit;
