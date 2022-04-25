import * as React from "react";
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/Gallery";
import Cicilan from "./pages/Cicilan";
import Bmi from "./pages/Bmi";
import Ppn from "./pages/Ppn";
import Decimal from "./pages/Decimal";
import Biner from "./pages/Biner";
import Oktal from "./pages/Oktal";
import Hexa from "./pages/Hexa"

function App() {
  return (
    <div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
      <div className="max-w-md">
        <div className="flex item-center justify-center mb-4 text-xs text-gray-600 font-semibold uppercase tracking-wide">
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/">
            Home
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/about">
            About
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/Gallery">
            Buku
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/cicilan">
            Cicilan
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/bmi">
            Bmi
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/ppn">
            Ppn
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/decimal">
            Decimal
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/biner">
            Biner
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/oktal">
            Oktal
          </Link>
          <Link className="mx-2 px-4 py-2 rounded -x1 hover:bg-gray-100 transition-all ease-in-out" to="/hexa">
            Hexa
          </Link>
        </div>
        <div className="p-6 w-full bg-white rounded-x1 shadow-lg">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/cicilan" element={<Cicilan/>}></Route>
            <Route path="/bmi" element={<Bmi/>}></Route>
            <Route path="/ppn" element={<Ppn/>}></Route>
            <Route path="/decimal" element={<Decimal/>}></Route>
            <Route path="/biner" element={<Biner/>}></Route>
            <Route path="/oktal" element={<Oktal/>}></Route>
            <Route path="/hexa" element={<Hexa/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
 