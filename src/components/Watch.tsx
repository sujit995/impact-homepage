

import { Row, Col } from 'react-bootstrap';
import '../styles/watch.css';
import { BsPlayCircle } from "react-icons/bs";
import { TiTick } from "react-icons/ti";


type Props = {};

// const list = [
// 	{
// 		name:"Deserunt harum incidunt"
// 	}, {
// 		name:"Ex nesciunt est temporibus ipsum"
// 	}, {
// 		name:"Vel rem eveniet facere et velit sunt"
// 	}, {
// 		name:"Aspernatur eaque quis"
// 	}, {
// 		name:"Dolorem magnam quisquam? Facere"}
// 	]

const Watch = (props: Props) => {
  return (
  <div className="container">
        <Row className="row1">
                <Col className="col1">
					<a href="https://www.youtube.com/watch?v=KI2lsdXJQ40" className="button-play-video glightbox">
						<img src="images/hero-min.jpg" alt="Image" className="img-fluid" />
					</a>
 				</Col>	
 				<Col className="col2">
 					<h2 className="heading">Get Started with Impact</h2>
 					<p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
 					<ul className="list">
						 {/* {
							 list.map((value)=> <li><TiTick />{name.value}</li>)
						 } */}
 						<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Deserunt harum incidunt </li>
 						<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Ex nesciunt est temporibus ipsum</li>
 						<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Vel rem eveniet facere et velit sunt</li>
 						<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Aspernatur eaque quis</li>
 						<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Dolorem magnam quisquam? Facere</li>
 					</ul>
 					<p className="btttn">Learn More</p>
 				</Col>	
        </Row>
  </div>
  );
};

export default Watch;
