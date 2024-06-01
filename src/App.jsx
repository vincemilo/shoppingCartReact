import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
