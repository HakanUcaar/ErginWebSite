// ContactPage.js
import React, { useState, useEffect } from 'react';

const ContactPage = () => {

  return (
    <section class="wrapper bg-light" style="padding-top: 157px; margin-top: -157px;">
        <div class="container py-14 py-md-16">
            <div class="row"><div class="col-xl-10 mx-auto">
                <div class="row gy-10 gx-lg-8 gx-xl-12">
                    <div class="col-lg-8">
                        {/* <form class="contact-form needs-validation">
                            <div class="messages"></div>
                            <div class="row gx-4">
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input id="form_name" type="text" name="name" required="required" class="form-control"/>
                                        <label for="form_name">Adınız ve Soyadınız *</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input id="form_email" type="text" name="email" required="required" class="form-control"/>
                                        <label for="form_email"/>E-mail*</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating mb-4">
                                        <textarea id="form_message" name="message" required="required" class="form-control" style="height: 150px;"></textarea>
                                        <label for="form_message">Mesajınız *</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check mb-4">
                                        <input type="checkbox" value="" id="invalidCheck" required="required" class="form-check-input"/>
                                        <label for="invalidCheck" class="form-check-label"> Kullanım şartlarını kabul ediyorum <a href="https://www.privacypolicies.com/live/ce295d68-0363-43db-8ff1-8109e73bae89" target="_blank" class="hover">Kullanım Şartları</a>. </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div>
                                        <div style="width: 304px; height: 78px;">
                                            <div>
                                                <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-dzfeolqcyeu8" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc34O0cAAAAALOAGpIRMEbM81gR40fIB-TjsPK0&amp;co=aHR0cHM6Ly9uZXhlcmEuc29sdXRpb25zOjQ0Mw..&amp;hl=tr&amp;v=u-xcq3POCWFlCr3x8_IPxgPu&amp;size=normal&amp;cb=72sd1xqwniom"></iframe>
                                            </div>
                                            <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                                        </div>
                                        <iframe style="display: none;"></iframe>
                                    </div>
                                    <button type="button" class="btn btn-primary rounded-pill btn-send mb-3" style="margin-top: 15px;"> Gönder </button><p class="text-muted"><strong>*</strong> ile belirtilen alanlar zorunludur </p>
                                </div>
                            </div>
                        </form> */}
                    </div>
                    <div class="col-lg-4">
                        <div class="d-flex flex-row">
                            <div>
                                <div class="icon text-primary fs-28 me-4 mt-n1"><i class="uil uil-location-pin-alt"></i>
                            </div>
                        </div>
                        <div>
                            <h5 class="mb-1">Adres</h5><address>İzmir Bilim Park ITOB OSB 10032 Sk. No:2 Menderes/İzmir</address>
                        </div>
                        </div>
                            <div class="d-flex flex-row">
                                <div>
                                    <div class="icon text-primary fs-28 me-4 mt-n1"><i class="uil uil-envelope"></i></div>
                                </div>
                                <div>
                                    <h5 class="mb-1">E-mail</h5><p class="mb-0">
                                    <a href="mailto:info@nexera.solutions" class="text-body">info@nexera.solutions</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactPage;