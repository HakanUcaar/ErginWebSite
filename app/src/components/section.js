import React from "react";

const Section = (props) => {
  return (
    <section style={props.style} className={props.className}>
      <div className="bg-gradient-primary h-100">
        <div className="container-sm h-100">
          {props?.title ? (
            <h2 className="m-5 text-5xl display-4">{props.title} </h2>
          ) : (
            ""
          )}
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Section;
