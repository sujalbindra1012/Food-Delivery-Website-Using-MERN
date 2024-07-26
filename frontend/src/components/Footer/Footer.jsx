import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi necessitatibus corporis error accusantium doloremque corrupti! Nihil qui temporibus iusto voluptates consectetur voluptatibus cupiditate facere sapiente, minima exercitationem repudiandae repellat maxime modi dignissimos nulla rem dolore suscipit odit obcaecati sed totam! Ratione explicabo fugit sed expedita amet dicta quibusdam cum laboriosam.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-232-232-4454</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © Tomato.com- All Right Reserved .
            </p>
        </div>
    )

}

export default Footer 
