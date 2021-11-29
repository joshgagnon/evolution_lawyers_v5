import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";
import {clickEmailTopMenu} from "../Navigation";
import tos from '../../../static/assets/pdfs/Terms of Engagement - Evolution Lawyers - as at 29 November 2021.pdf'
class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    const year = (new Date).getFullYear();
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>


            <div className="nav-links">
              <Link to="/" >Home</Link>
             <Link to="/team" >The Team</Link>
              <Link to="/services" >Services</Link>
              <Link to="/fees" >Fees</Link>
              <Link to="/contact" >Contact us</Link>
          </div>




            <div className="nav-links">
                <a href={tos} >Terms of Engagement</a>
                <a href="/docs/privacypolicy" >Privacy Policy</a>
                 <a href="/docs/email">Email Disclaimer</a>
            </div>

          <div className="nav-links">
              <a href={`tel:${config.phone}`} target="_blank" rel="noopener">
                  {config.phone}
              </a>

              <a href={`mailto:${config.email}`}  onClick={clickEmailTopMenu} target="_blank" rel="noopener">
                  {config.email}
              </a>
          </div>
          <div className="copyright">© Evolution Lawyers Limited { year }. All rights reserved.</div>
      </footer>
    );
  }
}

export default Footer;
