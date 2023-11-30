import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='navBody'>
      <nav className='nav'>
        <div onClick={()=> navigate('/')}>
            Home
        </div>
        <div onClick={()=> navigate('/create')}>
            Create Task
        </div>
        <div onClick={()=> navigate('/display')}>
            Show Tasks
        </div>
      </nav>
    </div>
  )
}

export default Navbar
