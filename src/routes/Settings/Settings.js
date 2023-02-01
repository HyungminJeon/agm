import { Component } from "react";
// import { Link } from "react-router-dom";
// import Switch from "react-switch"
import "./Settings.css";

console.log("hello");

export default function settings(props) {
  const links = [
    {
      route: "/",
      text: "Back to main screen",
      class: "home-button",
    },
    {
      route: "/account",
      text: "Account",
    },
    {
      route: "/notifications",
      text: "Notifications",
    },
    {
      route: "/privacy",
      text: "Privacy",
    },
  ];
  const settings = [
    "Allow Email notifications",
    "Disease Alerts",
    "Wilting Alerts",
    "Growth Alerts",
    "Drone Temp",
  ];

  return (
    // padding 5 all around
    <div className="p-5">
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-3 sidebar">
            {links.map((x) => (
              <p key={x.text} className="sidebar-item pb-5">
                {/* <Link to={x.route}> */}
                <button className={"button " + x.class}>{x.text}</button>
                {/* </Link> */}
              </p>
            ))}
          </div>
          <div className="col content">
            <div className="row">
              <div className="col">
                <h1>Notification Settings</h1>
              </div>
              <div className="col-1">
                <button className="button edit">Edit</button>
              </div>
            </div>
            {settings.map((x) => (
              <div className="container pb-5" key={x}>
                <div className="row justify-content-md-center">
                  <div className="col-7">
                    <p>{x}</p>
                  </div>
                  <div className="col">
                    <button className="button">On</button>
                  </div>
                  <div className="col">
                    <button className="button">Off</button>
                  </div>
                  {/* <div className="col">
                      <Switch></Switch>
                    </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
