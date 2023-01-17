import {SETPRODUCT} from "../type/type"
const initState = {
  products: [{}]
};



const reducerSetProduct = (state = initState, action) => {
 // console.log("Appel du Store et transmettre action ???????????");
 // console.log(action.payload );
  // Check to see if the reducer cares about this action
  if (action.type === SETPRODUCT) {
    // If so, make a copy of `state`
   
    return {
     //state..,
      state: action.payload ,
      
    };
  }
  // otherwise return the existing state unchanged

  return state;
};

export default reducerSetProduct;
