import React , {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Adress from "./profile/Adress";
import Full  from "./profile/Full name";
import Profile from "./profile/ProfilePhoto";
const App = () => (
 <div>
   <Adress></Adress>
   <Full ></Full>
   <Profile />
   
   </div>
);
export default App;