import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Lifestyle = () => {
  return (
    <>
    <div style={{backgroundColor:'#AA336A', color:"#fff"}}>
      <h1 className='text-center p-3'><i class="bi bi-life-preserver"></i> Inside our Dragon Fitness</h1>
      <Container className='py-3'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            <img className='shadow p-3 mb-5 bg-danger rounded' style={{height:'1100px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693566938/fitness-woman-studio-shots_znlmoo.jpg" alt="" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={8} className='d-flex align-items-center'>
            <div>
            <div>
              <h1><i class="bi bi-check2-circle"></i> Personalized Fitness Journeys:</h1>
              <ul>
                <li style={{listStyle:'none'}}><i class="bi bi-patch-check"></i> Emphasize personalized fitness plans and training sessions that cater to individual goals and fitness levels. Make each member feel valued and supported in their journey.</li>
                <li style={{listStyle:'none'}}><i class="bi bi-patch-check"></i> Offer fitness assessments and consultations to create tailored workout and nutrition plans.</li>
              </ul>
            </div>

            <div>
              <h1><i class="bi bi-check2-circle"></i> Holistic Wellness</h1>
              <ul>
                <li style={{listStyle:'none'}}><i class="bi bi-patch-check"></i> Promote a holistic approach to health, encompassing physical fitness, nutrition, mental well-being, and stress management.</li>
                <li style={{listStyle:'none'}}><i class="bi bi-patch-check"></i> Offer workshops and seminars on topics like mindfulness, nutrition, and stress reduction to enhance the overall well-being of your members.</li>
              </ul>
            </div>

            <div>
              <h1><i class="bi bi-check2-circle"></i> Community-Centric Approach:</h1>
              <ul>
                <li style={{listStyle:'none'}}><i class="bi bi-patch-check"></i> Foster a sense of belonging and community among your members. Encourage social interactions, group activities, and networking events.</li>
                <li style={{listStyle:'none'}}><i class="bi bi-patch-check"></i> Host regular social gatherings, fitness challenges, and member appreciation events to strengthen connections among your gym-goers.</li>
              </ul>
            </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={5}>
            <img className='shadow p-3 mb-5 bg-danger rounded' style={{height:'1100px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693656390/desktop-wallpaper-fitness-girl-gym-hands-look-sport-750x1334-iphone-8-7-6-6s-background-gym-fitness-women-thumbnail_morek8.jpg" alt="" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={7}>
            <img className='shadow p-3 mb-4 bg-danger rounded' style={{height:'540px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693650991/2720731_tzfd8q.jpg" alt="" />
            <img className='shadow p-3 mb-4 bg-danger rounded' style={{height:'540px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693653872/7cc1e3d2c4d85454b3bb419f89dee043_aioydk.jpg" alt="" />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={7}>
            <img className='shadow p-3 mb-4 bg-danger rounded' style={{height:'540px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693651611/3139892_ldguqp.jpg" alt="" />
            <img className='shadow p-3 mb-4 bg-danger rounded' style={{height:'540px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693651610/3139891_nqd5pp.jpg" alt="" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <img className='shadow p-3 mb-5 bg-danger rounded' style={{height:'1100px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693655361/athlete-gym-weights-women-preview_sr3v0k.jpg" alt="" />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={5}>
            <img className='shadow p-3 mb-5 bg-danger rounded' style={{height:'1100px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693654206/Fu6bMiKWAAYDvT__cxxke4.png" alt="" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={7}>
            <img className='shadow p-3 mb-4 bg-danger rounded' style={{height:'540px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693653771/inside-maxx-life-gym_evpueu.jpg" alt="" />
            <img className='shadow p-3 mb-4 bg-danger rounded' style={{height:'540px', width:'100%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693653772/Heimat-Gym_bbfrez.jpg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Lifestyle