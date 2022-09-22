import React, { Component } from 'react'
import style from './style.module.css';
export default class Header extends Component {
  render() {
    return (
      <div className='bg-dark'>
        <div className='container' >
        <nav className="navbar navbar-expand-sm navbar-dark ">
  <a className="navbar-brand" href="#">Start Bootstrap</a>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        {/* <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a> */}
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">Link</a> */}
      </li>
      <li className="nav-item dropdown">
        {/* <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a> */}
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0">
      {/* <input className="form-control me-sm-2" type="text" placeholder="Search" /> */}
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <a href="#" className='home' style={{
        color:'white',
        textDecoration:'none'
        
      }}>Home</a>
      <a href="#" className={`${style.nav}`} >About</a>
      <a href="#" className={`${style.nav}`} >Contact</a>
    </form>
  </div>
</nav>
        </div>
      </div>
    )
  }
}
