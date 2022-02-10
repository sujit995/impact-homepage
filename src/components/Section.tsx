// import React from 'react';
// import '../styles/section.css';

// const Section = () => {
//   return (
// <>
//   <div className="section">
//       <div className="left__section">
//         <h2>Why Growing Your Business is Important</h2>
//         <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?</p>
//         <button className="btn">Get In Touch</button>
//       </div>
//       <div className="right__section">
//           <img className="abt_img" src="images/illustration-1.jpg" alt="illustrate" width="620" height="390"/>
//       </div>
//   </div>
//   <div className="box1">
//         <div className="box_col">
//         <img src="images/24-hours-support.svg" alt="call" width="50" height="50"/>
//             <div className="box_info">
//                 <h3>Design</h3>
//                 <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
//             </div>
//         </div>
//         <div className="box_col">
//             <img src="images/good-review.svg" alt="review" width="50" height="50"/>
//             <div className="box_info">
//                 <h3>Design</h3>
//                 <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
//             </div>
//         </div>
//         <div className="box_col">
//             <img src="images/quotation.svg" alt="review" width="50" height="50"/>
//             <div className="box_info">
//                 <h3>Design</h3>
//                 <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.</p>
//             </div>
//         </div>
//         </div>
//         <div className="row">
//                 <div className="col1">
// 					<a href="https://www.youtube.com/watch?v=KI2lsdXJQ40" className="button_play">
// 						<img className="abt_img" src="images/hero-min.jpg" alt="Image" width="620" height="420" />
// 					</a>
// 				</div>	
// 				<div className="col2">
// 					<h2 className="heading">Get Started with Impact</h2>
// 					<p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
// 					<ul className="list">
// 						<li>Deserunt harum incidunt </li>
// 						<li>Ex nesciunt est temporibus ipsum</li>
// 						<li>Vel rem eveniet facere et velit sunt</li>
// 						<li>Aspernatur eaque quis</li>
// 						<li>Dolorem magnam quisquam? Facere</li>
// 					</ul>
// 					<p className="mt-4"><a href="#" className="btn btn-primary">Learn More</a></p>
// 				</div>	
// 			</div>
//   </>
//   );
// };

// export default Section;

import { Row, Col } from 'react-bootstrap';

import '../styles/section.css';

type Props = {};

const Section = (props: Props) => {
  return (
  <div className="container">
      <Row className="section">
      <Col className="left__section">
        <h2>Why Growing Your Business is Important</h2>
         <p>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?</p>
         <button className="btttn">Get In Touch</button>
       </Col>
       <Col className="right__section">
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
  );
};

export default Section;

