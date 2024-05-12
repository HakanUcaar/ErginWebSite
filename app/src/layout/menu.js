import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";

const Menu = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > sticky
        ? setStickyClass("sticky")
        : setStickyClass("relative");
    }
  };

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "Anasayfa",
      icon: "pi pi-home",
      url:'/home'
    },
    {
      label: "Hakkımda",
      icon: "pi pi-star",
      url:'/about'
    },
    {
      label: "Tedaviler",
      icon: "pi pi-search",
      items: [
        {
          label: "Göğüs",
          // icon: "pi pi-bolt",
          // shortcut: "⌘+S",
          // template: itemRenderer,
          url : '/procedure/breast'
        },
        {
          label: "Meme",
          // icon: "pi pi-server",
          // shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "Botoks",
          // icon: "pi pi-pencil",
          // shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          label: "Burun",
          // icon: "pi pi-pencil",
          // shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          label: "Karın",
          // icon: "pi pi-pencil",
          // shortcut: "⌘+U",
          template: itemRenderer,
        }, 
        {
          label: "Yüz",
          // icon: "pi pi-pencil",
          // shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          label: "Popo",
          // icon: "pi pi-pencil",
          // shortcut: "⌘+U",
          template: itemRenderer,
        },                               
        // {
        //   separator: true,
        // },
        // {
        //   label: "Templates",
        //   icon: "pi pi-palette",
        //   items: [
        //     {
        //       label: "Apollo",
        //       icon: "pi pi-palette",
        //       badge: 2,
        //       template: itemRenderer,
        //     },
        //     {
        //       label: "Ultima",
        //       icon: "pi pi-palette",
        //       badge: 3,
        //       template: itemRenderer,
        //     },
        //   ],
        // },
      ],
    },
    {
      label: "İletişim",
      icon: "pi pi-envelope",
      // badge: 3,
      // template: itemRenderer,
      url:'/contact'
    },
  ];

  const start = (
    <div className="flex align-items-center">
      <Link to="/" className="hk-navbar-logo">
        <img
          src="/assets/img/face.png"
          srcset="/assets/img/face.png"
          alt=""
          className="logo-img"
        />
        <i class="fab fa-firstdraft" />
      </Link>
    </div>
    // <img
    //   alt="logo"
    //   src="https://primefaces.org/cdn/primereact/images/logo.png"
    //   height="40"
    //   className="mr-2"
    // ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      {/* <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" /> */}
      <h3> Op. Dr. Ergin Erdoğan</h3>
      {/* <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      /> */}
    </div>
  );

  return (
    <div className={`card ${stickyClass}`}>
      <div className={`container`}>
        <Menubar
          id="navbar"
          style={{ borderStyle: "none" }}
          model={items}
          start={start}
          end={end}
        />
      </div>
    </div>

  );
};

export default Menu;
