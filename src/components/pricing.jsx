import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

const Pricing = () => {
  return (
    <>
    <div style={{
        backgroundImage:'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693653772/Heimat-Gym_bbfrez.jpg")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }} className='py-5'>
    <Container>
        <h1 style={{color:'#fff', textShadow:'3px 3px 2px black'}} className='text-center'><i class="bi bi-box2-heart"></i> Our Exclusive Membership's</h1>
        <Row>
            <Col>
                <Card border='danger' className='m-3'>
                    <Card.Header><h1>Basic Membership</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>Price: $39 per month</Card.Title>
                        <Card.Text>
                            <ul type='none'>
                                <li><i class="bi bi-magic"></i> Access to cardio and strength training areas</li>
                                <li><i class="bi bi-magic"></i> Use of locker rooms and showers</li>
                                <li><i class="bi bi-magic"></i> Discounted rates for group fitness classes</li>
                                <li><i class="bi bi-magic"></i> Package deals for multiple sessions available</li>
                            </ul>
                        </Card.Text>
                    <Button variant="danger"><i class="bi bi-bag-heart"></i> Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='m-3'>
                <Card border='danger'>
                    <Card.Header><h1>Standard Membership</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>Price: $59 per month</Card.Title>
                        <Card.Text>
                            <ul type='none'>
                                <li><i class="bi bi-magic"></i> All benefits of Basic Membership</li>
                                <li><i class="bi bi-magic"></i> Access to all group fitness classes</li>
                                <li><i class="bi bi-magic"></i> Complimentary personal training session upon signup</li>
                                <li><i class="bi bi-magic"></i> Access to Specialty Classes</li>
                                <li><i class="bi bi-magic"></i> Monthly Newsletter</li>
                            </ul>
                        </Card.Text>
                    <Button variant="danger"><i class="bi bi-bag-heart"></i> Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='m-3'>
                <Card border='danger'>
                    <Card.Header><h1>Premium Membership</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>Price: $69 per month</Card.Title>
                        <Card.Text>
                            <ul type='none'>
                                <li><i class="bi bi-magic"></i> All benefits of Standard Membership</li>
                                <li><i class="bi bi-magic"></i> Unlimited access to the sauna and steam room</li>
                                <li><i class="bi bi-magic"></i> Nutritional consultation and customized meal plan</li>
                                <li><i class="bi bi-magic"></i> Online Workout Resources</li>
                                <li><i class="bi bi-magic"></i> Exclusive Events</li>
                            </ul>
                        </Card.Text>
                    <Button variant="danger"><i class="bi bi-bag-heart"></i> Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='m-3'>
                <Card border='danger'>
                    <Card.Header><h1>Family Membership</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>Price: $129 per month</Card.Title>
                        <Card.Text>
                            <ul type='none'>
                                <li><i class="bi bi-magic"></i> All benefits of Premium Membership</li>
                                <li><i class="bi bi-magic"></i> Standard Membership benefits for up to 4 family members</li>
                                <li><i class="bi bi-magic"></i> Additional family members at a discounted rate</li>
                                <li><i class="bi bi-magic"></i> Discounts on Pro Shop Items</li>
                            </ul>
                        </Card.Text>
                    <Button variant="danger"><i class="bi bi-bag-heart"></i> Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default Pricing