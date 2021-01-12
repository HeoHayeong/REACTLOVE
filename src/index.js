import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';

import './index.css';
import Home from './home';
import Detail from './detail';
import Shop from './shop';
import Chat from './Chat';



function Index() {
  
  return (
    
    <div class="wrapper">
      <nav>
        <div class="menu-icon">
          <i class="fa fa-bars fa-2x"></i>
        </div>
        <div class="logo">
          치맥한모금
        </div>
        <div class="menu">
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/ShopImporting">쇼핑</Link></li>
            <li><Link to="/ChatImporting">채팅</Link></li>
          </ul>
        </div>
      </nav>

    <header>
        <Route exact path="/"><Home/></Route> 
        <Route path="/ShopImporting/DetailImporting" component={withRouter(Detail)}/>
        <Route path="/ShopImporting" component={withRouter(Shop)}/>
        <Route path="/ChatImporting" component={withRouter(Chat)}/>
    </header>
    <div class="content">
      
    </div>
  </div>
  );
}



ReactDOM.render(<BrowserRouter><Index /></BrowserRouter>,document.getElementById('root'));


reportWebVitals();
