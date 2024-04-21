import React, { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isTedavilerVisible, setTedavilerVisible] = useState(false);
  const handleMouseEnter = () => {
    setTedavilerVisible(true);
  };

  const handleMouseLeave = () => {
    setTedavilerVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="wrapper bg-soft-primary">
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <a href="#home" className="nav-link scroll">
              <img
                src="/assets/img/face.png"
                srcset="/assets/img/face.png"
                alt=""
                className="logo-img"
              />
            </a>
            <h3> Dr. Ergin Erdoğan</h3>
          </div>
          <div className="navbar-collapse offcanvas-nav">
            <ul className="navbar-nav" data-smartmenus-id="17027624050061482">
              <li className="nav-item">
                <a href="/home" className="nav-link scroll">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link scroll">
                  Hakkımda
                </a>
              </li>
              <li
                className={
                  isTedavilerVisible
                    ? "nav-item dropdown show"
                    : "nav-item dropdown"
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={
                    isTedavilerVisible
                      ? "nav-link has-submenu highlighted"
                      : "nav-link has-submenu"
                  }
                >
                  Tedaviler
                  <span
                    className="pi pi-caret-down"
                    style={{ fontSize: "0.6rem" }}
                  ></span>
                </a>
                <ul
                  className="dropdown-menu"
                  style={
                    isTedavilerVisible
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <li className="nav-item">
                    <a href="/body" className="dropdown-item">
                      {" "}
                      Göğüs Büyütme{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/body" className="dropdown-item">
                      {" "}
                      Meme Dikleştirme{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/body" className="dropdown-item">
                      {" "}
                      Meme Küçültme{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/face" className="dropdown-item">
                      {" "}
                      Botoks{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/face" className="dropdown-item">
                      {" "}
                      Burun Estetiği{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/breast" className="dropdown-item">
                      {" "}
                      Karın Germe{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/breast" className="dropdown-item">
                      {" "}
                      Yüz Germe
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/breast" className="dropdown-item">
                      {" "}
                      Popo Kaldırma{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link has-submenu"
                  id="sm-17027624050061482-7"
                  aria-haspopup="true"
                  aria-controls="sm-17027624050061482-8"
                  aria-expanded="false"
                >
                  Galeri
                  <span
                    className="pi pi-caret-down"
                    style={{ fontSize: "0.6rem" }}
                  ></span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  {" "}
                  İletişim{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-other d-flex ms-auto">
            <ul
              data-sm-skip="true"
              className="navbar-nav flex-row align-items-center ms-auto"
            >
              <li className="nav-item dropdown language-select text-uppercase">
                <a
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link dropdown-item dropdown-toggle"
                >
                  tr
                </a>
                <ul className="dropdown-menu">
                  <li id="langtr" className="nav-item">
                    <a href="#" className="dropdown-item">
                      Tr
                    </a>
                  </li>
                  <li id="langen" className="nav-item">
                    <a href="#" className="dropdown-item">
                      En
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-lg-none">
                <div className="navbar-hamburger">
                  <button
                    data-toggle="offcanvas-nav"
                    className="hamburger animate plain"
                  >
                    <span></span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
