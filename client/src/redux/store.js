import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
  auth: authReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
