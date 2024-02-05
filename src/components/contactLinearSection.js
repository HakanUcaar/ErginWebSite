import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import SectionLayout from "./layout/sectionLayout";
import { Button } from 'primereact/button';

const ContactLinearSection = () => {
  return (
    <SectionLayout>
      <Card style={{"marginTop":"-7rem"}}>
        <div class="grid">
          <div class="col-12 md:col-3 lg:col-3">
            <span className="p-float-label">
              <InputText className="w-full" id="username" />
              <label htmlFor="username">Ad Soyad</label>
            </span>
          </div>
          <div class="col-12 md:col-3 lg:col-3">
            <span className="p-float-label">
              <InputText className="w-full" id="username" />
              <label htmlFor="username">Telefon</label>
            </span>
          </div>
          <div class="col-12 md:col-3 lg:col-3">
            <span className="p-float-label">
              <InputText className="w-full" id="username" />
              <label htmlFor="username">Email</label>
            </span>
          </div>
          <div class="col-12 md:col-3 lg:col-3">
            <Button label="Randevu Al" className="w-full" icon="pi pi-check"></Button>
          </div>
        </div>
      </Card>
  
    </SectionLayout>
  );
};

export default ContactLinearSection;
