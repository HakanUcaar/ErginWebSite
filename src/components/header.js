// StickyBar.js
import React, { useState, useEffect } from 'react';

const StickyBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <header className="wrapper bg-soft-primary">
        <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
          <div className="container flex-lg-row flex-nowrap align-items-center"><div className="navbar-brand w-100">
            <a href="#home" className="nav-link scroll">
              <img src="/assets/img/face.png" srcset="/assets/img/face.png" alt="" className="logo-img"/>
            </a>
            <h3> Dr. Ergin Erdoğan</h3>
          </div>  
          <div className="navbar-collapse offcanvas-nav">
            <div className="offcanvas-header d-lg-none d-xl-none">
              <a href="#home" className="nav-link scroll">
                <img src="/img/logo-title.612cbc54.png" srcset="/img/logo-title.612cbc54.png" alt="" className="logo-img"/>
              </a>
              <button type="button" aria-label="Close" className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"></button>
            </div>
            <ul className="navbar-nav" data-smartmenus-id="17027624050061482">
              <li className="nav-item">
                <a href="#home" className="nav-link scroll">Anasayfa</a>
              </li>
              <li className="nav-item">
                <a href="/home#about" className="nav-link scroll">Hakkımızda</a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link has-submenu" id="sm-17027624050061482-1" aria-haspopup="true" aria-controls="sm-17027624050061482-2" aria-expanded="false">Tedaviler<span className="sub-arrow"></span></a>
                <ul className="dropdown-menu" id="sm-17027624050061482-2" role="group" aria-hidden="true" aria-labelledby="sm-17027624050061482-1" aria-expanded="false">
                  <li className="dropdown">
                    <a href="#" className="dropdown-item has-submenu" id="sm-17027624050061482-3" aria-haspopup="true" aria-controls="sm-17027624050061482-4" aria-expanded="false">Üretim Yönetimi<span className="sub-arrow"></span></a>
                    <ul className="dropdown-menu" id="sm-17027624050061482-4" role="group" aria-hidden="true" aria-labelledby="sm-17027624050061482-3" aria-expanded="false">
                      <li className="nav-item"><a href="/smart-data-management" className="dropdown-item"> Akıllı Veri Toplama Sistemi </a></li>
                      <li className="nav-item"><a href="/model-technical-information" className="dropdown-item"> Model Teknik Bilgi ve Döküman Yönetimi </a></li>
                      <li className="nav-item"><a href="/model-flow" className="dropdown-item"> Operasyon ve Model Akış Yönetimi </a></li>
                      <li className="nav-item"><a href="/product-barcode" className="dropdown-item"> Tekil Ürün Barkod ve İzleme </a></li>
                      <li className="nav-item"><a href="/quality-management" className="dropdown-item"> Kalite Güvence Yönetimi </a></li>
                      <li className="nav-item"><a href="/laboratory-management" className="dropdown-item"> Laboratuvar Yönetimi </a></li>
                      <li className="nav-item"><a href="/cuttingroom-management" className="dropdown-item"> Kesimhane Yönetimi </a></li>
                      <li className="nav-item"><a href="/warehouse-management" className="dropdown-item"> Depo Yönetimi </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown"><a href="#" className="nav-link has-submenu" id="sm-17027624050061482-7" aria-haspopup="true" aria-controls="sm-17027624050061482-8" aria-expanded="false">Galeri<span className="sub-arrow"></span></a></li>
              <li className="nav-item"><a href="/contact" className="nav-link"> İletişim </a></li>
            </ul>
            </div>
            <div className="navbar-other d-flex ms-auto">
              <ul data-sm-skip="true" className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item dropdown language-select text-uppercase"><a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-item dropdown-toggle">tr</a>
                  <ul className="dropdown-menu">
                    <li id="langtr" className="nav-item"><a href="#" className="dropdown-item">Tr</a></li>
                    <li id="langen" className="nav-item"><a href="#" className="dropdown-item">En</a></li>
                  </ul>
                </li>
                <li className="nav-item d-lg-none">
                  <div className="navbar-hamburger"><button data-toggle="offcanvas-nav" className="hamburger animate plain"><span></span></button></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default StickyBar;