import React from "react";
import TopMenu from "./TopMenu.js"; //Shift + Alt + Down-Arrow-Key
import GenrePicker from "./GenrePicker.js";
import AlbumList from "./AlbumList";

function MainContent() {
  return (
    <main>
      <TopMenu />
      <GenrePicker />
      <AlbumList />
    </main>
  );
}

export default MainContent;
