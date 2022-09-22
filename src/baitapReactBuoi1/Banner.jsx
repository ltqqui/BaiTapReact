import React, { Component } from 'react'
import style from './style.module.css';
export default class Banner extends Component {
  render() {
    return (
      <div className='container'>
        <div className='text-center' style={{
            marginTop:'100px',
            padding:'0 120px'
        }}>
        <h1 style={{
            fontWeight:'700',
            fontSize:'3rem'
        }}  >A warm welcome!</h1>
        <p style={{
            fontSize:'24px',
            marginBottom:'25px'
        }}>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <a href="#"  className={`${style.callToAction}`}>Call to action</a>
        </div>
       
      </div>
    )
  }
}
