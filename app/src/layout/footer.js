// Footer.js
import React from "react";
import { Divider } from "primereact/divider";

const Footer = () => {
  return (
    <footer className="bg-dark text-inverse" style={{ "padding-top": "50px" }}>
      <div className="container-md">
        <div className="grid">
          <div className="col-12 sm:col-12 md:col-6 lg:col-6">
            <h3 className="h2 text-white mb-3">İletişime Geçin</h3>
            <p className="lead">
              {" "}
              <a href="mailto:info@nexera.solutions">Göğüs Büyütme</a>
              <br />
              <a href="mailto:info@nexera.solutions"> Meme Dikleştirme</a>
              <br />
              <a href="mailto:info@nexera.solutions"> Meme Küçültme</a>
              <br />
              <a href="mailto:info@nexera.solutions"> Botoks</a>
              <br />
              <a href="mailto:info@nexera.solutions"> Burun Estetiği</a>
              <br />
              <a href="mailto:info@nexera.solutions"> Yüz Germe</a>
              <br />
              <a href="mailto:info@nexera.solutions"> Karın Germe</a>
              <br />
              <a href="mailto:info@nexera.solutions"> Popo Kaldırma</a>{" "}
            </p>
            <a href="/contact">
              Haydi başlayalım!
            </a>
          </div>
          <div className="col-12 md:col-4 lg:col-4"></div>
          <div className="col-12 md:col-2 lg:col-2">
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
        <div style={{borderTop:"1px solid #f7f7f8"}}>
          <div className="flex align-items-center justify-content-between">
            <p>
              {" "}
              © 2023 Op. Dr. Ergin Erdoğan Tüm Hakları saklıdır.{" "}
              <strong>
                <a
                  href="https://www.privacypolicies.com/live/ce295d68-0363-43db-8ff1-8109e73bae89"
                  target="_blank"
                >
                  Kullanım Şartları
                </a>
              </strong>
            </p>
            {/* <nav className="nav social social-white text-md-end">
            <a href="/home">
              <Unicons.UilHome />
            </a>
            <a
              href="https://www.linkedin.com/company/nexera-solutions/"
              target="_blank"
            >
              <Unicons.UilLinkedin />
            </a>
          </nav> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
