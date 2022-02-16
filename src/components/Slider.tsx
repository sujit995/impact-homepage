


import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap';
import '../styles/slider.css';

type Props = {}


const Slider = (props: Props) => {
	const [index, setIndex] = useState(0)

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex)
	}

  return (

	<Carousel variant="dark" className="bg-light" style={{ color: 'black', padding: '100px 0', margin: '80px 0'}} activeIndex={index} onSelect={handleSelect}>
		<Carousel.Item>
			<div className="md-5 mx-auto d-flex justify-content-center align-content-center" style={{ width: '110px', height: '110px'}}>
				<img src='images/person_1.jpg' width="100px" className="my-auto" style={{ borderRadius: '50%', border: '5px solid #fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}} />
			</div>
			<div className="col-6 mx-auto text-center">
				<h6 className="fw-bold">Maria Jones</h6>
				<p style={{ fontSize: '0.9rem', fontFamily: 'Open Sans'}}>Customer</p>
				<i style={{ fontFamily: 'Georgia', fontSize: '1.2rem', lineHeight: '2'}}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</i>
			</div>
		</Carousel.Item>
		<Carousel.Item>
			<div className="md-5 mx-auto d-flex justify-content-center align-content-center" style={{ width: '110px', height: '110px'}}>
				<img src='images/person_2.jpg' width="100px" className="my-auto" style={{ borderRadius: '50%', border: '5px solid #fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}} />
			</div>
			<div className="col-6 mx-auto text-center">
				<h6 className="fw-bold">Maria Jones</h6>
				<p style={{ fontSize: '0.9rem', fontFamily: 'Open Sans'}}>Customer</p>
				<i style={{ fontFamily: 'Georgia', fontSize: '1.2rem', lineHeight: '2'}}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</i>
			</div>
		</Carousel.Item>
		<Carousel.Item>
			<div className="md-5 mx-auto d-flex justify-content-center align-content-center" style={{ width: '110px', height: '110px'}}>
				<img src='images/person_3.jpg' width="100px" className="my-auto" style={{ borderRadius: '50%', border: '5px solid #fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}} />
			</div>
			<div className="col-6 mx-auto text-center">
				<h6 className="fw-bold">Maria Jones</h6>
				<p style={{ fontSize: '0.9rem', fontFamily: 'Open Sans'}}>Customer</p>
				<i style={{ fontFamily: 'Georgia', fontSize: '1.2rem', lineHeight: '2'}}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</i>
			</div>
		</Carousel.Item>
	</Carousel>
  )
}

export default Slider





