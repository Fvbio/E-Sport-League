import { useState } from 'react'
import './App.css'
import "./assets/css/style.css";

import Home from './components/Home'

import { RouterProvider } from 'react-router-dom';
import router from './service/router';



// const App = () => <RouterProvider router={ router } />;

function App() {
  return <RouterProvider router={ router } />

}

export default App
