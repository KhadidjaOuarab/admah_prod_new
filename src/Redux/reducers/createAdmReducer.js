import { SETADMINFORMATION } from "../type/type";
import { useSelector } from "react-redux";

const initState = {
  products: [{}],
};

const reducerSetAdmInformation = (state = initState, action) => {
  if (action.type === SETADMINFORMATION) {
    console.log("statestatestatestatestatestatestatestate");
    console.log(state);
    console.log("statestatestatestatestatestatestatestate");
    return {
      ...state,
      admNo: action.payload.admNo
        ? action.payload.admNo
        : state.admNo,
      agentCode: action.payload.agentCode
        ? action.payload.agentCode
        : state.agentCode,
      documentNumber: action.payload.documentNumber
        ? action.payload.documentNumber
        : state.documentNumber,
      couponNumber: action.payload.couponNumber
        ? action.payload.couponNumber
        : state.couponNumber,
      admType: action.payload.admType ? action.payload.admType : state.admType,
      anomaly: action.payload.anomaly ? action.payload.anomaly : state.anomaly,
      currencyCode: action.payload.currencyCode
        ? action.payload.currencyCode
        : state.currencyCode,
      totalAmount: action.payload.totalAmount
        ? action.payload.totalAmount
        : state.totalAmount,
      username: action.payload.username
        ? action.payload.username
        : state.username,
      issueCity: action.payload.issueCity
        ? action.payload.issueCity
        : state.issueCity,
      issueDate: action.payload.issueDate
        ? action.payload.issueDate
        : state.issueDate,
      flightNumber: action.payload.flightNumber
        ? action.payload.flightNumber
        : state.flightNumber,
      flightDate: action.payload.flightDate
        ? action.payload.flightDate
        : state.flightDate,
      froms: action.payload.froms ? action.payload.froms : state.froms,
      tos: action.payload.tos ? action.payload.tos : state.tos,
      exchangeNumber: action.payload.exchangeNumber
        ? action.payload.exchangeNumber
        : state.exchangeNumber,
      exchangedDate: action.payload.exchangedDate
        ? action.payload.exchangedDate
        : state.exchangedDate,
      couponNumberExchange: action.payload.couponNumberExchange
        ? action.payload.couponNumberExchange
        : state.couponNumberExchange,
      agentCodeExchange: action.payload.agentCodeExchange
        ? action.payload.agentCodeExchange
        : state.agentCodeExchange,
      refundNumber: action.payload.refundNumber
        ? action.payload.refundNumber
        : state.refundNumber,
      refundDate: action.payload.refundDate
        ? action.payload.refundDate
        : state.refundDate,
      couponNumberRefund: action.payload.couponNumberRefund
        ? action.payload.couponNumberRefund
        : state.couponNumberRefund,
      agentCodeRefund: action.payload.agentCodeRefund
        ? action.payload.agentCodeRefund
        : state.agentCodeRefund,
    };
  }

  return state;
};

export default reducerSetAdmInformation;
