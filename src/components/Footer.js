import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return(
        <>
        {/* <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}> 
                        <img src={logo} alt="Logo" /> 
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="Icon" /></a>
                            <a href=""><img src={navIcon2} alt="Icon" /></a>
                            <a href=""><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer> */}

        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget company_widget wow fadeInLeft"
                                data-wow-delay="0.2s"
                                style={{
                                visibility: "visible",
                                animationDelay: "0.2s",
                                animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_700 t_color f_size_20">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form
                                    action="#"
                                    className="f_subscribe_two mailchimp"
                                    method="post"
                                    noValidate="true"
                                    _lpchecked={1}
                                >
                                    <input
                                        type="text"
                                        name="EMAIL"
                                        className="form-control memail"
                                        placeholder="Email"
                                    />
                                    <button className="btn btn_get btn_get_two" type="submit">
                                        Subscribe
                                    </button>
                                    <p className="mchimp-errmessage" style={{ display: "none" }} />
                                    <p className="mchimp-sucmessage" style={{ display: "none" }} />
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.4s"
                                style={{
                                visibility: "visible",
                                animationDelay: "0.4s",
                                animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_700 t_color f_size_20">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li>
                                        <a href="#">Company</a>
                                    </li>
                                    <li>
                                        <a href="#">Android App</a>
                                    </li>
                                    <li>
                                        <a href="#">ios App</a>
                                    </li>
                                    <li>
                                        <a href="#">Desktop</a>
                                    </li>
                                    <li>
                                        <a href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">My tasks</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.6s"
                                style={{
                                visibility: "visible",
                                animationDelay: "0.6s",
                                animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_700 t_color f_size_20">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Term &amp; conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Reporting</a>
                                    </li>
                                    <li>
                                        <a href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#">Support Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget social-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.8s"
                                style={{
                                visibility: "visible",
                                animationDelay: "0.8s",
                                animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_700 t_color f_size_20">Team Solutions</h3>
                                <div className="social-icon">
                                    <a href=""><img src={navIcon1} alt="Icon" /></a>
                                    <a href=""><img src={navIcon2} alt="Icon" /></a>
                                    <a href=""><img src={navIcon3} alt="Icon" /></a>
                                    {/* <a href="#" className="fab fa-pinterest" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one" />
                    <div className="footer_bg_two" />
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">
                                CopyRight 2024. All Right Reserved
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}