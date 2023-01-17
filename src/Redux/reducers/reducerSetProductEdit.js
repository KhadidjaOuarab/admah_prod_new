import {SELECTEDADM} from "../type/type"
const initState = {
  products: {},
};



const reducerSetProductEdit = (state = initState, action) => {
 // console.log("Appel du Store et transmettre action ???????????");
 // console.log(action.payload );
  // Check to see if the reducer cares about this action
  if (action.type === SELECTEDADM) {
    // If so, make a copy of `state`
    console.log("action.payloadaction.payloadaction.payloadaction.payloadaction.payload");
    console.log(action.payload);
    console.log("action.payloadaction.payloadaction.payloadaction.payloadaction.payload");
  
    return {
    //  ...state,
      state: action.payload ,
      
    };
  }
  // otherwise return the existing state unchanged

  return state;
};

export default reducerSetProductEdit;
