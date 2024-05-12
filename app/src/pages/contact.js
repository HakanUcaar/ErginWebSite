import React, { useState } from "react";
import Section from "../components/section";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import GoogleMapReact from "google-map-react";
import { Card } from "primereact/card";

const backgroundImagePath = "/assets/img/contact-header.jpg";
const backgroundImg = {
  backgroundImage: `url(${backgroundImagePath})`,
  height: "50vh",
  backgroundSize: "cover",
};

const defaultProps = {
  center: {
    lat: 38.410565476604205,
    lng: 27.05292553970043,
  },
  zoom: 11,
};

const ContactPage = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Section style={backgroundImg}>
        <div className="flex align-items-center justify-content-center h-100">
          <h3>İleştişime Geçin</h3>
        </div>
      </Section>
      <Section>
        <div className="grid p-5">
          <div className="col-12 sm:col-12 md:col-4 lg:col-4 p-5 ">
            <div className="flex flex-column align-items-center text-center">
              <div
                className="p-3"
                style={{ backgroundColor: "white", borderRadius: "1rem" }}
              >
                <i
                  className="pi pi-phone"
                  style={{ fontSize: "2rem", color: "var(--primary-color)" }}
                ></i>
              </div>

              <h3>Telefon</h3>
              <span>
                Operasyonlar ve diğer aile bireyleriniz için bilgi alın
              </span>

              <strong className="p-3">
                <a
                  target="_blank"
                  href="https://www.privacypolicies.com/live/ce295d68-0363-43db-8ff1-8109e73bae89"
                  style={{color: "var(--primary-color)"}}
                >
                  +90 507 599 47 71
                </a>
              </strong>
            </div>
          </div>
          <div className="col-12 sm:col-12 md:col-4 lg:col-4 p-5">
            <div className="flex flex-column align-items-center text-center">
              <div
                className="p-3"
                style={{ backgroundColor: "white", borderRadius: "1rem" }}
              >
                <i
                  className="pi pi-envelope"
                  style={{ fontSize: "2rem", color: "var(--primary-color)" }}
                ></i>
              </div>
              <h3>Email</h3>
              <span>Mail atarak aklınızdaki soruları sorabilirsiniz</span>
              <strong className="p-3">
                <a
                  target="_blank"
                  href="https://www.privacypolicies.com/live/ce295d68-0363-43db-8ff1-8109e73bae89"
                  style={{color: "var(--primary-color)"}}
                >
                  info@gmail.com
                </a>
              </strong>
            </div>
          </div>
          <div className="col-12 sm:col-12 md:col-4 lg:col-4 p-5">
            <div className="flex flex-column align-items-center text-center">
              <div
                className="p-3"
                style={{ backgroundColor: "white", borderRadius: "1rem" }}
              >
                <i
                  className="pi pi-map-marker"
                  style={{ fontSize: "2rem", color: "var(--primary-color)" }}
                ></i>
              </div>
              <h3>Lokasyon</h3>
              <span>202/27 dk no 5 Karşıyaka / İzmir de bir yerlerdeyim</span>
              <strong className="p-3">
                <a
                  target="_blank"
                  href="https://www.privacypolicies.com/live/ce295d68-0363-43db-8ff1-8109e73bae89"
                  style={{color: "var(--primary-color)"}}
                >
                  Google Maps de görüntüle
                </a>
              </strong>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid p-5">
          <div className="flex col-12 sm:col-12 md:col-12 lg:col-12 align-items-center p-2">
            <div className="w-full">
              <div className="flex flex-column gap-2 p-1">
                <label htmlFor="username">Ad Soyad *</label>
                <InputText
                  className="p-2"
                  id="username"
                  aria-describedby="username-help"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <div className="flex flex-column gap-2 p-1">
                <label htmlFor="telephone">Telefon *</label>
                <InputText
                  className="p-2"
                  id="telephone"
                  aria-describedby="username-help"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <div className="flex flex-column gap-2 p-1">
                <label htmlFor="email">Eposta *</label>
                <InputText
                  className="p-2"
                  id="email"
                  aria-describedby="username-help"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <div className="flex flex-column gap-2 p-1">
                <label htmlFor="comment">Eklemek istedikleriniz</label>
                <InputTextarea
                  className="p-2"
                  id="comment"
                  aria-describedby="username-help"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  rows={5}
                />
              </div>

              <div className="flex flex-column p-2">
                <div className="flex align-items-center">
                  <Checkbox />
                  <label className="ml-2">
                    KVKK uyarınca ilgili Bilgilendirme 'yi okudum.Kişisel
                    verilerimin belirtilen kapsamda işlenmesini kabul ediyorum.
                  </label>
                </div>
                <div className="flex align-items-center">
                  <Checkbox />
                  <label className="ml-2">
                    Randevu hatırlatma ve hizmet sunumu için iletişim
                    bilgilerimin kullanılmasına izin veriyorum.
                  </label>
                </div>
              </div>

              <div className="card flex p-1">
                <Button className="p-2" label="Gönder" />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        {/* // Important! Always set the container height explicitly */}
        <div className="w-100" style={{ height: "100vh" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBGdhplGRSawAr1G8059K1m2WHSx00lqas",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {/* <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            /> */}
          </GoogleMapReact>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
