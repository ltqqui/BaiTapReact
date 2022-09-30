import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import Footer from './Footer'
import Header from './Header'
import ModalGioHang from './ModalGioHang'
import ModalSanPham from './ModalSanPham'
import SanPham from './SanPham'
const data=[
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg","soLuong":1    },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg", "soLuong":1 },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" ,"soLuong":1 },
    { "maSP": 4, "tenSP": "Samsung Galaxy Z Fold4", "manHinh": "AMOLED, 1242 x 2688 Pixels", "heDieuHanh": "Android 12, One UI 4.1.1", "cameraSau": "Camera chính: 50MP , Camera góc siêu rộng: 12MP", "cameraTruoc": "10MP (bên ngoài) + 4MP (dưới màn hình)", "ram": "12 GB", "rom": "256 GB", "giaBan": 40990000 , "hinhAnh": "./img/samsung_galaxy_z_fold-4.jpg" ,"soLuong":1 },
    { "maSP": 5, "tenSP": "iPad Air 5 (2022) 64GB", "manHinh": "Liquid Retina, 2360 x 1640 pixel", "heDieuHanh": "iPadOS ", "cameraSau": "12MP", "cameraTruoc": "12MP", "ram": "8 GB", "rom": "64 GB", "giaBan": 14990000  , "hinhAnh": "./img/ipad_air_5.png" ,"soLuong":1 },
    { "maSP": 6, "tenSP": "Samsung Galaxy Z Fold4", "manHinh": "AMOLED, 1242 x 2688 Pixels", "heDieuHanh": "Android 12, One UI 4.1.1", "cameraSau": "Camera chính: 50MP , Camera góc siêu rộng: 12MP", "cameraTruoc": "10MP (bên ngoài) + 4MP (dưới màn hình)", "ram": "12 GB", "rom": "256 GB", "giaBan": 40990000 , "hinhAnh": "./img/samsung_galaxy_z_fold-4.jpg" ,"soLuong":1 },
    { "maSP": 7, "tenSP": "Samsung Galaxy Z Fold4", "manHinh": "AMOLED, 1242 x 2688 Pixels", "heDieuHanh": "Android 12, One UI 4.1.1", "cameraSau": "Camera chính: 50MP , Camera góc siêu rộng: 12MP", "cameraTruoc": "10MP (bên ngoài) + 4MP (dưới màn hình)", "ram": "12 GB", "rom": "256 GB", "giaBan": 40990000 , "hinhAnh": "./img/samsung_galaxy_z_fold-4.jpg" ,"soLuong":1 },
    { "maSP": 8, "tenSP": "Samsung Galaxy Z Fold4", "manHinh": "AMOLED, 1242 x 2688 Pixels", "heDieuHanh": "Android 12, One UI 4.1.1", "cameraSau": "Camera chính: 50MP , Camera góc siêu rộng: 12MP", "cameraTruoc": "10MP (bên ngoài) + 4MP (dưới màn hình)", "ram": "12 GB", "rom": "256 GB", "giaBan": 40990000 , "hinhAnh": "./img/samsung_galaxy_z_fold-4.jpg" ,"soLuong":1 },
    { "maSP": 9, "tenSP": "Samsung Galaxy Z Fold4", "manHinh": "AMOLED, 1242 x 2688 Pixels", "heDieuHanh": "Android 12, One UI 4.1.1", "cameraSau": "Camera chính: 50MP , Camera góc siêu rộng: 12MP", "cameraTruoc": "10MP (bên ngoài) + 4MP (dưới màn hình)", "ram": "12 GB", "rom": "256 GB", "giaBan": 40990000 , "hinhAnh": "./img/samsung_galaxy_z_fold-4.jpg" ,"soLuong":1 }
  ]
export default class BaiTapGioHang extends Component {
    state={
    newTenSp:"Iphone XS Max",
    newImg:'../img/applephone.jpg',
    newManHinh:"OLED, 6.5, 1242 x 2688 Pixels",
    newHeDieuhanh:"iOS 12",
    newCamSau:"Chính 12 MP & Phụ 12 MP",
    newCamTruoc:"7 MP",
    newRam:'4 GB',
    newRom:'64GB',
    newGiaBan:27000000,
    gioHang:[]
    }
    xemChiTiet=(idClick)=>{
        this.setState({
            newTenSp:idClick.tenSP,
            newImg:idClick.hinhAnh,
            newManHinh:idClick.manHinh,
            newHeDieuhanh:idClick.heDieuHanh,
            newCamSau:idClick.cameraSau,
            newCamTruoc:idClick.cameraTruoc,
            newRam:idClick.ram,
            newRom:idClick.rom,
            newGiaBan:idClick.giaBan,
        })
    }

    themGioHang=(sanPhamClick)=>{
        let spGioHang=
            { "maSP": sanPhamClick.maSP, "tenSP": sanPhamClick.tenSP, "manHinh":sanPhamClick.manHinh, "heDieuHanh": sanPhamClick.heDieuHanh, "cameraSau": sanPhamClick.cameraSau, "cameraTruoc": sanPhamClick.cameraTruoc, "ram": sanPhamClick.ram, "rom": sanPhamClick.rom, "giaBan": sanPhamClick.giaBan, "hinhAnh": sanPhamClick.hinhAnh, "soLuong":sanPhamClick.soLuong }
        
        let gioHangCapNhat=[...this.state.gioHang];
        let index=gioHangCapNhat.findIndex(sp=>sp.maSP===spGioHang.maSP);
        if(index!==-1){
            gioHangCapNhat[index].soLuong+=1
        }
        else
        {
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
         gioHang:gioHangCapNhat
        })
        console.log(sanPhamClick)

    }

    xoaGioHang=(sanPhamClick)=>{
        let capNhatGiohang=this.state.gioHang.filter(sp=>sp.maSP!==sanPhamClick);
        this.setState({
            gioHang:capNhatGiohang
        })
    }

    tangGiam=(maSp,tangGiam)=>{
        let gioHangCapNhat=[...this.state.gioHang];
        let index=gioHangCapNhat.findIndex(sp=>sp.maSP==maSp);
        if(tangGiam){
            gioHangCapNhat[index].soLuong+=1;
        }
        else {
            if(gioHangCapNhat[index].soLuong>1){
                gioHangCapNhat[index].soLuong-=1
            }
        }
        this.setState({
            gioHang:gioHangCapNhat
        })

    }
    render() {
        let tongSoLuong=this.state.gioHang.reduce((tsl,spGH,inidex)=>{
            return tsl +=spGH.soLuong;
        },0)
        return (
            <div>
                <Header tongSoLuong={tongSoLuong} />
                <div className="container"> 
                <div>
                <h1 style={{textAlign:'center' ,padding:'90px'}}>Danh Sách Sản Phẩm</h1>
                </div>
                    <DanhSachSanPham prod={data} xemChiTiet={this.xemChiTiet} 
                    themGioHang={this.themGioHang}
                    />
                    </div>
                    <div>
                    </div>
                    <ModalSanPham  imgItem={this.state.newImg} tenSP={this.state.newTenSp} manHinh={this.state.newManHinh} heDieuHanh={this.state.newHeDieuhanh} camSau={this.state.newCamSau} camTruoc={this.state.newCamTruoc} ram={this.state.newRam} rom={this.state.newRom} giaBan={this.state.newGiaBan} />
                    <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiam={this.tangGiam}/>
                    <Footer/>
                </div>
           
        )
    }
}
