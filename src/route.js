import React from "react";
import ExpensesTracker from "./pages/mainPage/index";
import { IsNotpage } from "./pages/isNotpage";
import {Route, Routes, BrowserRouter} from "react-router-dom";

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpensesTracker />} />
        <Route path="/" element={<IsNotpage />} />
      </Routes>
    </BrowserRouter>
  );
};
