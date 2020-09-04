import React, { Component } from "react";
import image1 from "../img/venom-1.jpg";
import image2 from "../img/hulk-1.jpg";
import image3 from "../img/venom-2.jpg";
import "../css/components.css";
import "../css/global.css";
import "../css/layout.css";
import "../css/sample-wallpaper.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1 className="title">Mavel's Fearless</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
            molestias earum eveniet.
          </p>
          <div className="search-bar">
            <input type="search" placeholder="Search" />
          </div>

          {/* <!-- Sample Wallpaper --> */}
          <div className="sample-wallpaper">
            {/* <!-- Wallpaper #1 --> */}
            <article className="wallpaper">
              <img src={image1} alt="Wallpaper #1" className="wallpaper" />
            </article>

            {/* <!-- Wallpaper #2 --> */}
            <article className="wallpaper">
              <img src={image2} alt="Wallpaper #1" className="wallpaper" />
            </article>

            {/* <!-- Wallpaper #3 --> */}
            <article className="wallpaper">
              <img src={image3} alt="Wallpaper #1" className="wallpaper" />
            </article>
          </div>
        </div>
      </header>
    );
  }
}
