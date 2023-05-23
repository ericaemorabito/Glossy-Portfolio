import React from 'react'
import '../styles/home.css'
import { Row, Col } from 'react-bootstrap';
import iphone from '../assets/iphone.png'

const Home = () => {
  return (
    <Row fluid id="home" className="screen gx-0"> 
    <Col lg={12} md={10} sm={12} xs={12} className="content-col">
      <Row className="content-row">
        <Col lg={8} md={10} sm={12} xs={12} id="left" className="body-col d-flex flex-column align-items-center justify-content-center">
          <h1 className='text-center display-1 fw-bold'>Erica Morabito</h1>
          <h2 className='text-center display-7'>Full Stack Developer</h2>
        </Col>
        <Col lg={4} md={10} sm={12} xs={12} id="right" className="body-col d-flex flex-column align-items-center justify-content-center">
          <img src={iphone} alt="iphone" id="home-iphone-image">
          </img>
        </Col>
      </Row>
    </Col>
  </Row>
  )
}

export default Home