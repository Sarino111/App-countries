
import React from 'react';
import { Route, Routes } from "react-router-dom";

// component
import Navigation from "./components/Navigation";

import Home from "./views/Home";
import Search from "./views/Search";
import List from "./views/List";

// styles
import './scss/_app.scss';

function App() {

  
  return (
    <div className="App">
      
      <header className="App-header">
        <Navigation/>
      </header>

      <main>
          <Routes>
            <Route path="/" Component={Home} end></Route>
            <Route path="/search" Component={Search}></Route>
            <Route path="/list" Component={List} ></Route>
          </Routes>
      </main>
    </div>
  );
}

export default App;
