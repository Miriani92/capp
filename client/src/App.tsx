import { Fragment } from "react";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from "./Global.styled";
import { Chart } from "./pages/Chart";
import { Navbar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
