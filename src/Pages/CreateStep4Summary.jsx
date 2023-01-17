import React from "react";
import { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import homeCss from "../Pages/Home.css";
import MenuBar from "../Components/Menu/MenuBar";
import BreadCrumbDemo from "../Components/Menu/BreadCrumb";
import MenuSteps from "../Components/Menu/MenuSteps";
import PrimeButton from "../Components/Button/ButtonPrimeIcon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

function CreateStep1() {
  const navigate = useNavigate();
  const loginFunction = () => {
    navigate("/CreateStep1");
  };
  const toast = useRef(null);
  const SaveADM = () => {
    axios
      .post("http://localhost:4000/Adms/CreateAdm", products)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.current.show({
          severity: "error",
          summary: "Error Message",
          detail: err,
          life: 3000,
        });
      })
      .finally(() => {});

    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "ADM Created",
      life: 3000,
    });
  };

  const agentCode = useSelector((state) => state.createAdmReducer.agentCode);
  const flightNumber = useSelector(
    (state) => state.createAdmReducer.flightNumber
  );
  const documentNumber = useSelector(
    (state) => state.createAdmReducer.documentNumber
  );
  const couponNumber = useSelector(
    (state) => state.createAdmReducer.couponNumber
  );
  const admType = useSelector((state) => state.createAdmReducer.admType);
  const admNo = useSelector((state) => state.createAdmReducer.admNo);
  const anomaly = useSelector((state) => state.createAdmReducer.anomaly);
  const currencyCode = useSelector(
    (state) => state.createAdmReducer.currencyCode
  );
  const totalAmount = useSelector(
    (state) => state.createAdmReducer.totalAmount
  );
  const username = useSelector((state) => state.createAdmReducer.username);
  const issueCity = useSelector((state) => state.createAdmReducer.issueCity);
  const issueDate = useSelector((state) => state.createAdmReducer.issueDate);
  const flightDate = useSelector((state) => state.createAdmReducer.flightDate);
  const froms = useSelector((state) => state.createAdmReducer.froms);
  const tos = useSelector((state) => state.createAdmReducer.tos);
  const exchangeNumber = useSelector(
    (state) => state.createAdmReducer.exchangeNumber
  );
  const exchangedDate = useSelector(
    (state) => state.createAdmReducer.exchangedDate
  );
  const couponNumberExchange = useSelector(
    (state) => state.createAdmReducer.couponNumberExchange
  );
  const agentCodeExchange = useSelector(
    (state) => state.createAdmReducer.agentCodeExchange
  );
  const refundNumber = useSelector(
    (state) => state.createAdmReducer.refundNumber
  );
  const refundDate = useSelector((state) => state.createAdmReducer.refundDate);
  const couponNumberRefund = useSelector(
    (state) => state.createAdmReducer.couponNumberRefund
  );
  const agentCodeRefund = useSelector(
    (state) => state.createAdmReducer.agentCodeRefund
  );

  const products = [
    {
      admNo: admNo,
      agentCode: agentCode,
      documentNumber: documentNumber,
      couponNumber: couponNumber,
      admType: admType,
      anomaly: anomaly,
      currencyCode: currencyCode,
      totalAmount: totalAmount,
      username: username,
      issueCity: issueCity,
      issueDate: issueDate,
      flightNumber: flightNumber,
      flightDate: flightDate,
      froms: froms,
      tos: tos,
      exchangeNumber: exchangeNumber,
      exchangedDate: exchangedDate,
      couponNumberExchange: couponNumberExchange,
      agentCodeExchange: agentCodeExchange,
      refundNumber: refundNumber,
      refundDate: refundDate,
      couponNumberRefund: couponNumberRefund,
      agentCodeRefund: agentCodeRefund,
    },
  ];
  const BackFunction = () => {
    navigate("/Anomaly");
  };
  console.log("useSelectoruseSelectoruseSelectoruseSelector");
  console.log(products);
  console.log("useSelectoruseSelectoruseSelectoruseSelector");
  return (
    <>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column m-4  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>Summary</label>
      </div>
      <MenuSteps />

      {React.Children.toArray(
        products.map((ele) => {
          return (
            <table className="atatable-crud-demo customers m-4 pr-4">
              <Toast ref={toast} />
              <thead>
                <tr>
                  <th>ADM No</th>
                  <th>ADM Type</th>
                  <th>Agent Code</th>
                  <th>Document No</th>
                  <th>Coupon No</th>
                  <th>Issue Date</th>
                  <th>Issue City</th>
                </tr>
              </thead>
              <tbody className=" mb-4">
                <tr>
                  <td>{ele.admNo ? ele.admNo : ""}</td>
                  <td>{ele.admType ? ele.admType["code"] : ""}</td>
                  <td>{ele.agentCode ? ele.agentCode["Agency Code"] : ""}</td>
                  <td>{ele.documentNumber ? ele.documentNumber : ""}</td>
                  <td>{ele.couponNumber ? ele.couponNumber : ""}</td>
                  <td>
                    {ele.issueDate
                      ? moment(ele.issueDate).format("DD-MM-YYYY")
                      : ""}
                  </td>
                  <td>
                    {ele.issueCity ? ele.issueCity["City Code Alpha"] : ""}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Flight Date</th>
                  <th>Flight No</th>
                  <th>From</th>
                  <th>To </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {ele.flightDate
                      ? moment(ele.flightDate).format("DD-MM-YYYY")
                      : ""}
                  </td>
                  <td>{ele.flightNumber ? ele.flightNumber : ""}</td>
                  <td>{ele.froms ? ele.froms["City Code Alpha"] : ""}</td>
                  <td>{ele.tos ? ele.tos["City Code Alpha"] : ""}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Exchange Date</th>
                  <th>Agent Code</th>
                  <th>Exchanged Doc</th>
                  <th>Coupon No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {ele.exchangedDate
                      ? moment(ele.exchangedDate).format("DD-MM-YYYY")
                      : ""}
                  </td>
                  <td>
                    {ele.agentCodeExchange
                      ? ele.agentCodeExchange["Agency Code"]
                      : ""}
                  </td>
                  <td>{ele.exchangeNumber ? ele.exchangeNumber : ""}</td>
                  <td>
                    {ele.couponNumberExchange ? ele.couponNumberExchange : ""}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Refund Date</th>
                  <th>Agent Code</th>
                  <th>Refunded Doc</th>
                  <th>Coupon No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {ele.refundDate
                      ? moment(ele.refundDate).format("DD-MM-YYYY")
                      : ""}
                  </td>
                  <td>
                    {ele.agentCodeRefund
                      ? ele.agentCodeRefund["Agency Code"]
                      : ""}
                  </td>
                  <td>{ele.refundNumber ? ele.refundNumber : ""}</td>
                  <td>
                    {ele.couponNumberRefund ? ele.couponNumberRefund : ""}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Anomaly</th>
                  <th>Currency Code</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ele.anomaly ? ele.anomaly : ""}</td>
                  <td>
                    {ele.currencyCode
                      ? ele.currencyCode["Currency Alpha Code"]
                      : ""}
                  </td>
                  <td>{ele.totalAmount ? ele.totalAmount : ""} </td>
                </tr>
              </tbody>
            </table>
          );
        })
      )}

      <div className="flex flex-row mt-5 justify-content-center align-items-center gap-3">
        <PrimeButton
          label="Back  "
          icon="pi pi-times"
          classname="p-button-secondary w-10rem"
          searchFunction={BackFunction}
        />
        <PrimeButton
          label="Save Changes"
          icon="pi pi-check"
          searchFunction={SaveADM}
          classname="p-button-success w-15rem"
        />

        <PrimeButton
          label="ADM List"
          icon="pi pi-times"
          classname="p-button-info w-10rem"
          searchFunction={BackFunction}
        />
      </div>
    </>
  );
}

export default CreateStep1;
