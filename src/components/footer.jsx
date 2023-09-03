import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <div className='m-0 p-5' style={{backgroundColor:'#ff007f', color:'#fff'}}>
        <Container>
            <Row>
            <Col xs={12} md={6} lg={3}>
                <h1>ABOUT</h1>
                <p>
                    High-Quality Exercise Equipment,
                    Well-Designed Space and Facility,
                    Personal Training Services
                    are provided to keep our customer the way they
                    want to workout
                </p>
            </Col>

            <Col xs={12} md={6} lg={3}>
                <h1>Contact</h1>
                <p><i class="bi bi-envelope-paper-heart"></i> DrgonFitness@gmail.com</p>
                <p><i class="bi bi-telephone"></i> 776754321</p>
                <p><i class="bi bi-browser-chrome"></i> www.DragonFitness.com</p>
                <p><i class="bi bi-telephone"></i> 876858390</p>
            </Col>

            <Col xs={12} md={6} lg={3}>
                <h1>Branch</h1>
                <p><i class="bi bi-house-heart"></i> Seattle</p>
                <p><i class="bi bi-house-heart"></i> Boston</p>
                <p><i class="bi bi-house-heart"></i> San Diego</p>
                <p><i class="bi bi-house-heart"></i> Atlanta</p>
                <p><i class="bi bi-house-heart"></i> Chicago</p>
            </Col>

            <Col xs={12} md={6} lg={3}>
                <h1>Programs</h1>
                <p><i class="bi bi-calendar4-event"></i> Weight lifting</p>
                <p><i class="bi bi-calendar4-event"></i> treadmill running</p>
                <p><i class="bi bi-calendar4-event"></i> Fast pushup's</p>
            </Col>
            </Row>

            <hr style={{border:'3px solid'}}/>

            <div className='text-center'>
            <i style={{padding:'20px',
                fontSize:'30px',
                width:'50px',
                textAlign:'center',
                textDecoration:'none',
                margin:'5px 2px'
                }} class="bi bi-instagram"></i>

            <i style={{padding:'20px',
                fontSize:'30px',
                width:'50px',
                textAlign:'center',
                textDecoration:'none',
                margin:'5px 2px'
                }} class="bi bi-facebook"></i>

            <i style={{padding:'20px',
                fontSize:'30px',
                width:'50px',
                textAlign:'center',
                textDecoration:'none',
                margin:'5px 2px'
                }} class="bi bi-twitter"></i>
            
            <i style={{padding:'20px',
                fontSize:'30px',
                width:'50px',
                textAlign:'center',
                textDecoration:'none',
                margin:'5px 2px'
                }} class="bi bi-youtube"></i>
            </div>

            <div className='text-center mt-3'>
                <p>@Copyrights2023</p>
            </div>  
        </Container>
    </div>
    </>
  )
}

export default Footer