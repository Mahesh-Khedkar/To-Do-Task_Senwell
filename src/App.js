import React from 'react';
import Landing from './Home/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Home/Create';
import Display from './Home/Display';
import Update from './Home/Update';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/display" element={<Display/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
