import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"
import { useContext } from "react"
import { UserContext } from "./providers/UserContext"
import { Loading } from "./components/Loading"


function App() {

  const {loadingPage} = useContext(UserContext)

  return (
    <>
      {loadingPage ? <Loading /> : <RoutesMain />}
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
