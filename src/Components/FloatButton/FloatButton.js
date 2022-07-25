import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import './float.css';
import { Link } from 'react-router-dom';

const FloatButton = () => {
  return (
    <>
      <Link to='/infoProduk'><button type="button" className='float'><IoIosAdd className='m-1'/>Jual</button></Link>
    </>
  )
}

export default FloatButton