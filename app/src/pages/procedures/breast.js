import React from "react";
import Section from "../../components/section";
import { Link } from "react-router-dom";

const backgroundImagePath = "/assets/img/about-header.jpg";
const backgroundImg = {
  backgroundImage: `url(${backgroundImagePath})`,
  height: "50vh",
  backgroundSize: "cover",
};

const BreastPage = () => {
  return (
    <div>
      <Section style={backgroundImg}>
        <div className="flex align-items-center justify-content-center h-100">
          <h2 className="m-5 text-5xl display-4">Göğüs İşlemleri</h2>
        </div>
      </Section>
      <Section>
        <div class="grid align-items-center justify-content-center">
          <div class="col-12 sm:col-12 md:col-12 lg:col-6 p-5">
            <img
              src="/assets/img/breast.png"
              srcset="/assets/img/breast.png"
              alt=""
              className="border-round-md"
              style={{ width: "100%" }}
            />
          </div>
          <div class="col-12 sm:col-12 md:col-6 lg:col-6 p-2">
            <p className="lead fs-lg">
              Meme büyüklüğü ve şekline ilişkin her türlü dönüşümü
              gerçekleştirmek için köklü ameliyatlar mevcuttur. En yaygın
              olanları meme büyütme, meme küçültme ve mastopeksi (memenin
              dikleştirilmesi ve sıkılaştırılması) veya bunların bir
              kombinasyonudur.
            </p>
            <div className="flex flex-column">
              <div className="flex align-items-center">
                <i className="pi pi-check-circle pr-2"></i>
                <Link to="/services/breast" className="dropdown-item">
                  <strong style={{ color: "var(--bs-primary)" }}>
                    Göğüs Büyütme
                  </strong>
                </Link>
              </div>
              <div className="flex align-items-center">
                <i className="pi pi-check-circle pr-2"></i>
                <Link to="/services/breast" className="dropdown-item">
                  <strong style={{ color: "var(--bs-primary)" }}>
                    Meme Dikleştirme
                  </strong>
                </Link>
              </div>
              <div className="flex align-items-center">
                <i className="pi pi-check-circle pr-2"></i>
                <Link to="/services/breast" className="dropdown-item">
                  <strong style={{ color: "var(--bs-primary)" }}>
                    Meme Küçültme
                  </strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BreastPage;
