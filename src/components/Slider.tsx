import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/slider.css';


export default function Slider() {
return (
          <div className="container-fluid" style={{backgroundColor:'#ddddee'}} id="carousel">
              <Carousel>
                	<Carousel.Item interval={1500}>
                			<div className="testimonial bg-color-2 text-center" id="carousel-items">
								<img src="images/person_3.jpg" alt="Image" className="person_image" />
								<h3 className="font-weight-bold">Maria Jones</h3>
								<span className="position d-block mb-3">Customer</span>
								<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>	
							</div>
                	</Carousel.Item>
					<Carousel.Item interval={500}>
							<div className="testimonial bg-color-2 text-center" id="carousel-items">
								<img src="images/person_3.jpg" alt="Image" className="person_image"/>
								<h3 className="font-weight-bold">Maria Jones</h3>
								<span className="position d-block mb-3">Customer</span>
								<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
							</div>
					</Carousel.Item>
                	<Carousel.Item interval={500}>
                			<div className="testimonial bg-color-2 text-center" id="carousel-items">
								<img src="images/person_3.jpg" alt="Image" className="person_image"/>
								<h3 className="font-weight-bold">Maria Jones</h3>
								<span className="position d-block mb-3">Customer</span>
								<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
							</div>
                	</Carousel.Item>
              </Carousel>
          </div>
);
}

