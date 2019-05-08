import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button }  from "react-md";
import Contact from '../Contact';
import { Link } from "gatsby";

const buttonClass = 'md-btn md-btn--raised md-btn--text md-btn--raised-pressed md-pointer--hover md-background--secondary md-background--secondary-hover md-inline-block';

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


          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>



          </Cell>


          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>
          <div className="fee-button-row">
              <Link className={buttonClass} to="fees/conveyancing">Conveyancing</Link>
               <Link className={buttonClass} to="fees/debtrecovery">Debt Recovery</Link>
               <Link className={buttonClass} to="fees/trusts" >Trusts &amp; Estates</Link>
               <Link className={buttonClass} to="fees/company" >Company &amp; Commercial</Link>
               </div>
          </Cell>

          <Cell size={8} desktopOffset={2}>

          <div className="sub-title-section"><h2 className="line"> Standard Hourly Rates</h2></div>
          <p className="mid-para">Our services are charged by the hour. The applicable hourly rate depends on what we are doing and who needs to do it. We have three categories:</p>

          <p className="emph-para">A. Core Legal Services – $350 per hour</p>
 <p className="mid-para bottom-pad">For services that require a lawyer experienced in the relevant area of law.</p>

 <p className="emph-para">B. Related Legal Services – $250 per hour</p>
<p className="mid-para bottom-pad">For services that could be provided by a junior lawyer or legal executive.</p>

 <p className="emph-para">C. Incidental Services – $150 per hour</p>
<p className="mid-para bottom-pad">For services that could be performed by a competent administrator supervised by a lawyer.</p>

<div className="sub-title-section"><h2 className="line"> Fixed Fees</h2></div>
    <p className="mid-para bottom-pad">Outside of our standard fee estimates, we are happy to talk about agreeing a fixed fee for your matter.</p>

<div className="sub-title-section"><h2 className="line"> Disbursements</h2></div>
    <p className="mid-para bottom-pad">Disbursements are the costs we incur and pay on your behalf, such as registration and court filing fees, and our standard office cost. Disbursements, like GST, are charged in addition to our fee.</p>

    </Cell>
          </section>
          <Contact />
          </div>
    );
  }
}

export default Fees;
