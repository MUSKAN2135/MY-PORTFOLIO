import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import opp from '../../images/OIP.jpg'

export function Gallery() {
    return (
        <Container className='w-75'>
            <Row>
                <Col lg={4} md={12} className='mb-4'>
                    <a href='https://www.autoupscale.com/'>
                        <div class="card text-dark mb-2">
                            <img src={opp} alt="" style={{ height: '200px', hover:{filter: 'blur(1.5px)'}}} />
                            <div class="card-img-overlay">
                                <p style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative" >CodeUpscale.com</p>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.autoupscale.com/'>
                        <div class="card text-dark mb-2">
                            <img src={opp} alt="" style={{ height: '500px', filter: 'blur(1.5px)' }} />
                            <div class="card-img-overlay">
                                <p style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative" >CodeUpscale.com</p>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col lg={4} md={12} className='mb-4'>
                    <a href='https://www.autoupscale.com/'>
                        <div class="card text-dark mb-2 ">
                            <img src={opp} alt="" style={{ height: '500px', }} />
                            <div class="card-img-overlay">
                                <p style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative" >CodeUpscale.com</p>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.autoupscale.com/'>
                        <div class="card text-dark  mb-2">
                            <img src={opp} alt="" style={{ height: '200px', }} />
                            <div class="card-img-overlay">
                                <p style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative" >CodeUpscale.com</p>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col lg={4} md={12} className='mb-2'>
                    {/* Image 2 */}
                    <a href='https://www.autoupscale.com/'>
                        <div class="card text-dark mb-2 ">
                            <img src={opp} alt="" style={{ height: '300px', }} />
                            <div class="card-img-overlay">
                                <p style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative" >CodeUpscale.com</p>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.autoupscale.com/'>
                        <div class="card text-dark mb-2 ">
                            <img src={opp} alt="" style={{ height: '400px', }} />
                            <div class="card-img-overlay">
                                <p style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative" >CodeUpscale.com</p>
                            </div>
                        </div>
                    </a>
                </Col>
            </Row >
        </Container >
    );
};
