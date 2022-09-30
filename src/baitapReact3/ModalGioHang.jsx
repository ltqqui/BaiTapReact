import React, { Component } from 'react'
export default class ModalGioHang extends Component {
  renderGioHang = () => {
    const { gioHang, xoaGioHang, tangGiam } = this.props;
    if(gioHang===[]){
      return <h3>khong co san pham</h3>
    }
    return gioHang.map((sp, index) => {
      return <tr key={index} style={{}}>
        <td style={{ paddingLeft: '40px' }} >{sp.maSP}</td>
        <td>
          <img src={sp.hinhAnh} width={85} height={75} alt="" />
        </td>
        <td style={{ paddingLeft: '20px' }}>{sp.tenSP}</td>
        <td style={{ paddingLeft: '  5px' }}>
          <button className='btn btn-primary text-center mx-2' onClick={() => {
            { tangGiam(sp.maSP, true) }
          }}>+</button>
          {sp.soLuong}
          <button className='btn btn-primary text-center mx-2' onClick={() => {
            { tangGiam(sp.maSP, false) }
          }}>-</button>
        </td>
        <td style={{ padding: ' 0 30px' }}>{sp.giaBan.toLocaleString()}</td>
        <td style={{ padding: ' 0 35px' }}>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
        <td>
          <button className='btn btn-danger' onClick={() => {
            { xoaGioHang(sp.maSP) }
          }}>Xóa</button>
        </td>
      </tr>
    })
  }

  // tongTien = () => {
  //   const {gioHang}=this.props
  //   gioHang.reduce((tongTien, spGiohang, index) => {
  //     return tongTien += spGiohang.soLuong * spGiohang.giaBan;
  //   }, 0)
  // }
  render() {

    return (

      <div>
        <div>
          {/* Button trigger modal */}

          {/* Modal */}
          <div className="modal fade" id="modalId2" tabIndex={-1} role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="table">
                      <thead>
                        <tr >
                          <th style={{ padding: ' 8px 30px' }}>Mã sản phẩm</th>
                          <th style={{ padding: ' 8px 30px' }}>Hình ảnh</th>
                          <th style={{ padding: '8px  30px' }}>Tên sản phẩm</th>
                          <th style={{ padding: '8px  30px' }}>Số lượng</th>
                          <th style={{ padding: '8px 30px' }}>Đơn giá</th>
                          <th style={{ padding: '8px 30px' }}>Thành Tiền</th>
                          {/* <button className='btn btn-danger'>Xóa</button> */}
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderGioHang()}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="5"></td>
                          <td className='text-success' style={{fontWeight:'900', fontSize:'20px'}}>Tổng tiền thanh toán</td>
                          <td style={{color:'blue', fontSize:'20px', fontWeight:'600'}}>{
                            this.props.gioHang.reduce((tongTien,spGioHang, index)=>{
                              return tongTien += spGioHang.soLuong * spGioHang.giaBan
                            },0).toLocaleString()
                          }
                          </td>
                        </tr>
                      </tfoot>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
