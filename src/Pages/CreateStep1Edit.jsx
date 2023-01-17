import React from "react";
import homeCss from "../Pages/Home.css";
import Search from "../Components/Search/Search";
import MenuBar from "../Components/Menu/MenuBar";
import PanelCard from "../Components/Panel/PanelCard";
import DataTable from "../Components/DataTable/DataTableCrudDemo";
import BreadCrumbDemoEdit from "../Components/Menu/BreadCrumbEdit";
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
import  InputString  from "../Components/Input/InputMaskString";
function CreateStep1Edit() {

  //***************************************************************************** */
  const productsSelector = useSelector(
    (state) => state.reducerSetProductEdit.state
  );
  const admNo = productsSelector[0].admNo;
  const [selectedAdmType, setSelectedAdmType] = useState({
    name: productsSelector[0].admType,
    code: productsSelector[0].admType,
  });
  const [issueDate, setIssueDate] = useState(
    new Date(productsSelector[0].issueDate)
  );

  console.log("agentCode");
  console.log(productsSelector[0]);
  console.log("agentCode");
  //**************************************************************************** */
 
  const [agentCode, setAgent] = useState(productsSelector[0].agentCode);
  const [issueCity, setCity] = useState(productsSelector[0].issueCity);
  const [documentNumber, setDocumentNumber] = useState( productsSelector[0].documentNumber);
  const [couponNumber, setCouponNumber] = useState( productsSelector[0].couponNumber);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AdmInformationFunction = () => {
    dispatch(
      setAdmAction({
        admType: selectedAdmType,
        documentNumber: documentNumber,
        agentCode: agentCode,
        couponNumber: couponNumber,
        issueCity: issueCity,
        issueDate: issueDate,
        admNo: admNo,
        //  username: username,
      })
    );
    navigate("/CreateStep2FlownEdit");
  };
  const admTypes = [
    { name: "Issue", code: "Issue" },
    { name: "Refund", code: "Refund" },
    { name: "Flown", code: "Flown" },
    { name: "Exchange", code: "Exchange" },
  ];
  const BackFunction = () => {
    navigate("/home");
  };
 return (
    <div>
      <MenuBar />
      <BreadCrumbDemoEdit />
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
            autoCompleteValues={admTypes}
            selectedValue={selectedAdmType}
            onChangeMethod={(e) => setSelectedAdmType(e.target.value)}
            filterByProps="name"
            optionLabelProps="name"
            defaultValue={productsSelector[0].admType}
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
            placeholder={productsSelector[0].issueDate}
            date3={issueDate}
            setDate={(e) => setIssueDate(e.value)}
          />
        }
        input1Col2={
          /* <DropDownClear
            label="Agent Code"
            autoCompleteValues={agents}
           // selectedValue={agent}
            onChangeMethod={onChangeMethod}
            filterByProps="Agency Code"
            optionLabelProps="Agency Code"
          />*/
          <InputString
            label="Agent Code"
            mask="9999999"
            val1={agentCode}
            setVal1={(e) => setAgent(e.value)}
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
          /*  <DropDownClear
            label="Issue City"
            placeholder={productsSelector[0].issueCity}
            autoCompleteValues={cities}
            selectedValue={city}
            onChangeMethod={onChangeMethodCity}
            filterByProps="City Code Alpha"
            optionLabelProps="City Code Alpha"
          />
          <InputMask
          label="Issue City"
          mask="999"
          val1={productsSelector[0].issueCity}
          setVal1={(e) => setCity(e.value)}
        />*/
        <InputString
        label="Issue City"
        mask="999"
        val1={issueCity}
        setVal1={(e) => setCity(e.value)}
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

export default CreateStep1Edit;
