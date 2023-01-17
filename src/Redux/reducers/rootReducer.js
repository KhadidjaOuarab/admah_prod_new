import { combineReducers } from "redux";
import reducerAuth from "./reducerAuth";
import reducerSetProduct from "./reducerSetProduct";
import createAdmReducer from "./createAdmReducer";
import reducerSetProductEdit from "./reducerSetProductEdit";
import queryAdmReducer from "./queryAdmReducer";
const rootReducer = combineReducers({
  reducerAuth: reducerAuth,
  reducerSetProduct: reducerSetProduct,
  createAdmReducer: createAdmReducer,
  reducerSetProductEdit: reducerSetProductEdit,
  queryAdmReducer: queryAdmReducer,
});

export default rootReducer;
