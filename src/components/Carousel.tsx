import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/'
export default function App() {
return (
          <div className="container-fluid" style={{backgroundColor:'#dddddd'}} id="carouel">
              <Carousel>
                <Carousel.Item interval={1500}>
                <div className="testimonial bg-color-2 text-center">
									<img src="images/person_3.jpg" alt="Image" className="img-fluid" style={{borderRadius: "50%", width:'100px', height:'100px'}} />
									<h3 className="font-weight-bold">Maria Jones</h3>
									<span className="position d-block mb-3">Customer</span>
									<blockquote>
										<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
									</blockquote>
								</div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <div className="testimonial bg-color-2 text-center">
									<img src="images/person_3.jpg" alt="Image" className="img-fluid" style={{borderRadius: "50%", width:'100px', height:'100px'}}/>
									<h3 className="font-weight-bold">Maria Jones</h3>
									<span className="position d-block mb-3">Customer</span>
									<blockquote>
										<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
									</blockquote>
								</div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <div className="testimonial bg-color-2 text-center">
									<img src="images/person_3.jpg" alt="Image" className="img-fluid" style={{borderRadius: "50%", width:'100px', height:'100px'}}/>
									<h3 className="font-weight-bold">Maria Jones</h3>
									<span className="position d-block mb-3">Customer</span>
									<blockquote>
										<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
									</blockquote>
								</div>
                </Carousel.Item>
              </Carousel>
          </div>
);
}
