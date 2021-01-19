import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>PARTICIPA CON NOSOTROS</h2>
            <Link to='/'>Direccion: Ambato y Garcia Moreno, Campus IST YAVIRAC</Link>
            <Link to='/'>Teléfono:(593)     999705620</Link>
            <Link to='/'>Email:probayo@yavirac.edu.ec</Link>
           
          </div>
          <div class='footer-link-items'>
            <h2>LINKS DE INTERES</h2>
            <Link to='/'>IST YAVIRAC</Link>
            <Link to='/'>Conoce al equipo</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              NUR TECH
              <i  id="logo "class="fa fa-desktop" aria-hidden="true"/>
            </Link>
          </div>
          <small class='website-rights'>Nur Tech © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;