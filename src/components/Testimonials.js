import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
var slider = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    return (
        <>
        <section className="stripe testimonials" id="testimonials">
            <Container>
                <div className="top-heading text-center">
                    <h2>Testimonials</h2>
                    <p>Read Reviews From Clients That Used Design Tech Evo On These Platforms Too.</p>
                </div>
                <div className="gtco-testimonials">
                    <Slider {...slider}>
                        <div>
                            <div className="card text-center"><img className="card-img-top"
                                    src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                                    alt="" />
                                <div className="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top"
                                    src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                                    alt="" />
                                <div className="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top"
                                    src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                                    alt="" />
                                <div className="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top"
                                    src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                                    alt="" />
                                <div className="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
        </>
    )
}