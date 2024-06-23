import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousel01 from "../assets/img/gettyimages-1.jpg";
import carousel02 from "../assets/img/gettyimages-2.jpg";
import carousel03 from "../assets/img/gettyimages-3.jpg";
import colorSharp from "../assets/img/color-sharp.png";
import { useState } from "react";

export const Testimonials = () => {

    return (
        <>
        <section className="testimonials" id="testimonials">
            <Container>
                <Row>
                    <Col>
                        <div className="testimonials-bx  wow zoomIn">
                            {/* <h2>
                                Services
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br> It has survived not only five centuries,
                            </p>
                            <div className="row services-card">
                                <div className="col-md-5 px-3">
                                    <div className="card-block px-6">
                                        <h4 className="card-title">Website Development </h4>
                                        <p className="mb-1">
                                            The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
                                        </p>
                                        <p className="mb-2">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                                        <br />
                                        <a href="#" className="mt-auto btn btn-primary  ">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img src={carousel01} alt="Image" text="First slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={carousel02} alt="Image" text="Second slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={carousel03} alt="Image" text="Third slide"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="row services-card">
                                <div className="col-md-7">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img src={carousel01} alt="Image" text="First slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={carousel02} alt="Image" text="Second slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={carousel03} alt="Image" text="Third slide"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-md-5 px-3">
                                    <div className="card-block px-6">
                                        <h4 className="card-title">Mobile Application Development </h4>
                                        <p className="mb-1">
                                            The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
                                        </p>
                                        <p className="mb-2">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                                        <br />
                                        <a href="#" className="mt-auto btn btn-primary  ">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row services-card">
                                <div className="col-md-7">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img src={carousel01} alt="Image" text="First slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={carousel02} alt="Image" text="Second slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={carousel03} alt="Image" text="Third slide"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-md-5 px-3">
                                    <div className="card-block px-6">
                                        <h4 className="card-title">Mobile Application Development </h4>
                                        <p className="mb-1">
                                            The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
                                        </p>
                                        <p className="mb-2">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                                        <br />
                                        <a href="#" className="mt-auto btn btn-primary  ">Read More</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
        </>
    )
}