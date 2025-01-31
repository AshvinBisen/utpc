// import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Pages/home/Home';
import Presale from './Pages/Presale';
import Termandcondition from './Pages/termandcondition';
import Privacy from "./Pages/Privacy";

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/termandcondition" element={<Termandcondition />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
