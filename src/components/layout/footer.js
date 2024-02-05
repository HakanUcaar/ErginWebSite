// Footer.js
import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="bg-dark text-inverse" style={{"padding-top":"50px"}}>
      <div className="container pt-13 pt-md-15 pb-7">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="h2 mb-3 text-white">İletişime Geçin</h3>
              <p className="lead mb-5">
                {" "}
                <a href="mailto:info@nexera.solutions">Göğüs Büyütme</a><br/>
                <a href="mailto:info@nexera.solutions"> Meme Dikleştirme</a><br/>
                <a href="mailto:info@nexera.solutions"> Meme Küçültme</a><br/>
                <a href="mailto:info@nexera.solutions"> Botoks</a><br/>
                <a href="mailto:info@nexera.solutions"> Burun Estetiği</a><br/>
                <a href="mailto:info@nexera.solutions"> Yüz Germe</a><br/>
                <a href="mailto:info@nexera.solutions"> Karın Germe</a><br/>
                <a href="mailto:info@nexera.solutions"> Popo Kaldırma</a>{" "}
              </p>
              <a href="/contact" className="btn btn-white rounded-pill">
                Haydi başlayalım!
              </a>
            </div>
          </div>
          <div className="col-md-4 col-lg-6"></div>
          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3"> Neredeyim? </h4>
              <address>
                {" "}
                Mansuroğlu Mah. Islamkerimov Cad. No: 4/A Bayraklı/İzmir
              </address>
              <a href="mailto:info@nexera.solutions">
                info@opdrerginerdogan.com
              </a>
              <br></br>
              <a href="tel:+905439169000">+90 543 916 9000</a>
            </div>
          </div>
        </div>
        <hr className="mt-13 mt-md-15 mb-7" />
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">
            {" "}
            © 2023 Op. Dr. Ergin Erdoğan Tüm Hakları saklıdır.{" "}
            <strong>
              <a
                href="https://www.privacypolicies.com/live/ce295d68-0363-43db-8ff1-8109e73bae89"
                target="_blank"
                className="hover"
              >
                Kullanım Şartları
              </a>
            </strong>
          </p>
          <nav className="nav social social-white text-md-end">
            <a href="/home">
              <Unicons.UilHome />
            </a>
            <a
              href="https://www.linkedin.com/company/nexera-solutions/"
              target="_blank"
            >
              <Unicons.UilLinkedin />
            </a>
          </nav>
        </div>
      </div>
      <div className="progress-wrap active-progress">
        <svg
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
          className="progress-circle svg-content"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            //style={"transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 0;"}
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
