import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const { tongSoLuong}=this.props;
        return (
            <div style={{position:'fixed', width:'100%', zIndex:'1'}}>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                    <a className="navbar-brand" href="#" style={{fontSize:'30px', marginLeft:'20px', color:'#fff', fontWeight:'700'}}>CyberSoft</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        </ul>
                        <button className='btn' data-bs-toggle="modal" data-bs-target="#modalId2" style={{marginRight:'30px',position:'relative'}}>
                            <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:'35px'}}></i>
                            <div className='btn btn-success' style={{
                                borderRadius:'100%',  textAlign:'center', position:'absolute', top:-5,left:'4px', fontSize:'10px',fontWeight:'700'
                            }}>{tongSoLuong}</div>
                             </button>
                    </div>
                </nav>

            </div>
        )
    }
}
