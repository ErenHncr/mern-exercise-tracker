import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
render(){
    return (
      <section id='navbar-container'>
          <nav className="navbar-grid">
            <Link to="/" className="navbar-brand">HOME</Link>
            <Link to="/user" className="navbar-brand">CREATE USER</Link>
            <Link to="/exerciseList" className="navbar-brand">EXERCISE LIST</Link>
          </nav> 
      </section>
    );
    }
}
