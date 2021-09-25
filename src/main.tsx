import React from "react"
import ReactDOM from "react-dom"
import { ToastContainer } from "react-toastify"
import "./reset.css"
import "./colors.css"
import "./index.css"
import './styles/typography.css'
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById("root")
)
