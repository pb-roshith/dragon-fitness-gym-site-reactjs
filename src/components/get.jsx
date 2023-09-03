import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const Get = () => {
  return (
    <>
    <div className='pt-5'>
        <h3 className='text-center text-danger'><i class="bi bi-flower2"></i> HERE'S WHAT YOU</h3>
        <h1 className='text-center display-3 fw-bold'>GET WITH DRAGON FITNESS</h1>
        <h1 className='text-center text-danger'><i class="bi bi-dash-lg"></i><i class="bi bi-diamond-fill"></i><i class="bi bi-dash-lg"></i></h1>
        <Container>
            <Row className='d-flex flex-wrap'>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <p><i class="bi bi-check2-square"></i> Invest in high-quality, modern fitness equipment. This includes a variety of cardio machines (treadmills, ellipticals, stationary bikes), strength-training machines, free weights, and functional fitness equipment like kettlebells and resistance bands.</p>
                    <p><i class="bi bi-check2-square"></i> Employ certified personal trainers who can provide one-on-one sessions, personalized workout plans, and guidance to help members achieve their fitness goals safely and effectively.</p>
                    <p><i class="bi bi-check2-square"></i> Offer a diverse range of group fitness classes such as yoga, HIIT, spinning, Zumba, and strength training. Regularly scheduled classes can foster a sense of community among your members.</p>
                    <p><i class="bi bi-check2-square"></i> Maintain a clean and hygienic gym with regular cleaning schedules and sanitation stations. Ensure the safety of your members by following safety protocols and providing first-aid equipment.</p>
                    <p><i class="bi bi-check2-square"></i> Design the gym layout to maximize space usage and avoid overcrowding. Adequate spacing between equipment and functional training areas is essential for member comfort and safety.</p>
                    <p><i class="bi bi-check2-square"></i> Provide a variety of membership options to cater to different needs and budgets, such as monthly, quarterly, and annual memberships. Consider family and student discounts as well.</p>
                    <p><i class="bi bi-check2-square"></i> Offer nutrition guidance through workshops, seminars, or partnerships with registered dietitians. This can help members complement their workouts with healthy eating habits.</p>
                    <p><i class="bi bi-check2-square"></i> Create an online member portal or app where members can book classes, track their progress, and access workout routines and nutritional information. This adds convenience and engagement for tech-savvy members.</p>
                    <div className='text-center d-flex align-items-center' style={{
                        width:'100%',
                        height:'200px',
                        border: '10px solid red',
                        margin: '7px'
                        }}>
                        <h1>"Fuel Your Ambition, Ignite Your Transformation"</h1>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <img className='shadow p-3 mb-5 bg-danger rounded' style={{height:'900px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693555064/wp4846227-gym-girl-wallpapers_do9nsn.jpg" alt="" />
                </Col>
            </Row>
        </Container>
        </div>
    </>
  )
}

export default Get