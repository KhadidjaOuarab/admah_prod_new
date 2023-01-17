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

function CreateStep2RefundEdit() {
  //***************************************************************************** */
  console.log("%%%%%%%%%%%%   AVANT SELECTOR  %%%%%%%%%%%%%%%%%%%");
  const productsSelector = useSelector(
    (state) => state.reducerSetProductEdit.state
  );

  console.log("agentCode");
  console.log(productsSelector);
  console.log(productsSelector[0]);
  console.log("agentCode");
  console.log(
    "useSelectoruseSelectoruseSelectoruseSelectoruseSelectoruseSelector"
  );
  //**************************************************************************** */

  let target = "";
  const navigate = useNavigate();
  //const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState(productsSelector[0].agentCodeRefund);
  const [refundDate, setRefundDate] = useState(
    new Date(productsSelector[0].refundDate)
  );
  const [couponNumber, setCouponNumber] = useState(
    productsSelector[0].couponNumberRefund
  );
  const [refundNumber, setRefundNumber] = useState(
    productsSelector[0].refundNumber
  );
  const dispatch = useDispatch();
  const refundFunction = () => {
    dispatch(
      setAdmAction({
        refundNumber: refundNumber,
        refundDate: refundDate,
        couponNumberRefund: couponNumber,
        agentCodeRefund: agent,
      })
    );

    navigate("/AnomalyEdit");
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
        <label>Refunded Document Detail</label>
      </div>
      <MenuSteps />

      <FlexBox
        input1Col1={
          <CalendarInput
            label="Refunded Date"
            date3={refundDate}
            setDate={(e) => setRefundDate(e.value)}
          />
        }
        input2Col1={
          <InputMask
            label="Refunded Document "
            mask="9999999999"
            val1={refundNumber}
            setVal1={(e) => setRefundNumber(e.value)}
          />
        }
        input1Col2={
          /*    <DropDownClear
            label="Agent Code"
            placeholder={productsSelector[0].agentCodeRefund}
            autoCompleteValues={agents}
            selectedValue={agent}
            onChangeMethod={onChangeMethod}
            filterByProps="Agency Code"
            optionLabelProps="Agency Code"
          />*/
          <InputString
            label="Agent Code"
            mask="9999999"
            val1={productsSelector[0].agentCode}
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
          searchFunction={refundFunction}
          classname="p-button-success w-10rem"
        />
      </div>
    </div>
  );
}

export default CreateStep2RefundEdit;
