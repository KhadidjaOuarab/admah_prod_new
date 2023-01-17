import React from "react";
import { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import homeCss from "../Pages/Home.css";
import MenuBar from "../Components/Menu/MenuBar";
import BreadCrumbDemo from "../Components/Menu/BreadCrumb";
import MenuSteps from "../Components/Menu/MenuSteps";
import PrimeButton from "../Components/Button/ButtonPrimeIcon";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

function Query() {
  const navigate = useNavigate();
  
  const toast = useRef(null);
 
  console.log("useSelectoruseSelectoruseSelectoruseSelector");
  console.log( useSelector((state) => state.queryAdmReducer.admType));
  console.log("useSelectoruseSelectoruseSelectoruseSelector");
  
  const agentCode = useSelector((state) => state.queryAdmReducer.agentCode ? state.queryAdmReducer.agentCode : state.queryAdmReducer) ;
  const flightNumber = useSelector(
    (state) => state.queryAdmReducer.flightNumber
  );
  const documentNumber = useSelector(
    (state) => state.queryAdmReducer.documentNumber
  );
  const couponNumber = useSelector(
    (state) => state.queryAdmReducer.couponNumber
  );
  const admType = useSelector((state) => state.queryAdmReducer.admType);
  const admNo = useSelector((state) => state.queryAdmReducer.admNo);
  const anomaly = useSelector((state) => state.queryAdmReducer.anomaly);
  const currencyCode = useSelector(
    (state) => state.queryAdmReducer.currencyCode
  );
  const totalAmount = useSelector(
    (state) => state.queryAdmReducer.totalAmount
  );
  const username = useSelector((state) => state.queryAdmReducer.username);
  const issueCity = useSelector((state) => state.queryAdmReducer.issueCity);
  const issueDate = useSelector((state) => state.queryAdmReducer.issueDate);
  const flightDate = useSelector((state) => state.queryAdmReducer.flightDate);
  const froms = useSelector((state) => state.queryAdmReducer.froms);
  const tos = useSelector((state) => state.queryAdmReducer.tos);
  const exchangeNumber = useSelector(
    (state) => state.queryAdmReducer.exchangeNumber
  );
  const exchangedDate = useSelector(
    (state) => state.queryAdmReducer.exchangedDate
  );
  const couponNumberExchange = useSelector(
    (state) => state.queryAdmReducer.couponNumberExchange
  );
  const agentCodeExchange = useSelector(
    (state) => state.queryAdmReducer.agentCodeExchange
  );
  const refundNumber = useSelector(
    (state) => state.queryAdmReducer.refundNumber
  );
  const refundDate = useSelector((state) => state.queryAdmReducer.refundDate);
  const couponNumberRefund = useSelector(
    (state) => state.queryAdmReducer.couponNumberRefund
  );
  const agentCodeRefund = useSelector(
    (state) => state.queryAdmReducer.agentCodeRefund
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

  //console.log("useSelectoruseSelectoruseSelectoruseSelector");
  //console.log(products);
  //console.log("useSelectoruseSelectoruseSelectoruseSelector");
  const BackFunction = () => {
    navigate("/home");
  };
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
                  <td>{ele.admType ? ele.admType : ""}</td>
                  <td>{ele.agentCode ? ele.agentCode: ""}</td>
                  <td>{ele.documentNumber ? ele.documentNumber : ""}</td>
                  <td>{ele.couponNumber ? ele.couponNumber : ""}</td>
                  <td>
                    {ele.issueDate
                      ? moment(ele.issueDate).format("DD-MM-YYYY")
                      : ""}
                  </td>
                  <td>
                    {ele.issueCity ? ele.issueCity : ""}
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
                  <td>{ele.froms ? ele.froms : ""}</td>
                  <td>{ele.tos ? ele.tos : ""}</td>
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
                      ? ele.agentCodeExchange
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
                      ? ele.agentCodeRefund
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
                      ? ele.currencyCode
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
          label="Write Back to ADM List"
          icon="pi pi-times"
          classname="p-button-secondary w-20rem"
          searchFunction={BackFunction}
        />
       
      </div>
    </>
  );
}

export default Query;
