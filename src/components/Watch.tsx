
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/watch.css';
import { BsPlayCircle } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { RiPlayFill } from "react-icons/ri";
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

type Props = {};

const Watch = (props: Props) => {
	const [isOpen, setOpen] = useState(false)
  return (
		<div className="container mt-5 pt-5">
				<Row className="justify-content-between align-items-center">
						<Col className="col-lg-7" id="col1">
							<img src="images/hero-min.jpg" alt="Image" className="img-fluid" style={{ borderRadius:'5px', backgroundColor: 'rgba()'}}/>
							<ModalVideo id="KI2lsdXJQ40" channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />	
							<div className="content">
								<div className="play" onClick={()=> setOpen(true)}><RiPlayFill style={{fontSize:'25px', marginBottom:'10px'}}/></div>
							</div>
						</Col>	
						<Col className="col-lg-4 justify-content-left">
							<h2 style={{ fontSize:'2rem', fontWeight: 'bold'}}>Get Started with Impact</h2>
							<p className="justify-content-left">Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
							<ul className="list-unstyled ul-check">
								<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Deserunt harum incidunt </li>
								<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Ex nesciunt est temporibus ipsum</li>
								<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Vel rem eveniet facere et velit sunt</li>
								<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Aspernatur eaque quis</li>
								<li><TiTick style={{marginRight:"10px", color: '#f85a40'}}/>Dolorem magnam quisquam? Facere</li>
							</ul>
							<p className="btttn mt-4">Learn More</p>
						</Col>	
				</Row>
		</div>

  );
};

export default Watch;
