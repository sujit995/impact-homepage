
import { Row, Col } from 'react-bootstrap';

import '../styles/section.css';

type Props = {};

const Section = (props: Props) => {
  return (
      <div className="section bg-white">
            <div className="container">
                <Row className="justify-content-between align-items-center mb-5 pb-5">
                <Col className="col-lg-4">
                    <h2 className="mb-4" style={{ fontSize:"2rem", fontWeight:'bold'}}>Why Growing Your Business is Important</h2>
                    <p className="mb-4" style={{ lineHeight:'1.5rem'}}>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?</p>
                    <button className="btttn">Get In Touch</button>
                </Col>
                <Col className="col-lg-7">
                    <img className="img-fluid" src="images/illustration-1.jpg" alt="illustrate" width="620" height="390"/>
                </Col>
                </Row>
                <Row className="row">
                    <Col className="box-col">
                        <div className="icon">
                        <img src="images/24-hours-support.svg" alt="call" width="50" height="50"/>
                        </div>
                        <div className="box_info">
                            <h3>Professional</h3>
                            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                        </div>
                    </Col>
                    <Col className="box-col">
                        <div className="icon">
                        <img src="images/good-review.svg" alt="review" width="50" height="50"/>
                        </div>
                        <div className="box_info">                         
                            <h3>Good Review</h3>
                            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                        </div>
                    </Col>
                    <Col className="box-col">
                        <div className="icon">
                        <img src="images/quotation.svg" alt="review" width="50" height="50"/>
                        </div>
                        <div className="box_info">
                            <h3>24/7 support</h3>
                            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                        </div>
                    </Col>
                </Row>
            </div>
       </div>
  );
};

export default Section;

