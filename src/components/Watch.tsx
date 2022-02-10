

import { Row, Col } from 'react-bootstrap';
import '../styles/watch.css';

type Props = {};

const Watch = (props: Props) => {
  return (
  <div className="container">
        <Row className="row1">
                <Col className="col1">
 					<a href="https://www.youtube.com/watch?v=KI2lsdXJQ40" className="button_play">
 						<img className="img-fluid" src="images/hero-min.jpg" alt="Image" width="620" height="430" />
 					</a>
 				</Col>	
 				<Col className="col2">
 					<h2 className="heading">Get Started with Impact</h2>
 					<p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
 					<ul className="list">
 						<li>Deserunt harum incidunt </li>
 						<li>Ex nesciunt est temporibus ipsum</li>
 						<li>Vel rem eveniet facere et velit sunt</li>
 						<li>Aspernatur eaque quis</li>
 						<li>Dolorem magnam quisquam? Facere</li>
 					</ul>
 					<p className="mt-4"><a href="#" className="btttn">Learn More</a></p>
 				</Col>	
        </Row>
  </div>
  );
};

export default Watch;
