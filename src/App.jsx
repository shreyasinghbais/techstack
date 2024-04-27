import React from 'react';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import {Route, Routes} from 'react-router-dom'; 

const App = () => (
  <div className='container'> 
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/post/:id' Component={Post}/>        
    </Routes>
  </div>
);

export default App;

