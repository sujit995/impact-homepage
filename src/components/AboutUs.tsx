

import { Row, Col } from 'react-bootstrap';
import '../styles/aboutus.css';

type Props = {};

const AboutUs = (props: Props) => {
  return (
      <div className="bg-light pt-5 pb-5">
        <div className="container">
            <Row className="justify-content-between">
                    <Col className="col-lg-5">
                        <h2 className="mb-5" style={{ fontSize:'2rem', fontWeight:'bold'}}>Why You Should Choose Us</h2>
                        <div className="heading__details">
                            <img src="images/24-hours-support.svg" alt="call" width="50" height="50"/>
                                <div className="sub_heading">
                                    <h3>Professional</h3>
                                    <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                                </div>
                        </div>
                        <div className="heading__details">
                            <img src="images/good-review.svg" alt="review" width="50" height="50"/>
                        <div className="sub_heading">
                                <h3>Good Review</h3>
                                <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                        </div>
                    </div>
                    </Col>
                    <Col className="col-lg-6">
                        <img className="img-fluid" alt="Responsive image" src="images/about-us-min.png"/>
                    </Col>
                </Row>
        </div>
  </div>
  );
};

export default AboutUs;

