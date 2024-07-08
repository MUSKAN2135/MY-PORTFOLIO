
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaAngleUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../footer/footer.css'
import Copyright from '../footer/copyright/copyright';
export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <footer className="container position-relative text-dark text-center mt-3 pt-5">
                <Row className='d-flex justify-content-center text-center'>
                    <Col md={6}>
                        <h4>Contact Me</h4>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Control type="text" placeholder="Your Name" className='my-4 bg-transparent border-secondary ' />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Your Email" className='my-4 bg-transparent border-secondary' />
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Control type="tel" placeholder="Your Phone" className='my-4 bg-transparent border-secondary' />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Control as="textarea" rows={5} placeholder="Your Message" className='my-3 bg-transparent border-secondary' />
                            </Form.Group>
                            <Button variant="danger" type="submit" className='my-3'>
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center pt-5'>
                    <Col md={7}>
                        <Row>
                            <Col>
                                <h6 className='text-danger'>Email</h6>
                                <p> Wahhikhan9050@gmail.com</p>
                            </Col>
                            <Col>
                                <h6 className='text-danger'>Contact Me</h6>
                                <p> 03015128480</p>
                            </Col>
                            <Col>
                                <h6 className='text-danger'>Address</h6>
                                <p>Lahore Cantt, Pakistan</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
            <footer className="pt-2 px-3 text-center icons">
                <Row className='fluid'>
                    <hr className='w-100'></hr>
                    <Col className='text-left'>
                        <Copyright />
                    </Col>
                    <Col md={6}>
                        <a href='https://github.com/MUSKAN2135' ><FaGithub className='mx-3 text-dark cursor:pointer;' /></a>
                        <a href='https://www.Instagram.com/Mushk0950' ><FaInstagram className='mx-3 text-dark cursor:pointer;' /></a>
                        <a href='https://www.linkedin.com/' ><FaLinkedin className='mx-3 text-dark cursor:pointer;' /></a>
                        <a href='https://www.Whatsapp.com/' ><FaWhatsapp className='mx-3 text-dark cursor:pointer;' /></a>
                        <a href='https://www.facebook.com' ><FaFacebook className='mx-3 text-dark cursor:pointer;' /></a>
                    </Col>
                </Row>
                <FaAngleUp onClick={scrollToTop} className="arrow cursor:pointer; border border-secondary rounded-circle" />

            </footer>
        </>
    );
}