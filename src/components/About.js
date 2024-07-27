import React, { Component } from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css'
export class About extends Component {
  render() {
    return (
        <Container className="my-5 " style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
      <h1 className="mb-4 text-center card1 fade-in">About NewsMonkey</h1>
     
        <Col md={6}>
          <Card className="mb-4 slide-in-left">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At NewsMonkey, our mission is to provide our users with the latest and most relevant news
                from around the world. We strive to deliver accurate, unbiased, and timely news that keeps
                our audience informed and engaged.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 card1 slide-in-right">
            <Card.Body>
              <Card.Title>What We Offer</Card.Title>
              <Card.Text>
                NewsMonkey offers a wide range of news categories including politics, technology, sports,
                entertainment, and more. Our team of dedicated journalists works around the clock to
                bring you breaking news as it happens. We also provide in-depth analysis and commentary
                to help you understand the stories behind the headlines.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
        <Col md={6}>
          <Card className="mb-4 card1 slide-in-left">
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                Our team is made up of experienced journalists, editors, and content creators who are
                passionate about delivering quality news. We value integrity, accuracy, and transparency
                in our reporting.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 card1 slide-in-right">
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                We love hearing from our users! If you have any questions, feedback, or suggestions,
                please don't hesitate to reach out to us at <a href="mailto:support@newsmonkey.com">support@newsmonkey.com</a>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Container>
    )
  }
}

export default About