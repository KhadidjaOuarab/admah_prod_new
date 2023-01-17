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
import usePost from "../Custom Hook/usePost";
import useFetch from "../Custom Hook/useFetch";
import { useDispatch } from "react-redux";
import { setAdmAction } from "../Redux/actions/actions";
import axios from "axios";
import { useSelector } from "react-redux";
function CreateStep1() {
  const [selectedAdmType, setSelectedAdmType] = useState(null);
  const [issueDate, setIssueDate] = useState(null);

  //const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState(null);
  //const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [documentNumber, setDocumentNumber] = useState(null);
  const [couponNumber, setCouponNumber] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => state.reducerAuth.state);
  const BackFunction = () => {
    navigate("/home");
  };
  const AdmInformationFunction = () => {
    dispatch(
      setAdmAction({
        admType: selectedAdmType,
        documentNumber: documentNumber,
        agentCode: agent,
        couponNumber: couponNumber,
        issueCity: city,
        issueDate: issueDate,
        admNo: Math.floor(Date.now() / 1000) + +documentNumber,
        username: username,
      })
    );
    if (selectedAdmType["code"] == "Issue") {
      navigate("/Anomaly");
    } else {
      if (selectedAdmType["code"] == "Flown") {
        navigate("/CreateStep2Flown");
      } else {
        if (selectedAdmType["code"] == "Refund") {
          navigate("/CreateStep2Refund");
        } else {
          if (selectedAdmType["code"] == "Exchange") {
            navigate("/CreateStep2Exchange");
          }
        }
      }
    }
  };
  const admTypes = [
    { name: "Issue", code: "Issue" },
    { name: "Refund", code: "Refund" },
    { name: "Flown", code: "Flown" },
    { name: "Exchange", code: "Exchange" },
  ];
  const onChangeMethod = (e) => {
    setAgent(e.value);
  };
  const onChangeMethodCity = (e) => {
    setCity(e.value);
  };

  const {
    data: agents,
    loading: loading1,
    error: error1,
  } = useFetch("http://localhost:4000/Agents/AllAgents");

  const {
    data: cities,
    loading: loading2,
    error: error2,
  } = useFetch("http://localhost:4000/Cities/AllCities");

  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>
          Agency Debit Memos (ADM) / Agency Credit Memos (ACM) are adjustements
          issued by an Airline for any incorrectly reported document
        </label>
      </div>
      <MenuSteps />

      <FlexBox
        input1Col1={
          <DropDownClear
            label="ADM Type"
            placeholder="Select ADM Type "
            autoCompleteValues={admTypes}
            selectedValue={selectedAdmType}
            onChangeMethod={(e) => setSelectedAdmType(e.target.value)}
            filterByProps="name"
            optionLabelProps="name"
          />
        }
        input2Col1={
          <InputMask
            label="Document Number"
            mask="9999999999"
            val1={documentNumber}
            setVal1={(e) => setDocumentNumber(e.value)}
          />
        }
        input3Col1={
          <CalendarInput
            label="Issue Date"
            date3={issueDate}
            setDate={(e) => setIssueDate(e.value)}
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
        input3Col2={
          <DropDownClear
            label="Issue City"
            placeholder="Select Issue City"
            autoCompleteValues={cities}
            selectedValue={city}
            onChangeMethod={onChangeMethodCity}
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
          searchFunction={AdmInformationFunction}
          classname="p-button-success w-10rem"
        />
      </div>
    </div>
  );
}

export default CreateStep1;
