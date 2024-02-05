import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import Dropdown from './Dropdown';

const HkNavbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isTedavilerVisible, setTedavilerVisible] = useState(false);
    const [isLanguageVisible, setLanguageVisible] = useState(false);

    const handleMouseEnter = () => {
      setTedavilerVisible(true);
    };
  
    const handleMouseLeave = () => {
      setTedavilerVisible(false);
    };

    const handleLanguageMouseEnter = () => {
        setLanguageVisible(true);
      };
    
      const handleLanguageMouseLeave = () => {
        setLanguageVisible(false);
      };    
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
        <div className='wrapper bg-soft-primary flex justify-content-center'>
            <div class="container grid my-3 flex" >
                <div class="col flex-grow-1" id="brand">
                    <div className='flex align-items-center'>
                        <Link to='/' className='hk-navbar-logo'>
                        <img
                            src="/assets/img/face.png"
                            srcset="/assets/img/face.png"
                            alt=""
                            className="logo-img"
                        />
                            <i class='fab fa-firstdraft' />
                        </Link>
                        <h3> Dr. Ergin Erdoğan</h3>   
                    </div>
                </div>
                <ul className="flex align-items-center">
                    <li >
                        <Link to='/' className='nav-link'>
                            Anasayfa
                        </Link>                    
                    </li>
                    <li>
                        <Link to='/about' className='nav-link'>
                            Hakkımda
                        </Link>                         
                    </li>
                    <li className={ isTedavilerVisible ? "nav-item dropdown show" : "nav-item dropdown"}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <Link
                            to='/services'
                            className="nav-link"
                            >
                            Tedaviler <i className='fas fa-caret-down' />
                        </Link>
                        <ul className="dropdown-menu" style={isTedavilerVisible ? { display: "block" }: { display: "none" }}>
                            <li className="nav-item">
                                <Link
                                    to='/services/breast'
                                    className="dropdown-item"
                                    >
                                    Göğüs Büyütme 
                                </Link>                                
                            </li>
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">Meme Küçültme</a>
                            </li>
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">Botoks</a>
                            </li>
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">Burun Estetiği</a>
                            </li>
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">Karın Germe</a>
                            </li>      
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">Yüz Germe</a>
                            </li>   
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">Popo Kaldırma</a>
                            </li>                                                                                                                                                                                                 
                        </ul>
                    </li>        
                    <li>
                        <Link to='/contact' className='nav-link'>
                            İletişim
                        </Link>                          
                    </li>   
                    <li className={ isLanguageVisible ? "nav-item dropdown show" : "nav-item dropdown"}
                        onMouseEnter={handleLanguageMouseEnter}
                        onMouseLeave={handleLanguageMouseLeave}>
                        <a href="/home" className="nav-link">TR</a>
                        <ul className="dropdown-menu" style={isLanguageVisible ? { display: "block" }: { display: "none" }}>
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">Türkçe</a>
                            </li> 
                            <li className="nav-item">
                                <a href="/body" className="dropdown-item">English</a>
                            </li>                                                         
                        </ul>
                    </li>                                                                        
                </ul>
            </div>
        </div>
    </>
  );
}

export default HkNavbar;