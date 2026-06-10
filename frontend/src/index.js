import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="bottom-center" autoClose={5000} />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
