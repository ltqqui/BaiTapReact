import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    renderProducts=()=>{
        const { prod , xemChiTiet, themGioHang }=this.props;
            return prod.map((pro,index)=>{
                return <div className='col' key={index}>
               <SanPham Item={pro} xemChiTiet={xemChiTiet} themGioHang={themGioHang}/>
                </div>
            })
        }
  render() {
    return (
        <div className='row'>
        <div className="row row-cols-1 row-cols-md-3 g-5">
       {this.renderProducts()}
     </div>
     </div>
    )
  }
}
