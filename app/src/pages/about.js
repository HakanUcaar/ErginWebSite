import React from "react";
import Section from "../components/section";

const backgroundImagePath = "/assets/img/about-header.jpg";
const backgroundImg = {
  backgroundImage: `url(${backgroundImagePath})`,
  height: "50vh",
  backgroundSize: "cover",
};

const AboutPage = () => {
  return (
    <div>
      <Section style={backgroundImg}>
        <div className="flex align-items-center justify-content-center h-100">
          <h2 className="m-5 text-5xl display-4">Hakkımda</h2>
        </div>
      </Section>
      <Section className="bg-soft-ash">
        <div className="grid p-5">
          <div className="col-12 sm:col-12 md:col-6 lg:col-6 p-5">
            <img
              className="border-round-md"
              src="/assets/img/face.png"
              srcset="/assets/img/ergin-profil.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="flex col-12 sm:col-12 md:col-6 lg:col-6 align-items-center p-2">
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
      </Section>
    </div>
  );
};

export default AboutPage;
