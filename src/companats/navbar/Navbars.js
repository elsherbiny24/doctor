import React, { useRef } from 'react';
import {Link} from 'react-router-dom';

import './Nav.css'
import logo from '../../aswets/1.png03.png'
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsSearchHeart } from 'react-icons/bs';
import { RiMenu3Line } from 'react-icons/ri';


const Navbars = () => {
  const serchbars = useRef();
  const menubar = useRef();

  const serchbar =() => {
    serchbars.current.classList.toggle('search-her')
    
  }
  const menubars =() => {
    menubar.current.classList.toggle('responsave__nav')
    
  }
  
  return (
  <>
  <header>
    <img src={logo} alt='' className='logo'/>
    <div className='nav' ref={menubar}>
      <button className='close' onClick={menubars}><AiOutlineClose className='icon'/></button>
      <Link to='/' className='links link3'>Home</Link>
      <Link to='/' className='links link2'>pages <span className='plus'>+</span>
      <ul className='ul shadow'>
        <li><Link to='/'className='link'>home</Link></li>
        <li><Link to='/'className='link'>about us</Link></li>
        <li><Link to='/'className='link'>Our Team</Link></li>
        <li><Link to='/'className='link'>Faq's</Link></li>
        <li><Link to='/'className='link'>Booking</Link></li>
        <li><Link to='/'className='link'>Error 404</Link></li>
        <li><Link to='/'className='link'>Login/Register</Link></li>

      </ul>
      </Link>
      <Link to='/' className='links link2'>services <span className='plus'>+</span>
      <ul className='ul shadow'>
        <li><Link to='/'className='link'>home</Link></li>
        <li><Link to='/'className='link'>about us</Link></li>
      </ul>
      </Link>
      <Link to='/blog'className='links'>Blog</Link>
      <Link to='/contact'className='links'>contact us</Link>
    </div>
    <BsSearchHeart className='icon-search' onClick={serchbar}/>
    <div className='inputs-box' ref={serchbars}>
    <button className='close close2' onClick={serchbar}><AiOutlineClose className='icon'/></button>
    <input type='search' placeholder='type to search'/>
    <BsSearchHeart className='icon-search'/>
    </div>
    <div className='mobile d-flex align-items-center'>
      <div className='phone d-flex'>
      <span><BsFillTelephoneFill /></span>
      <p>(+20) 102775297</p>
      </div>
      <button className='btn-contact'>contact us <AiOutlineArrowRight className='icon'/></button>
     </div>
     <RiMenu3Line className='bars-menu' onClick={menubars}/>
  </header>
  </>
  )
}

export default Navbars