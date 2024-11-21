import { HttpMethodContextProvider } from "./context/HttpMethodProvider";
import Routes from "./Routes";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";

function App() {

  return (
    <HttpMethodContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </HttpMethodContextProvider>
  )
}

export default App