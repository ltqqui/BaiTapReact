import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className='bg-dark' style={{
            height:'120px'
        }}>
            <p className='text-light text-center pt-5 pl-2'>Copyright © Your Website 2022</p>
        </div>
      </div>
    )
  }
}
