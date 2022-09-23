import React, { Component } from 'react'
import GlassesItem from './GlassesItem';
export default class ChangeGlasses extends Component {
    render() {
        const { url, name, price, desc } = this.props;

        return (
            <div>
                <div className="vglasses__card w-100" style={{
                    position: 'relative'
                }}  >
                    <div className="vglasses__model" id="avatar">
                        <div className="item" style={{
                            position: 'relative'
                        }}>
                            <img src="./img/model.jpg" width={400} alt="" />
                            <img src={url} width={230} alt="" style={{
                                position: 'absolute',
                                top: '120px',
                                left: '87px'
                            }} />
                        </div>
                    </div>
                    <div id="glassesInfo" className="vglasses__info" style={{
                        position: 'absolute',
                        top: '340px',
                        background: '#fcb481'
                    }}>
                        <div className="row" style={{
                            width: '426px',
                            height: '147px'
                        }}>
                            <div className="item " style={{
                                paddingLeft: '20px'
                            }}>
                                <h3>{name}</h3>
                                <a href="#" style={{
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    color: '#FFF',
                                    background: 'red',
                                    padding: '5px',
                                    textAlign: 'center'
                                }}>{price}</a>
                                <span style={{
                                    fontSize: '18px',
                                    marginLeft: '5px',
                                    color: 'green'
                                }}>Stocking</span>
                                <p className='text-light px-4w'>{desc} </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
