import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Component/Jsx_Files/DashboardLayout";
import Portfolio from "./Component/Jsx_Files/Portfolio";
import DiveDeep from "./Component/Jsx_Files/DiveDeep";
import Analysis from "./Component/Jsx_Files/Analysis";
import Login from "./Component/Jsx_Files/Login";
import "./index.css"
import Error404 from "./Component/Jsx_Files/Error404";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/project" element={<DashboardLayout/>}>
            <Route path="portfolio" element={<Portfolio />} exact/>
            <Route path="dive-deep" element={<DiveDeep/>}/>
            <Route path="analysis" element={<Analysis/>}/>
          </Route>

          <Route path="*" element={<Error404 />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
