import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { label, url, year } = this.props.copyright;
    return (
      <footer className="site-footer clearfix">
        <section className="copyright">
          <a href={url || "/"}>{label}</a> &copy;{" "}
          {year || new Date().getFullYear()}
        </section>
      </footer>
    );
  }
}

export default Footer;
