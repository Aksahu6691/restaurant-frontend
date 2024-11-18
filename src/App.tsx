import { HttpMethodContextProvider } from "./context/HttpMethodProvider";
import Routes from "./Routes";

function App() {

  return (
    <HttpMethodContextProvider>
      <Routes />
    </HttpMethodContextProvider>
  )
}

export default App