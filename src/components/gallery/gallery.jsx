import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import opp from '../../images/OIP.jpg'

export function Gallery() {
    return (
        <Container className='w-75'>
            <Row>
                <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                    {/* Image 1 */}
                    <Col>
                        <a href='/' >
                            <Card className='mb-4'>
                                <img src={opp} alt="" className='w-100' style={{ height: '200px' }} />
                            </Card>
                        </a>
                    </Col>
                    {/* Image 2 */}
                    <Col>
                        <a href='/'>
                            <Card className='mb-4'>
                                <img src={opp} alt="" className='w-100' style={{ height: '500px' }} />
                            </Card>
                        </a>
                    </Col>
                </Col>
                <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                    {/* Image 2 */}
                    <Col>
                        <a href={'./images.jsx'}>
                            <Card className='mb-4'>
                                <img src={opp} alt="" className='w-100' style={{ height: '500px' }} />
                            </Card>
                        </a>
                    </Col>
                    {/* Image 2 */}
                    <Col>
                        <a href='/'>
                            <Card className='mb-4'>
                                <img src={opp} alt="" className='w-100' style={{ height: '200px' }} />
                            </Card>
                        </a>
                    </Col>
                </Col>
                <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                    {/* Image 2 */}
                    <Col>
                        <a href='/'>
                            <Card className='mb-4'>
                                <img src={opp} alt="" className='w-100' style={{ height: '300px' }} />
                            </Card>
                        </a>
                    </Col>
                    {/* Image 2 */}
                    <Col>
                        <a href='/'>
                            <Card className='mb-4'>
                                <img src={opp} alt="" className='w-100' style={{ height: '400px' }} />
                            </Card>
                        </a>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};
