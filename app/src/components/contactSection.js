import React from "react";
import SectionLayout from "./layout/sectionLayout";

const ContactSection = () => {
  return (
    <SectionLayout title="Bir Randevu Planlayın!">
      <div className="col-md-6 col-lg-6 col-xl-6 order-lg-2 position-relative">
        <p className="lead fs-lg">
          {" "}
          Randevusu almak için lütfen telefonla veya iletişim formumuzu
          doldurarak bize ulaşın..{" "}
        </p>
        <div>
          <span class="btn btn-lg btn-primary rounded-pill me-2 scroll">
            0545 725 41 42
          </span>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 order-lg-2">
        <div className="card shadow-lg" style={{ height: "500px" }}>
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <form className="contact-form needs-validation">
                <div className="row gx-4">
                  <div className="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        required="required"
                        className="form-control"
                      />
                      <label for="form_name">Adınız ve Soyadınız *</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
