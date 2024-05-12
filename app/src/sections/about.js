import React from "react";
import Section from "../components/section";

const AboutSection = () => {
  return (
    <Section title="Hakkımda"  className="bg-soft-ash">
      <div className="grid p-5">
        <div className="col-12 sm:col-12 md:col-6 lg:col-6 p-5">
          <img
            className="border-round-md"
            src="/assets/img/face.png"
            srcset="/assets/img/ergin-profil.jpg"
            alt=""
            style={{width:"100%"}}
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
            Germe, Kol Germe, Six Pack Ameliyatı, Uyluk Kaldırma, Brezilya Popo
            Kaldırma, Anne Estetiği, Genital Gençleştirme, Vajinoplasti,
            Labioplasti
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
