import { Component } from "react";
import { Link } from "react-router-dom";
import "./account.css";

class Account extends Component {
  render() {
    const links = [
      {
        route: "/garden",
        text: "Back to main screen",
        class: "home-button",
      },
      {
        route: "/settings/account",
        text: "Account",
      },
      {
        route: "/settings/notifications",
        text: "Notifications",
      },
      {
        route: "/settings/privacy",
        text: "Privacy",
      },
    ];
    const settings = [
      " Email ",
      " First Name ",
      " Last Name ",
      " Password",
      " Organization",
      " Address",
      " Timezone",
      " Schedul",
    ];

    return (
      // padding 5 all around
      <div class="p-12">
        <div class="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
          <div class="flex flex-wrap  md:justify-center">
            <div class="w-1/4 sidebar">
              {links.map((x) => (
                <p class="sidebar-item pb-5">
                  <Link to={x.route}>
                    <button class={"button " + x.class}>{x.text}</button>
                  </Link>
                </p>
              ))}
            </div>
            <div class="relative flex-grow max-w-full flex-1 px-4 content">
              <div class="flex flex-wrap ">
                <div class="relative flex-grow max-w-full flex-1 px-4">
                  <h1 class="h1 pb-5">Account Settings</h1>
                </div>
                <div class="w-1/6">
                  <button className="button edit">Edit</button>
                </div>
              </div>
              {settings.map((x) => (
                <div class="container mx-auto sm:px-4 pb-5">
                  <div class="flex flex-wrap  md:justify-center">
                    <div class="w-1/5">
                      <p>{x}</p>
                    </div>
                    <div class="relative flex-grow max-w-full flex-1 px-4">
                      <input class="search-bar" type="text"></input>
                    </div>
                  </div>
                </div>
              ))}
              <button class="button">Save</button>
              <button class="button red">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
