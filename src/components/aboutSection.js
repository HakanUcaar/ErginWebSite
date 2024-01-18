// HomeSection.js
import React from "react";
import * as Unicons from '@iconscout/react-unicons';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="wrapper bg-gradient-primary"
    >
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-8 col-lg-6 col-xl-6 order-lg-2 position-relative">
            {/* <div
              data-rellax-speed="1"
              className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
              style="top: -2rem; right: -1.9rem; transform: translate3d(0px, -9px, 0px);"
            ></div> */}
            <figure className="rounded">
              <img
                src="/img/about.6c32dbf5.png"
                srcset="/img/about.6c32dbf5.png"
                alt=""
              />
            </figure>
          </div>
          <div className="col-lg-6">
            <h2 className="display-4 mb-3">Hakkımda</h2>
            <div className="row gy-3">
                <div className="col-xl-6">
                <ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
                    <li><span><Unicons.UilCheck /></span><span>Uyarı Sistemleri</span></li>
                    <li><span><Unicons.UilCheck /></span><span>Darboğaz Belirleme ve Erken Uyarı Sistemi</span></li>
                </ul>
                </div>
              
            </div>


            <p className="lead fs-lg">
              {" "}
              Kuruluşların dijital çağda büyümesine ve gelişmesine yardımcı
              olmak için oluşturduğumuz teknoloji çözümlerini bir araya
              getirerek dönüşümü yönlendiriyor ve süreçleri oluşturuyoruz.
              Müşterilerimizin verilerini yönetmesine ve eşzamanlı olarak
              izlemesine, işletmelerin teknolojisini modernize etmesine,
              operasyonları optimize etmesine ve otomatikleştirmesine, dijital
              büyümeyi hızlandırmasına, çarpıcı dijital deneyimler yaratmasına
              ve dijital yetenek ve kültür oluşturmasına yardımcı oluyoruz.{" "}
            </p>
            <div className="row gx-xl-10 gy-6">

                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
