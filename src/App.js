
import React from 'react';
import PageBoutique from './components/PageBoutique';
import PageAccueil from './components/PageAccueil';

import'./css/App.css';
import {
  BrowserRouter, Routes, Route} from 'react-router-dom'
  

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/' element = {<PageAccueil/>}/>
                <Route path='/PageBoutique' element = {<PageBoutique/>}/>
            </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;