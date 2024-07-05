import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faqinner from "./Faqinner";

export const Faqs = () => {
    const [faqs, setFaqs] = useState([

        {
            question: "How many programmers does it take to screw a lightbulb?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
            open: true
            },
            {
            question: "Who is the most awesome person?",
            answer: "You! The viewer!",
            open: false
            },
            {
            question:
                "How many questions does it take to makes a succesful FAQ Page?",
            answer: "This many!",
            open: false
            }
    ]);
    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if(i === index) {
                    faq.open = !faq.open;
                } 
                else {
                    faq.open = false;
                }
                return faq;
            })
        )
    }
  
        return (
        <section className="faqs-section" id="faqs">
            <Container>
                <Row>
                    <Col>
                        <div className="faqs faq-bx">
                            {faqs.map((faq, index) => (
                            <Faqinner faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                            ))}
                        </div>
                        {/* <div className={"faq " + (faq.open ? "open" : "")}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">{faq.question}</div>
                            <div className="faq-answer">{faq.answer}</div>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
    };