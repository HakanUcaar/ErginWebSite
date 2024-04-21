// HomeSection.js
import React from "react";
import SectionLayout from "./layout/sectionLayout";
import { Timeline } from "primereact/timeline";

const events = [
  {
    status: "Behcet Uz Çocuk Hastalıkları hastanesi",
    date: "2022-2023",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "game-controller.jpg",
  },
  {
    status: "Elazığ Şehir hastanesi",
    date: "2021-2022",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "game-controller.jpg",
  },
  {
    status: "Fırat Üniversitesi Plastik Cerrahi",
    date: "2016-2021",
    icon: "pi pi-cog",
    color: "#673AB7",
  },
  {
    status: "Erciyes Üniversitesi Kardiyoloji",
    date: "2015-2016",
    icon: "pi pi-shopping-cart",
    color: "#FF9800",
  },
  {
    status: "Gölbaşı devlet hastanesi",
    date: "2014-2015",
    icon: "pi pi-check",
    color: "#607D8B",
  },
];

const educations = [
  {
    status: "Fırat Üniversitesi Plastik Rekonstruktif ve Estetik Cerrahi Abd.",
    date: "2016-2021",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "game-controller.jpg",
  },
  {
    status: "İnönü Üniversitesi Tıp fakültesi",
    date: "2008-2014",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "game-controller.jpg",
  },
  {
    status: "Kuleli Askeri Lisesi",
    date: "2003-2007",
    icon: "pi pi-cog",
    color: "#673AB7",
  },
];

const AboutSection = () => {
  return (
    <SectionLayout title="Hakkımda">
      <div className="grid" style={{ padding: "50px" }}>
        <div className="col-6 md:col-6 lg:col-6">
          <a href="#home" className="nav-link scroll">
            <img
              src="/assets/img/face.png"
              srcset="/assets/img/ergin-profil.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="flex col-6 md:col-6 lg:col-6 align-items-center">
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
      {/* <div className="grid ">
        <div className="col-12 md:col-6 lg:col-6">
          <h1>İş tecrübeleri</h1>
          <Timeline
            value={events}
            opposite={(item) => item.status}
            content={(item) => (
              <small className="text-color-secondary">{item.date}</small>
            )}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <h1>Eğitim</h1>
          <Timeline
            value={educations}
            opposite={(item) => item.status}
            content={(item) => (
              <small className="text-color-secondary">{item.date}</small>
            )}
          />
        </div>
      </div> */}
    </SectionLayout>
  );
};

export default AboutSection;
