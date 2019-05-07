import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
            <div className="copyright">© Evolution Lawyers Limited 2019. All rights reserved.</div>

            <div className="nav-links">

              <a href="/" >Home</a>
             <a href="/team" >The Team</a>
              <a href="/services" >Services</a>
              <a href="/fees" >Fees</a>
             <a href="/resources" >Resources</a>
          </div>

            <div className="links">
                <a href="/docs/termsofengagement" >Terms of Engagement</a>
                <a href="/docs/privacypolicy" >Privacy Policy</a>
                 <a href="/docs/amlcft" >AMLCFT Statement</a>
                 <a href="/docs/email">Email Disclaimer</a>
            </div>
      </footer>
    );
  }
}

export default Footer;
