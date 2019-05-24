import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button}  from "react-md";

import FeeTable from './feeTable';
import Contact from '../Contact';


const company = {
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    title: 'Company',
    rows: [
['Incorporating a Company', '$250', '$500'],
['Incorporating a Company with a Standard Constitution', '$500', '$800'],

['Assisting with Company Administration (Annual Fee)', '$250', '$450'],

['Effecting Change of Directors', '$150', '$260'],
['Effecting Simple Transfer or Issue of Shares', '$250', '$380'],

['Removing Company from Register (no liquidation)', '$250', '$380'],
    ]
};

const commercial = {
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    title: 'Commercial',
    rows: [
['Preparing Standard Terms of Trade', '$500 - $750', 'From $680'],
['Specific or General Security over Personal Property', '$300', '$460'],
['Simple Loan Agreement', '$250', '$380'],
['Simple Personal Guarantee', '$250', '$380']
    ]
};
class Fees extends Component {
  render() {
    return (<div>
            <section className="fees">
            <Grid>
            <Cell size={12}>
           <div className="title-section">
           <h1 className="line">Company &amp; Commercial</h1>
                <div className="separator" />
          </div>
          </Cell>

          <Cell size={8} desktopOffset={2}>
          <p className="big-para">
           We offer a full range of company and commercial services. Our fee estimates for the more
common services are set out below:</p>

          </Cell>
          </Grid>


          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>

          <FeeTable data={company} />

          <FeeTable data={commercial} />

          <p className="small-para">
          *Fee estimates are exclusive of GST and disbursements. Our fee may be higher if the attendances required for your matter are more than usual.
          </p>

          <p className="small-para">
**The approximate invoice total includes our fee estimate, GST, and the disbursements we would typically incur on your matter. Additional disbursements, such as mileage, may be incurred.
          </p>

           <p className="small-para">
           For more information about Company &amp; Commercial Law, check out our <a href="/resources">Resources</a> page
    </p>
          </Cell>




          </section>
          <Contact />
          </div>
    );
  }
}

export default Fees;
