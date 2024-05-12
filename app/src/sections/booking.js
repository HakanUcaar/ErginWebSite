import React, { useState } from "react";
import Section from "../components/section";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

const BookingSection = () => {
  const [value, setValue] = useState("");

  return (
    <Section title="Bir Randevu Planlayın">
      <div className="grid p-5">
        <div className="col-12 sm:col-12 md:col-6 lg:col-6 p-5">
          <span lassName="lead fs-lg">
            Randevusu almak için lütfen telefonla veya iletişim formumuzu
            doldurarak bize ulaşın..
          </span>
        </div>
        <div className="flex col-12 sm:col-12 md:col-6 lg:col-6 align-items-center p-2">
          <Card className="w-full">
            <div className="flex flex-column gap-2 p-1">
              <label htmlFor="username">Hasta Adı *</label>
              <InputText
                className="p-2"
                id="username"
                aria-describedby="username-help"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div className="flex flex-column gap-2 p-1">
              <label htmlFor="email">Email *</label>
              <InputText
                className="p-2"
                id="email"
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
              <label htmlFor="comment">Mesajınız</label>
              <InputTextarea
                className="p-2"
                id="comment"
                aria-describedby="username-help"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={5} 
              />
            </div>

            <div className="card flex justify-content-center p-1">
              <Button className="w-full p-2" label="Randevu İsteğini Gönder" />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default BookingSection;
