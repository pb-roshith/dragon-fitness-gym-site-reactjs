import React from 'react'
import Trainer from './trainer';
import { Row, Col, Container } from 'react-bootstrap';
import Client from './client';
import Pricing from './pricing';
import Backimage1 from './backimage1';
import Explain from './explain';
import Get from './get';

const trainerInfo = [
  {
      key: 0,
      image: 'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693574508/HD-wallpaper-fitness-girl-gym-girl-black-fitness-woman-thumbnail_c9tv16.jpg',
      name: 'Olivia',
      discription: ' A passionate fitness enthusiast with years of experience, she motivates clients to reach their goals through personalized training plans and unwavering support.'
  },
  {
      key: 1,
      image: 'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693555319/pretty-sportive-strong-young-woman-doing-exercises-with-barbell-dressed-up-fashion-sportswear-sportclub_ppdhll.jpg',
      name: 'Sophia',
      discription: ' A certified trainer specializing in strength and conditioning, she helps clients build power, agility, and endurance while promoting a healthy lifestyle.'
  },
  {
      key: 2,
      image: 'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693555119/wp6850517-gym-girl-image-wallpapers_vu790h.jpg',
      name: 'Emma',
      discription: 'A holistic trainer who not only guides clients through effective workouts but also educates them on proper nutrition and overall well-being for a balanced approach to fitness.'
  },
  {
      key: 3,
      image: 'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693555004/CmbP96oXEAAejOi_judany.webp',
      name: 'Mia',
      discription: ' Known for her dynamic and high-energy cardio workouts, she keeps clients engaged and sweating with challenging routines that burn calories and boost cardiovascular fitness.'
  },
  {
      key: 4,
      image: 'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693555167/peakpx_gajuii.jpg',
      name: 'Ava',
      discription: 'Focusing on functional movements and injury prevention, she empowers clients to improve their daily lives by enhancing flexibility, balance, and overall functional fitness.'
  },
  {
      key: 5,
      image: 'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693555036/Wallpaper-model-look-pose-abs-fitness-girl-Anllela-_afuuy3.jpg',
      name: 'Isabella',
      discription: 'A mindful trainer who combines physical training with mindfulness techniques, helping clients reduce stress and achieve physical and mental harmony.'
  }
]




const Home = () => {
  return (
    <>
      <div style={{backgroundColor:'#ff007f'}}>
      <div className='mt-5 pt-4'>
        <video style={{width:'100%',height:'100%'}} src='https://res.cloudinary.com/dlnrtg1q3/video/upload/v1693489305/gym-intro_rkmuty.mp4' autoPlay loop>hi</video>
      </div>
      </div>
      

      <Backimage1></Backimage1>
      <div style={{
        backgroundImage:"url('https://res.cloudinary.com/dlnrtg1q3/image/upload/v1693670502/wallpaperflare.com_wallpaper_1_kguuzz.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        height:'600px'
        }}>
      </div>
      
      <Explain></Explain>

      <Get></Get>

      <div style={{backgroundColor:'#fec2d6'}}>
      <Pricing></Pricing>
      <Container className='py-5'>
        <h1 style={{color:'#AA336A'}} className='text-center'><i class="bi bi-slack"></i> Our Professional Trainers</h1>
      <Row>
                    {trainerInfo.map((i) => {
                        return(
                            <Col md={6} lg={4} key={i}>
                                <Trainer props={i}/>
                            </Col>
                        );
                    })} 
            </Row>
      </Container>
      </div>

      <Client></Client>
    </>
  )
}

export default Home;