import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"


function App() {


  return (
    <>
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </>
  )
}

export default App
