import "./App.css";
import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-1/2 p-40 m-20 bg-red-200 rounded-xl">
        <Products />
        <h1 className="justify-center w-1/2 p-20 ml-10 text-green-700 border shadow-xl h-300 mt-7 m-500">
          REACT WITH VITE+TAILWIND
        </h1>
      </div>
    </Provider>
  );
}

export default App;
