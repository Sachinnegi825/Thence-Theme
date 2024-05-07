import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/assets/css/register.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Success from "./components/Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppRouter;
