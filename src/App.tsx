import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import './App.css';

import reducer from './Context/reducer';
import store from './Context/store';

import AppContext from './Context/Context'
import Header from './Components/Header';
import HeroCards from './Components/HeroCards';

function App() {
  const [state, dispatch]= useReducer(reducer, store);
  const [loadMore, setLoadMore] = useState(6);


  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
      .then(res => {
        const heroList = res.data;
        dispatch({ type: 'INIT', payload: [...heroList].slice(0, loadMore) })
      });
  }, [])


  return <AppContext.Provider value={{...state, dispatch}}>
    <Header>Superhero App</Header>
    <HeroCards state={state} />
  </AppContext.Provider>
}

export default App;
