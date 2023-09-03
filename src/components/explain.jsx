import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const Explain = () => {
  return (
    <>
        <div style={{
            backgroundImage:'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693636832/luxury-gym-fitness-club_258219-333_txuu2n.avif")',
            width:'100%',
            height:'600px',
            }}>
            <div>
                <Container>
                    <Row>
                        <Col style={{color:'#fff'}} className='m-3 text-center'>
                            <h3>HERE'S HOW <i class="bi bi-dash-lg"></i><i class="bi bi-dash-lg"></i></h3>
                            <h1>DRAGON FITNESS IS DIFFERENT…</h1>
                            <p>Hello,</p>
                            <p className='fw-bold'>Believe it or not, it takes just 35 to 45 minutes a day to achieve a better body. But there’s a catch...</p>
                            <p className='fw-bold'>You have to be consistent.</p>
                            <p className='lead fw-bold'>Come work out with us from anywhere ... on any device(online resource) ... every single day!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}

export default Explain