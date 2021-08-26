import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button, TableHeader, TableRow, TableColumn, TableBody, DataTable} from "react-md";
import Contact from '../Contact';
import { Link } from "gatsby";
import ScrollAnimation from 'react-animate-on-scroll';
const buttonClass = 'md-btn md-btn--flat md-btn--text md-pointer--hover md-text md-inline-block md-cell--right major-button';

class Fees extends Component {
  render() {
    return (<div>
            <section className="fees">
            <Grid>
            <Cell size={12}>
           <div className="title-section">
           <h1 className="line">Fee <em>Estimates</em></h1>
                <div className="separator" />
          </div>
          </Cell>

          <Cell size={8} desktopOffset={2}>
          <p className="big-para">
             We can provide fee estimates on request. We also offer standard fee estimates for various conveyancing, trusts & estates, company & commercial, and insolvency matters. Click the buttons below to find out more:
               </p>

          </Cell>
          </Grid>


          <Cell size={4} tabletSize={4} desktopOffset={4} tabletOffset={2}>
          <div className="fee-button-row">
              <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={200} ><Link className={buttonClass} to="fees/standardfees">Standard Fees</Link></ScrollAnimation>

          </div>
          <div className="fee-button-row">

              <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={500} ><Link className={buttonClass} to="fees/conveyancing">Conveyancing</Link></ScrollAnimation>
               <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={750} ><Link className={buttonClass} to="fees/debtrecovery">Debt Recovery</Link></ScrollAnimation>
               <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={1000} ><Link className={buttonClass} to="fees/trusts" >Trusts &amp; Estates</Link></ScrollAnimation>
               <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={1250}><Link className={buttonClass} to="fees/company" >Company &amp; Commercial</Link></ScrollAnimation>
               </div>
          </Cell>


          </section>

          </div>
    );
  }
}

export default Fees;
