
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';

import '../styles/footer.css';

const Footer = (): JSX.Element => <footer className="page-footer font-small blue pt-4"  style={{backgroundColor: 'black', minHeight: "450px"}}>
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-5 mt-md-0" id="footer_head">
                <h5 className="text-capitalize">About Impact<span style={{color:'#f65a40'}}>.</span></h5>
                <p className="para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className="list-unstyled float-left links mt-4" id="social_icons">
                    <span><li><FaInstagram className="social_icon"/></li></span>
                    <span><li><FiTwitter className="social_icon"/></li></span>
                    <span><li><FiFacebook className="social_icon"/></li></span>
                    <span><li><FaLinkedinIn className="social_icon"/></li></span>
                    <span><li><FaPinterest className="social_icon"/></li></span>
                    <span><li><FaDribbble className="social_icon"/></li></span>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-capitalize">Links</h5>
                <ul className="list-unstyled float-left links">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
				</ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-capitalize">Company</h5>
                <ul className="list-unstyled float-left links">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
				</ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-capitalize">Contact</h5>
                <p className="para">43 Raymouth Rd. Baltemoer, London 3910</p>
                <ul className="list-unstyled links mb-4">
                  <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                  <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                  <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
				</ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">
        <p style={{color: '#ffffff80'}}>Copyright ??<script>document.write(new Date().getFullYear());</script>2022. All Rights Reserved. ??? Designed with love by <a href="https://untree.co" target="_blank" rel="nofollow noopener" style={{color: '#fff', textDecoration: "none"}}>Untree.co</a> ??? <a href="https://untree.co/license" target="_blank" rel="nofollow noopener" style={{color: '#fff', textDecoration: "none"}}>License</a></p>
    </div>

</footer>

export default Footer