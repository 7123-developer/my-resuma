import React, { Component } from "react";

class Header extends Component {
  state = {
    socialData: [
      {
        name: "facebook",
        url: "https://www.facebook.com/nikhil.tiwari.9803150",
        className: "fa fa-facebook",
      },
      {
        name: "twitter",
        url: "https://twitter.com/NikhilT94103233?s=09",
        className: "fa fa-twitter",
      },
      // {
      //    name: "google-plus",
      //    url: "http://googleplus.com/tbakerx",
      //    className: "fa fa-google-plus"
      // },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/nikhil-tiwari-56422718b",
        className: "fa fa-linkedin",
      },
      {
        name: "instagram",
        url:
          "https://www.instagram.com/invites/contact/?i=1m3llzshfi8i7&utm_content=1kl3lnc",
        className: "fa fa-instagram",
      },
      {
        name: "github",
        url: "https://github.com/7123-developer",
        className: "fa fa-github",
      },
      {
        name: "skype",
        url: "https://join.skype.com/invite/YOUIdjRkLt7U",
        className: "fa fa-skype",
      },
    ],
  };
  render() {
    if (this.props.data) {
      // var name = this.props.data.name;
      // var occupation = this.props.data.occupation;
      // var description = this.props.data.description;
      // var city = this.props.data.address.city;
      var networks = this.state.socialData.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1>Nikhil Tiwari</h1>
            <h3>
              {" "}
              I always take advantage of the opportunities that come my way and
              I work really, really hard. So, never give upon things you have
              always dreamed of. Your dreams will become reality by your
              dedication and hard work.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
