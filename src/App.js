import React from 'react';

import Tform from './tokkenauth/Tform';
import Tokhome from './tokkenauth/Tokhome';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>

 {/* Simple Javascript Login authentication Form */}

   <BrowserRouter>
    <Routes>
      <Route path="/tokhome" element={<Tokhome />}/>
      <Route path="/" element={<Tform />}/>
    </Routes>    
  </BrowserRouter> 
    
   </>
  );
}

export default App;
