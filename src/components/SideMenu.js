import React from "react";
import Logo from "./Logo.js"
import MenuLinks from "./MenuLinks.js"
import Search from "./Search.js"


function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLinks />
      <Search />
    </aside>
  );
}

export default SideMenu;
