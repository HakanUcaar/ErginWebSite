import React from "react";
import Footer from "./footer";
import Header from './header';
import Navbar from '../navbar/Navbar';
import HkNavbar from '../navbar2/HkNavbar';

const MainLayout = (props) => {
    return (
        <div>
            <HkNavbar></HkNavbar>
            {/* <Header></Header> */}
            {/* <Navbar></Navbar> */}
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">      
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    );
  }
  
  export default MainLayout;
