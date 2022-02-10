import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";
import authReducer from "./auth/authReducer";
import getAuthReducer from "redux/getAuth/getAuthReducer";
import bannerContentReducer from "redux/bannerContent/bannerContentReducer";
import finishUpdateReducer from "redux/finishUpdate/finishUpdateReducer";
import aboutContentReducer from "redux/aboutContent/aboutContentReducer";
import howWorkContentReducer from "redux/howWorkContent/howWorkContentReducer";
import roadmapContentReducer from "redux/roadmapContent/roadmapContentReducer";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
  auth: authReducer,
  getAuth: getAuthReducer,
  bannerContent: bannerContentReducer,
  finishUpdate: finishUpdateReducer,
  aboutContent: aboutContentReducer,
  howWorkContent: howWorkContentReducer,
  roadmapContent: roadmapContentReducer
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
