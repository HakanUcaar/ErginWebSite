import React from "react";
import Menu from "./menu";
import Masthead from "./masthead";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <main>
      <div className="flex-column bg-soft-primary">
        <div>
          <Masthead />
          <Menu /> 
          {props.children}   
          <Footer/>
        </div>           
      </div>
    </main>
  );
};

export default Layout;
