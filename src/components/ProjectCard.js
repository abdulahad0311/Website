import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl}) => {
    return(
        <Col sm={12} md={12}>
            <div className="project-bx">
                <div className="row">
                    <div className="col-md-5 px-3">
                        <div className="card-block px-6">
                            <h4 className="card-title">{title}</h4>
                            <p className="mb-1">
                                {description}
                            </p>
                            <br />
                            <a href="#" className="mt-auto btn btn-primary  ">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img src={imgUrl}/>
                    </div>
                </div>
                {/* <div className="proj-imgbx">
                    <img src={imgUrl}/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div> */}
            </div>
            
        </Col>
    )
}