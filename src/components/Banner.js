import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";  
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img_1.png";
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Application Developer", "Web Designer", "UI/UX Developer"];
    const period = 2000;

    useEffect( () => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let upDatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(upDatedText);

        if(isDeleting) {
            setDelta( prevDelta => prevDelta / 2);
        }
        if(isDeleting && upDatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if(isDeleting && upDatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <div className="banner-title">
                {/* <Row className="align-items-center"> */}
                    {/* <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col> */}
                    {/* <Col xs={12} md={12} xl={12}> */}
                        <TrackVisibility>
                            {({isVisible}) =>  
                            <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                <span className="tagline">WelCome To My Portfolio</span>
                                <h1>{"Hi I'm Abdul Ahad"}</h1>
                                <h2><span className="wrap">{text}</span></h2>
                                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, use a button and change it with appropriate styles.</p>
                                <button onClick={()=>console.log('connect')}>Lets Connect <ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    {/* </Col> */}
                    {/* <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col> */}
                {/* </Row> */}
                </div>
            </Container>
        </section>
    )
}