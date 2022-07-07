import React from "react";
import location from "../images/Fill 220.png";

export default function Main(props) {
  return (
    <section className="main">
      <div className="main-image">
        <img src={props.item.image} class="location-image" alt="" />
      </div>
      <div className="main-content-1">
        <img src={location} alt="" />
        <span className="country">{props.item.location}</span>
        <a href="wwww.googlemap.com" className="map">
          View on Google Maps
        </a>
      </div>
      <div className="main-content-2">
        <h1>{props.item.title}</h1>
        <h4 className="date">
          ({props.item.date.start} - {props.item.date.end})
        </h4>
        <p className="description">{props.item.description}</p>
      </div>
    </section>
  );
}
