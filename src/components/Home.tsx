
import { Row, Col } from 'react-bootstrap';
import "../styles/home.css";
import { MdLayers } from "react-icons/md";
import { BsBagDash } from "react-icons/bs";
import { MdComputer } from "react-icons/md";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="container-fluid" id="contain">
        <Row className="rows">
            <Col className="img-columns">
                <img className="img" src="images/persons-group-1.png" alt="photo" />
            </Col>
            <Col className="columns">
                <div className="hero-intro">
                    <h1>Let's growth your business with us</h1>
 				    <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                    <button className="bttnn">Get In Touch</button>
                </div>
            </Col>
            <Col className="img-columns">
                <img className="img" src="images/persons-group-2.png" alt="photo" />
            </Col>
        </Row>
        <div className="container mt-5">
            <Row className="sub-row">
                <Col className="sub-col">
                     <div className="icon">
                        <MdLayers className="icons"/>
                     </div>
                     <div className="info">
                         <h3>Design</h3>
                         <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                     </div>
                 </Col>
                 <Col className="sub-col">
                     <div className="icon">
                         <MdComputer className="icons"/></div>
                     <div className="info">                         
                         <h3>Applications</h3>
                         <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                     </div>
                 </Col>
                 <Col className="sub-col">
                     <div className="icon">
                        <BsBagDash className="icons"/>
                     </div>
                     <div className="info">
                         <h3>eCommerce</h3>
                         <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
                     </div>
                 </Col>
            </Row>
        </div>
    </div>
  );
};

export default Home;

