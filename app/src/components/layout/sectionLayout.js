import React from "react";

const SectionLayout = (props) => {
    return (
      <section className= "wrapper bg-gradient-primary" style={props.style}>
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center" >      
            {props?.title ? <h2 className="display-4 mb-3">{props.title} </h2> : ""}
            {props.children}
          </div>
        </div>
      </section>
    );
  }
  
  export default SectionLayout;
