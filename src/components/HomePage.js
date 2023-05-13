import React from 'react'
import ParentComponent from './ParentComponent'
import LeftSection from './leftSection/LeftSection'
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import { Link } from 'react-router-dom';
const HomePage = ({ setLoggedIn }) => {
  return (
    <Container>
      <Row>
        {/* <div className="App"> */}
        <Col md={3} className='paddingRight'><LeftSection /></Col>
        <Col md={9} className='paddingLeft'><ParentComponent setLoggedIn={setLoggedIn} /></Col>

        {/* </div> */}
      </Row>
    </Container>
  )
}

export default HomePage