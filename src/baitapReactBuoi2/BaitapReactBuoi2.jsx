import React, { Component } from 'react'
import ChangeGlasses from './ChangeGlasses'
import GlassesItem from './GlassesItem'
import GlassesList from './GlassesList'
const products = [
  {
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "img": "./img/g1.jpg",
    "url": "./img/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 1. "
  },
  {
    "id": 2,
    "price": 50,
    "name": "GUCCI G8759H",
    "img": "./img/g2.jpg",
    "url": "./img/v2.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 2. "
  },
  {
    "id": 3,
    "price": 30,
    "name": "DIOR D6700HQ",
    "img": "./img/g3.jpg",
    "url": "./img/v3.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 3. "
  },
  {
    "id": 4,
    "price": 70,
    "name": "DIOR D6005U",
    "img": "./img/g4.jpg",
    "url": "./img/v4.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 4. "
  },
  {
    "id": 5,
    "price": 40,
    "name": "PRADA P8750",
    "img": "./img/g5.jpg",
    "url": "./img/v5.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 5. "
  },
  {
    "id": 6,
    "price": 60,
    "name": "PRADA P9700",
    "img": "./img/g6.jpg",
    "url": "./img/v6.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 6. "
  },
  {
    "id": 7,
    "price": 80,
    "name": "FENDI F8750",
    "img": "./img/g7.jpg",
    "url": "./img/v7.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 7. "
  },
  {
    "id": 8,
    "price": 100,
    "name": "FENDI F8500",
    "img": "./img/g8.jpg",
    "url": "./img/v8.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 8. "
  },
  {
    "id": 9,
    "price": 60,
    "name": "FENDI F4300",
    "img": "./img/g9.jpg",
    "url": "./img/v9.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 9. "
  }
]


export default class BaitapReactBuoi2 extends Component {
  state = {
    url: './img/v1.png', 
    name: "GUCCI G8850U",
    price: 30,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip 1. "
  }
  change=(infoClick)=>{
   this.setState({
    url:infoClick.url,
    name:infoClick.name,
    price:infoClick.price,
    desc :infoClick.desc
   })
  }
  render() {
    return (
      <div style={{
        background: 'url("./img/background.jpg")',
      }}>
        <div className='container' >
          <div className="row" style={{
            paddingTop: '50px',
            marginLeft: '80px'
          }}>
            <div className="col-6">
              <img src="./img/model.jpg" width={400} alt="" />
            </div>
            <div className='col-6'>
              <div className="col-5 vglasses__right p-0">
                <ChangeGlasses url={this.state.url} name={this.state.name} price={this.state.price} desc={this.state.desc} />
              </div>

            </div>
          </div>
          <GlassesList products={products} change={this.change}/>
        </div>
      </div>

    )
  }
}

// 