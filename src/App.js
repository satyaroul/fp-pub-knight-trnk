import React, { Component } from "react";
import "./App.css";
import Riders from "./component/Riders";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from "./component/FAQ";
import Gallery from "./component/Gallery";
import Swipers from "./component/Swipers";

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Riders />}/>
          <Route path="./FAQ" element={<FAQ />}/>
          <Route path="./Gallery" element={<Gallery />}/>
        </Routes>
        </BrowserRouter>
        // <div>
        //   <Swipers />
        // </div>
    )
  }
}

export default App;