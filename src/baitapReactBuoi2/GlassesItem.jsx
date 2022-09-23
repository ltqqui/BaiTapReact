import React, { Component } from 'react'

export default class GlassesItem extends Component {
  render() {
    const { prod ,change } = this.props;
    return (
      <div>
        <div className="item">
          <img src={prod.img} width={150} alt="" onClick={() => {
change(prod)
          }} style={
            {
              cursor: 'pointer',
            }
          } />
        </div>
      </div>
    )
  }
}
