import React from 'react'
import { Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Row fluid className="screen gx-0"> 
    <Col lg={12} md={10} sm={12} xs={12} className="content-col">
      {/* <Row className="title-row">
      </Row> */}
      <Row className="content-row">
        <Col lg={6} md={10} sm={12} xs={12} id="left" className="body-col">
        </Col>
        <Col lg={6} md={10} sm={12} xs={12} id="right" className="body-col">
        </Col>
      </Row>
    </Col>
  </Row>
  )
}

export default About