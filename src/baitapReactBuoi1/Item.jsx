import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
     <div>
        <div className='container' style={{
          marginTop:'120px'
        }}>
        <div className='row'>
          <div className="col-4" style={{
            padding:'0 70px',
            textAlign:'center',
           background:'#f8f9fa'
          }}>
          <div className='item-header' style={{
            backgroundColor:'#0D6EFD',
            width:'70px',
            padding:'15px',
            textAlign:'center',
            borderRadius:'0.3rem',
            // paddingLeft:'20px'
            marginLeft:'110px'
          }}>
          <i class="fa-solid fa-check-to-slot" style={{
            fontSize:'28px',
            color:'#fff'
          }}></i>
          </div>
          <div className='item-body'>
            <h2 style={{
              fontWeight:'700',
              fontSize:'25px',
              marginTop:'20px'
            }}>Fresh new layout</h2>
            <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
          </div> <div className="col-4" style={{
            padding:'0 70px',
            textAlign:'center',
           background:'#f8f9fa'
          }}>
          <div className='item-header' style={{
            backgroundColor:'#0D6EFD',
            width:'70px',
            padding:'15px',
            textAlign:'center',
            borderRadius:'0.3rem',
            // paddingLeft:'20px'
            marginLeft:'110px'
          }}>
            
          <i className="fa-solid fa-cloud-arrow-down" style={{
            fontSize:'28px',
            color:'#fff'
          }}></i>
          </div>
          <div className='item-body'>
            <h2 style={{
              fontWeight:'700',
              fontSize:'25px',
              marginTop:'20px'
            }}>Free to download</h2>
            <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
          </div>
          </div> <div className="col-4" style={{
            padding:'0 70px',
            textAlign:'center',
           background:'#f8f9fa'
          }}>
          <div className='item-header' style={{
            backgroundColor:'#0D6EFD',
            width:'70px',
            padding:'15px',
            textAlign:'center',
            borderRadius:'0.3rem',
            // paddingLeft:'20px'
            marginLeft:'110px'
          }}>
          <i className="fa-solid fa-barcode" style={{
            fontSize:'28px',
            color:'#fff'
          }}></i>
          </div>
          <div className='item-body'>
            <h2 style={{
              fontWeight:'700',
              fontSize:'25px',
              marginTop:'20px'
            }}>Jumbotron hero header</h2>
            <p>The heroic part of this template is the jumbotron hero header!</p>
          </div>
          </div> <div className="col-4" style={{
            padding:'0 70px',
            textAlign:'center',
           background:'#f8f9fa',
           marginTop:'50px'
          }}>
          <div className='item-header' style={{
            backgroundColor:'#0D6EFD',
            width:'70px',
            padding:'15px',
            textAlign:'center',
            borderRadius:'0.3rem',
            // paddingLeft:'20px'
            marginLeft:'110px'
          }}>
          <i className="fa-brands fa-bootstrap" style={{
            fontSize:'28px',
            color:'#fff'
          }}></i>
          </div>
          <div className='item-body'>
            <h2 style={{
              fontWeight:'700',
              fontSize:'25px',
              marginTop:'20px'
            }}>Feature boxes</h2>
            <p>We've created some custom feature boxes using Bootstrap icons!</p>
          </div>
          </div> <div className="col-4" style={{
            padding:'0 70px',
            textAlign:'center',
           background:'#f8f9fa',
           marginTop:'50px'
          }}>
          <div className='item-header' style={{
            backgroundColor:'#0D6EFD',
            width:'70px',
            padding:'15px',
            textAlign:'center',
            borderRadius:'0.3rem',
            // paddingLeft:'20px'
            marginLeft:'110px'
          }}>
          <i className="fa-solid fa-code" style={{
            fontSize:'28px',
            color:'#fff'
          }}></i>
          </div>
          <div className='item-body'>
            <h2 style={{
              fontWeight:'700',
              fontSize:'25px',
              marginTop:'20px'
            }}>Simple clean code</h2>
            <p>We keep our dependencies up to date and squash bugs as they come!</p>
          </div>
          </div> <div className="col-4" style={{
            padding:'0 70px',
            textAlign:'center',
           background:'#f8f9fa',
           marginTop:'50px'
          }}>
          <div className='item-header' style={{
            backgroundColor:'#0D6EFD',
            width:'70px',
            padding:'15px',
            textAlign:'center',
            borderRadius:'0.3rem',
            // paddingLeft:'20px'
            marginLeft:'110px'
          }}>
          <i class="fa-solid fa-square-check" style={{
            fontSize:'28px',
            color:'#fff'
          }}></i>
          </div>
          <div className='item-body'>
            <h2 style={{
              fontWeight:'700',
              fontSize:'25px',
              marginTop:'20px'
            }}>A name you trust</h2>
            <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
          </div>
          </div>
        </div>
        </div>

     </div>
    )
  }
}
