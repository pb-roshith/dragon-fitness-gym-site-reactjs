import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const quotes = [
    {
        name:'Scarlett',
        msg:'The gym is my second home, where I build not only my muscles but my confidence too.'
    },
    {
        name:'Alessandra',
        msg:"Joining the gym was the best decision I ever made. It's where I found my strength, inside and out."
    },
    {
        name:'Jasmine',
        msg:'Sweat, determination, and a little bit of gym magic—recipe for success!'
    },
    {
        name:'Victoria',
        msg:'In the gym, I discovered a stronger version of myself that I never knew existed.'
    },
    {
        name:'Adriana',
        msg:'Gym buddies and weights—two things that never let me down'
    },
    {
        name:'Emily',
        msg:"The gym is my sanctuary; it's where I come to work on myself, both physically and mentally."
    },
]

const Client = () => {
  return (
    <>
        <div className='py-5' style={{
        backgroundImage:"url('https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693653872/7cc1e3d2c4d85454b3bb419f89dee043_aioydk.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        // height:'400px'
        }}>
            <Container>
                <h1 style={{color:"#fff", textShadow: '4px 4px 2px black'}} className='text-center'>What our Client Says</h1>
                <h1 style={{color:"#fff", textShadow: '4px 4px 2px black'}} className='display-1 text-center'>TESTIMONIALS</h1>
                <Row>
                    {quotes.map((i) => {
                        return(
                            <Col md={6} lg={4}>
                                <Card border='danger' className='m-3'>
                                    <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <p class><i class="bi bi-quote"></i> {i.msg} <i class="bi bi-chat-quote"></i></p>
                                    <footer className="blockquote-footer">{i.name}</footer>
                                    </blockquote>
                                </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}  
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Client