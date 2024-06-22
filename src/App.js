import './App.css';
import React, { Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<News key='General' cat='general'/>} />
        <Route exact path="/spo" element={<News key='Sports' cat='sports'/>} />
        <Route exact path="/ent" element={<News key='Entertainment' cat='entertainment'/>} />
        <Route exact path="/tec" element={<News key='Technology' cat='technology'/>} />
        <Route exact path="/sci" element={<News key='Science' cat='science'/>} />
        <Route exact path="/bus" element={<News key='Business' cat='business'/>} />
        </Routes>
      </Router> 
      </>
    )
  }
}
