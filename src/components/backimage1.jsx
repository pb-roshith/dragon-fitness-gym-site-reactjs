import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const Backimage1 = () => {
  return (
    <>
        <div style={{
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            height:'600px',
            backgroundImage:'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693566957/attractive-brunette-slim-female-dressed-sportswear-holds-barbel_ndqzkf.jpg")'}}>
            <div>
            <Container>
                <Row>
                    <Col style={{color:'#fff'}} className='text-center p-5'>
                        <h5><i class="bi bi-globe-americas"></i> WELCOME TO Dragon Fitness</h5>
                        <h2>JUST 45 MINUTES A DAY TO
                        A LEAN BODY, GREAT ENERGY, AND
                        FEELING LIKE A BADASS!</h2>
                        <br />
                        <p><b>Guided Meal Plans & Workout Programs</b></p>
                        <p><b>Group Fitness Classes, Professional Staff, Nutrition Counseling, Online Resources And More</b></p>
                        <p className='lead'>Let us guide you to burn fat, lose weight, build strength, and get in amazing shape for good!</p>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    </>
  )
}

export default Backimage1