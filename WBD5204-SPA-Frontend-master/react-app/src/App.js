import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Challenges from './components/ChallengeComponents/Challenges';
import Footer from './components/Footer/Footer';
import Login from './components/Login';
import Pokemons from './components/PokemonComponents/Pokemons';
import PokeShop from './components/PokeShop';
import Profile from './components/Profile';
import Register from './components/RegisterComponents/Register';
import StartOne from './components/StartOne';
import StartTwo from './components/StartTwo';


import './styles/main.scss';
import {Context} from './helpers/Context';


function App() {

  const [ create, setCreate ] = useState(false);
  const [ edit, setEdit ] = useState({});
  const [ topBtn, setTopBtn ] = useState(false);
  const [ scrollToTop, setScrollToTop ] = useState(false);
  const [ loggedIn, setLoggedIn ] = useState(false);

  function handleTopBtn(e) {
    if ( e.target.scrollTop === 0 ) {
        setTopBtn(false);
    } else { 
        setTopBtn(true);
    }
  }

  return (
    <Router>
      <div className="content">

          <Context.Provider value={{ create, setCreate, edit, setEdit, topBtn, setTopBtn, scrollToTop, setScrollToTop, handleTopBtn, loggedIn, setLoggedIn }}>
              <Routes>
                  <Route path="/" element={<StartOne/>} />
                  <Route path="/start" element={<StartTwo/>} />

                  <Route path="/login" element={<Login/>} />
                  <Route path="/register" element={<Register/>} />

                  <Route path="/challenges" element={<Challenges/>} />
                  <Route path="/pokemons" element={<Pokemons/>} />
                  <Route path="/pokeshop" element={<PokeShop/>} />
                  <Route path="/profile" element={<Profile/>} />
              </Routes>
          </Context.Provider>       

      </div>
      
      <Footer></Footer>
    </Router>
  )

}

export default App;
