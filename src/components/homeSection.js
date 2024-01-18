// HomeSection.js
import React from "react";


const backPath = "/assets/img/sec1.jpg";
const backImg = {
    backgroundImage: `url(${backPath})`,
    height : '750px',
    backgroundSize: 'cover'
}

const animate1 = {
    animationName: 'slideInDown',
    animationDuration: '700ms',
    animationDelay : '600ms',
    animationTimingFunction : 'ease',    
    animationDirection : 'normal',
    animationFillMode : 'both'
};


const animationDelay900 = {
    animationDelay : '900ms'
}

const animationDelay1200 = {
    animationDelay : '1200ms'
}

const animation2 = {
    transition : 'all 0.1s ease 0s',
    opacity : '0'
}

const HomeSection = () => {
  return (
        <section id="home" className="wrapper g-gradient-primary" style={backImg}>
            <div className="wrapper bg-gradient-primary home-section">
                <div className="container pt-10 pt-md-14">
                    <div className="row gx-2 gy-10 align-items-center">
                        <div data-cues="slideInDown" data-group="page-title" data-delay="600" className="col-md-10 offset-md-1 offset-lg-0 col-lg-6F text-center text-lg-start order-2 order-lg-0" data-disabled="true">
                            <h1 className="display-1 mb-5 mx-md-10 mx-lg-0" data-cue="slideInDown" data-group="page-title" data-delay="600" data-show="true" style={animate1}> Hayallerinize adım adım taşıyoruz.
                                <br/>
                                <span  className="typed text-primary text-nowrap" style={{"color": "black"}}></span>
                            </h1>
                            <p className="lead fs-23 mb-7" data-cue="slideInDown" data-group="page-title" data-delay="600" data-show="true" style={animate1}> Her adımı beraber . </p>
                            <div data-cues="slideInDown" data-group="page-title-buttons" data-delay="900" className="d-flex justify-content-center justify-content-lg-start mb-4" data-cue="slideInDown" data-disabled="true" data-show="true" styles={[animate1,animationDelay900]}>
                                <span data-cue="slideInDown" data-group="page-title-buttons" data-delay="900" data-show="true" styles={[animate1,animationDelay1200]}><a href="#solutions" className="btn btn-lg btn-primary rounded-pill me-2 scroll">Çözümlerimize Göz Atın</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default HomeSection;
