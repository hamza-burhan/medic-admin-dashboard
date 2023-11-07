import { useState, createContext } from 'react';
import Login from './Screens/Login';
import FullLayout from './Screens/FullLayout';
import Dashboard from './Screens/Dashboard';
import Stock from './Screens/Stock';
import SalesPerson from './Screens/SalesPerson';
import { ContextProvider } from "./assets/context"

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<FullLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='stock' element={<Stock />} />
            <Route path='salesPerson' element={<SalesPerson />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
