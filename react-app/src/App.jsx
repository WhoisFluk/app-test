import { Route,Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Table from "./assets/js/Table.jsx";
import Create from "./assets/js/Create.jsx";
import Update from "./assets/js/update.jsx";


function App() {
  return (
    <>
    <div className="row justify-content-center">
      <div className="col-lg-10 content-form py-4 px-4 ">
        <div className="row mt-4">
          <div className="col-lg-6 mt-3">
            <Navbar />
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
    <div className="preference">
    <Routes>        
      <Route path="/" />
      <Route path="/select"  element={<Table />}/>
      <Route path="/formUpdate"  element={<Update />}/>
      <Route path="/formIn"  element={<Create />}/>
    </Routes>
    </div>

    </>
  )
}

export default App
