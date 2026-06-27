import React from 'react'
import SpareSell from './Spare sell/SpareSell';
import Home from './home/Home';
import Form from './Form/Form';
import Floatingicon from './Float/Floatingicon';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <SpareSell /> */}
      {/* <Home /> */}
      <Form/>
      <Floatingicon/>
      </BrowserRouter>
    </div>
  )
}

export default App
