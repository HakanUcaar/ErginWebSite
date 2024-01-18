// HomeSection.js
import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ContactSection = () => {
  return (
    <section className="wrapper bg-gradient-primary" style={{"margin-bottom":"-200px"}}>
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-6 col-lg-6 col-xl-6 order-lg-2 position-relative">
            <h2 className="display-4 mb-3">Bir Randevu Planlayın!</h2>
            <p className="lead fs-lg">
              {" "}
              Randevusu almak için lütfen telefonla veya iletişim
              formumuzu doldurarak bize ulaşın..{" "}
            </p>
            <div>
              <span class="btn btn-lg btn-primary rounded-pill me-2 scroll">
                0507 599 47 71
              </span>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 order-lg-2">
            <div className="card shadow-lg" style={{"height":"500px"}}>
              <div className="row">
                <div className="col-xl-10 mx-auto">
                    <form className="contact-form needs-validation">
                        <div className="row gx-4"> 
                            <div className="col-md-6">
                            <div class="form-floating mb-4">
                                <input id="form_name" type="text" name="name" required="required" className="form-control"/>
                                <label for="form_name">Adınız ve Soyadınız *</label>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
