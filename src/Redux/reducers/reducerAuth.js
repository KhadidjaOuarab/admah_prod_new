import { SETLOGIN } from "../type/type";
const initState = {
  username: "",
  isLog: false,
};

const reducerAuth = (state = initState, action) => {
  //console.log("SETLOGINSETLOGINSETLOGINSETLOGINSETLOGIN");
  //console.log(state);
 // console.log("SETLOGINSETLOGINSETLOGINSETLOGINSETLOGIN");
  if (action.type === "SETLOGIN") {
    return { state: action.payload, isLog: true 
     
  }
 
  /* if (action.type === "IsLogin") {
    return {
      isLog: true,
    };
  }
  if (action.type === "NotLogin") {
    return {
      isLog: false,
    };
  }*/
 
}
return state;
}

export default reducerAuth;
