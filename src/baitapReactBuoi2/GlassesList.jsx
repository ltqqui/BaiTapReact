import React, { Component } from 'react'
import GlassesItem from './GlassesItem'

export default class GlassesList extends Component {
  renderList = () => {
    const { products , change} = this.props
    return products.map((prod, index) => {
      return <div className="col" style={{
        alignSelf:'center'
      }} key={index}>
        <GlassesItem prod={prod} change={change}/>
      </div>
    })
  }
  render() {
    return (
      <div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 bg-light text-center pt-5" >
          {this.renderList()}
        </div>
      </div>
    )
  }
}
