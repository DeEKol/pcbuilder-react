import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { CurrentObject } from './context';

function App() {
  const [objectForm, setObjectForm] = useState({});

  return (
    <CurrentObject.Provider value={{
      objectForm,
      setObjectForm
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </CurrentObject.Provider>
  )
}

export default App;
