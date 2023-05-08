import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>สามารถค้นหาหนังสือที่คุณชอบได้จากเว็บไซต์นี้</h2><br />
                <p className='header-text fs-18 fw-3'> คุณสามารถค้นหาหนังสือที่คุณชื่นชอบได้จากเว็บไซต์นี้ เพียงแค่คุณพิมพ์ชื่อหนังสือลงไปในช่องค้นหา </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header