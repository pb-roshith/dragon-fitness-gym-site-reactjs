import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const About = () => {
  return (
    <>
    <div style={{backgroundColor:'hotpink'}} className='mt-5'>
      <Container className='py-5' style={{backgroundColor:'#AA336A', color:'#fff'}}>
        <Row>
          <Col>

            <h1 style={{textDecoration:'5px underline pink'}} className='display-1 text-center p-2'>ABOUT DRAGON FITNESS</h1>
            <p className='lead'>
            At DRAGON FITNESS, we believe that fitness is not just a physical endeavor; it's a journey of self-discovery, empowerment, and personal growth. Our mission is to provide a welcoming and motivating environment where individuals of all fitness levels can pursue their health and wellness goals.
            </p>

            <h1 className='text-center pt-4'>OUR STORY</h1>
            <p className='lead'>Founded in 2003, DRAGON FITNESS has been a cornerstone of the Boston fitness community for 20 Years. It all began with a simple vision: to create a space where fitness enthusiasts, beginners, and everyone in between could come together, sweat, and transform their lives.</p>
            <p className='lead'>Over the years, our gym has evolved, but our commitment to excellence has remained steadfast. We've grown from a small local gym to a thriving fitness hub with a dedicated community of members who inspire us every day.</p>
            
            <h1 className='text-center pt-4'>OUR MISSION</h1>
            <p className='lead'>At DRAGON FITNESS, our mission is clear:</p>
            <ul className='lead' style={{listStyle:'none'}}>
              <li><i class="bi bi-gem"></i> To empower individuals to achieve their fitness goals, no matter how big or small.</li>
              <li><i class="bi bi-gem"></i> To foster a sense of community, support, and camaraderie among our members.</li>
              <li><i class="bi bi-gem"></i> To provide access to state-of-the-art equipment, certified trainers, and diverse fitness programs.</li>
              <li><i class="bi bi-gem"></i> To promote a holistic approach to health that includes physical fitness, nutrition, and mental well-being.</li>
            </ul>

            <h1 className='text-center pt-4'>Why Choose DRAGON FITNESS?</h1>
            <ul className='lead' style={{listStyle:'none'}}>
              <li><i class="bi bi-gem"></i> <b>Expertise:</b> Our team of certified trainers and instructors are passionate about what they do and are committed to helping you succeed.</li>
              <li><i class="bi bi-gem"></i> <b>Community:</b> When you join DRAGON FITNESS, you become part of a supportive community where you'll find encouragement and motivation every step of the way.</li>
              <li><i class="bi bi-gem"></i> <b>State-of-the-Art Facilities:</b> We invest in cutting-edge fitness equipment and maintain a clean and safe environment for our members.</li>
              <li><i class="bi bi-gem"></i> <b>Flexibility:</b> We offer flexible membership options to suit your needs, whether you're a daily gym-goer or just getting started on your fitness journey.</li>              
            </ul>

            <h1 className='text-center pt-4'>JOIN US TODAY</h1>
            <p className='lead'>We invite you to become part of the DRAGON FITNESS family and embark on a journey to a healthier, stronger, and more vibrant you. Explore our membership options, check out our class schedules, and take the first step toward achieving your fitness goals with us.</p>
            <p className='lead'>Thank you for considering DRAGON FITNESS as your fitness partner. We can't wait to meet you and support you on your fitness journey!</p>
            <p className='lead'>If you have any questions or would like to learn more, please don't hesitate to Contact Us.</p>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default About