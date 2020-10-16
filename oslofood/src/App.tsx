import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Restaurant from './pages/Restaurant';
import Bar from './pages/Bar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/restaurant" component={Restaurant}></Route>
        <Route path="/bar" component={Bar}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/" component={Landing}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/*
background-color: #484848;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%230b0b0b' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23484848' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23454445' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23414142' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%233e3d3f' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%233a393d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2337363a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23343237' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23302f34' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%232d2b31' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%232a282f' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2327252c' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23242129' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23201e27' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%231d1b24' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%231a1821' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2317151f' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2314111c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23110c1a' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
*/
