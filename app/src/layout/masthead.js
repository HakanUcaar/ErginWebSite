import React from "react";

const Masthead = () => {
  return (
    <div className="container">
      <div className="p-3">
        <div className="flex align-items-start flex-column lg:justify-content-between sm:flex-row lg:flex-row">
          <div>
            <div className="flex align-items-center text-700 flex-wrap">
              <div className="mr-5 flex align-items-center">
                <i className="pi pi-phone mr-2"></i>
                <span className="text-sm sm:text-sm md:text-base xl:text-lg"> +90 507 599 47 71</span>
              </div>
              {/* <div className="mr-5 flex align-items-center">
              <i className="pi pi-envelope mr-2"></i>
              <span>ekstra bilgi</span>
            </div> */}
            </div>
          </div>
          <div className="flex align-items-center ">
            <i className="pi pi-envelope mr-2"></i>
            <span className="text-sm sm:text-sm md:text-base xl:text-lg">info@hakanucar.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
