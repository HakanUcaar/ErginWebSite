import React, { useState, useEffect } from "react";
import SectionLayout from "../components/layout/sectionLayout";

const AboutPage = () => {
  return (
    <SectionLayout>
      <div class="grid" style={{ padding: "50px" }}>
        <div class="col-12 md:col-6 lg:col-6">
          <a href="#home" className="nav-link scroll">
            <img
              src="/assets/img/face.png"
              srcset="/assets/img/doctor-2.png"
              alt=""
            />
          </a>
        </div>
        <div class="col-12 md:col-6 lg:col-6 flex align-items-center justify-content-center">
          <div className="grid">
            <h2>Hakkımda</h2>
            <p className="lead fs-lg">
              {" "}
              Tilki Göz Ameliyatı, Endoskopik Kaş Kaldırma, Blefaroplasti,
              Bişektomi, Yüz Lipofilling, İple Kaldırma, Orta Yüz Germe, Tam Yüz
              Germe, Çene İmplantı, Rinoplasti, Otoplasti, Bişektomi, Meme
              Dikleştirme, Meme Küçültme, Meme İmplantları, Jinekomasti, Vaser
              Liposuction, Karın Germe, Post Bariatrik Lipoabdominoplasti, Sırt
              Germe, Kol Germe, Six Pack Ameliyatı, Uyluk Kaldırma, Brezilya
              Popo Kaldırma, Anne Estetiği, Genital Gençleştirme, Vajinoplasti,
              Labioplasti
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutPage;
