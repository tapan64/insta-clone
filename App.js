import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import ProductReducer from "./redux/reducers/ProductReducer";
import UserReducer from "./redux/reducers/UserReducer";
import themeReducers from "./redux/reducers/themeReducers";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./redux/actions/UserActions";
import { useNetInfo } from "@react-native-community/netinfo";
import { composeWithDevTools } from "redux-devtools-extension";
import TestAnimation from "./screens/TestAnimation";
export default function App() {
  const allReducers = combineReducers({
    themeReducers,
  });
  const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const netInfo = useNetInfo();
  // console.log(netInfo.type);
  // console.log(netInfo.isConnected);
  // console.log(netInfo.isInternetReachable);

  return (
    <Provider store={store}>
      <LoadingScreen />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
