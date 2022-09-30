import React, { Component } from 'react'
import SanPham from './SanPham'
export default class ModalSanPham extends Component {
  render() {
const {imgItem, tenSP, manHinh, heDieuHanh, camSau, camTruoc, ram, rom ,giaBan }=this.props;
    return (
      <div>
        {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
    Launch
  </button> */}
  <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitleId">CYBERSOFT</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
       <div className='row'>
       <div className="col-4">
              <h3 className='text-dark mx-5'>{tenSP}</h3>
            <img src={imgItem} height={350} className="w-100" style={{objectFit:'contain'}} alt="" />

            </div>
        <div className="col-8">
              <h3>Chi tiết sản phẩm</h3>
              <div className='table'>
                <thead>
                
                    <tr>
                        <th >Màn hình</th>
                        <td>{manHinh}</td>
                    </tr>

                    <tr>
                        <th >Hệ điều hành</th>
                        <td>{heDieuHanh}</td>
                    </tr>
                    
                    <tr>
                        <th >Cam Trước </th>
                        <td>{camTruoc}</td>
                    </tr>
                     
                    <tr>
                        <th >Cam sau </th>
                        <td>{camSau}</td>
                    </tr>
                     
                    <tr>
                        <th >Ram </th>
                        <td>{ram}</td>
                    </tr>
                     
                    <tr>
                        <th >Rom </th>
                        <td>{rom}</td>
                    </tr>
                     
                    <tr>
                        <th >Gia bán </th>
                        <td>{giaBan}</td>
                    </tr>
                
                </thead>
                
              </div>
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
    )
  }
}
