import React from 'react'
import './Footer.css'


const Footer = () => (
    <div className="footer">
                <ul className="icon-bar">
                    <a href="https://www.instagram.com/strattonterrace//"target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                    </a> 
                {}
                    <a href="https://goo.gl/maps/TYkYHn3Z1cfGL4297" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google"></i>
                    </a>
                {}
                    <a href="https://www.facebook.com/Stratton-Terrace-Marketing-110106154616137" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                    </a>
                    {}
                    <a href="https://twitter.com/StrattonTerrace/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                    </a>
                </ul>
   <span href="https://strattonterrace.com/" target="_blank" className="copyright"rel="noopener noreferrer">COPYRIGHT © 2021 Stratton Terrace Marketing, LLC - ALL RIGHTS RESERVED.</span>
   {}
   <span href="https://strattonterrace.com/" target="_blank" className="POWERED" rel="noopener noreferrer">POWERED BY STRATTON TERRACE MARKETING </span>
  
    </div>
  );

export default Footer
