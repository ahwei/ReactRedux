import { createStore, applyMiddleware } from "redux";
import myApp from "../reducers";

//Store
const store = createStore(myApp);

export default store;
