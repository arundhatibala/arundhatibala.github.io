import React from 'react'
import { Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Container style = {{height:"2000px"}}></Container>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../media/Texture 2.png')}
        bgImageAlt="the dog"
        strength={-200}>
        Blur transition from min to max
        <div style={{ height: '500px' }} />
    </Parallax>
    <Container style = {{height:"2000px"}}></Container>
 
    </div>
  )
}

export default Home