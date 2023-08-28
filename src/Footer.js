import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
     <div>
     <img  src={require('./images/logo.png')} alt="logo1" className='logo1'/>
     <p className='p1'>Success is here!!!</p>
        </div>

      
        <h2 className='head1'>About</h2>
        
        <p className='para1'>Overview</p>
        <p className='para1'>courses</p>
        <p className='para1'>Tutorials</p>
        <p className='para1'>Pricing Plan</p>
        <p className='para1'>Releases</p>


        <div class="vl"></div>


        <h2 className='head2'>Company</h2>
        
        <p className='para2'>About us</p>
        <p className='para2'>Careers</p>
        <p className='para2'>Press</p>
        <p className='para2'>Media Kits</p>
        <p className='para2'>Contact us</p>


        <div class="v2"></div>

        <h2 className='head3'>Resources</h2>
        
        <p className='para3'>Blog</p>
        <p className='para3'>Newsletter</p>
        <p className='para3'>Events</p>
        <p className='para3'>Help-Center</p>
        <p className='para3'>Tutorials</p>

        <div class="v3"></div>

        <h2 className='head4'>Social</h2>
        
        <p className='para4'>Twitter</p>
        <p className='para4'>LinkedIn</p>
        <p className='para4'>Facebook</p>
        <p className='para4'>Discord</p>
        <p className='para4'>Instagram</p>


        <div class="v4"></div>

        <h2 className='head5'>Legal</h2>
        
        <p className='para5'>Terms</p>
        <p className='para5'>Privacy</p>
        <p className='para5'>Cookies</p>
        <p className='para5'>Licenses</p>
        <p className='para5'>Contact</p>

     <div className='greendiv'>
     <img  src={require('./images/Symbols.png')} alt="Symbols" className='Symbols'/>
     </div>
     <p className='para6'>&#64; 2022-2023 Copyright Edfling.com All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
