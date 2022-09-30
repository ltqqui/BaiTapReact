import React, { Component } from 'react'

export default class SanPham extends Component {

    render() {

        const { Item, xemChiTiet, themGioHang } = this.props;
        return (
            <div className='card' style={{borderRadius:'10px' }}>
                <img src={Item.hinhAnh} alt="..." height={350} className=" w-100" style={{ objectFit: 'contain' }} />
                <div className='card-body'>
                    <h3 style={{ textAlign:'center'}} >{Item.tenSP}</h3>
                    <div className='btnButton' style={{display:'flex', justifyContent:'space-between'}}>
                        <button className='btn btn-success' style={{padding:'0.375rem 1.2rem'}} data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                            xemChiTiet(Item)
                        }}>Xem chi tiết</button>
                        <button className='btn btn-danger  'style={{}} onClick={()=>{
                            themGioHang(Item);
                        }} >Thêm sản phẩm</button>
                    </div>
                </div>
            </div>
        )
    }
}
