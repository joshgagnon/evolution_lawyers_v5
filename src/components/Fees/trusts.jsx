import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button}  from "react-md";

import FeeTable from './feeTable';
import Contact from '../Contact';


const trusts = {
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    title: 'Trusts',
    rows: [
['Establishing a Basic Family Trust', '$500 - $950', 'From $680'],
['Assisting with Trust Administration (Annual Fee)', '$250', '$380'],
['Vesting Personal Property into Trust', '$250', '$380'],

['Vesting Real Property into Trust', '$780', '$1,100'],

['Effecting Change of Trustees (if no real property held in trust)', '$250', '$380'],

['Effecting Change of Trustees (if real property held in trust)', '$750', '$1,350'],

['Documenting Distribution to Beneficiaries', '$1,800', '$2,150']
    ]
};

const estates = {
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    title: 'Estates',
    rows: [
['Preparing a Basic Will', '$250', '$380'],
['Advising on and Executing an Enduring Power of Attorney', '$350', '$490'],

['Basic Will and Enduring Power of Attorney Combo (per person)', '$1,800', '$2,800'],
['Applying for Common Form Probate', '$750', '$1,250'],
['Relationship Property Agreement', '$750 - $1,500', 'From $950'],
['Applying for Divorce – Single Applicant', '$1,200', '$1,750'],
['Applying for Divorce – Joint Applicants', '$850', '$1,350'],
    ]
};
class Fees extends Component {
  render() {
    return (<div>
            <section className="fees">
            <Grid>
            <Cell size={12}>
           <div className="title-section">
           <h1 className="line">Trusts &amp; Estates</h1>
                <div className="separator" />
          </div>
          </Cell>

          <Cell size={8} desktopOffset={2}>
          <p className="big-para">
            We offer a full range of trust and estate services. Our fee estimates for the more common
services are set out below: </p>

          </Cell>
          </Grid>


          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>

          <FeeTable data={trusts} />

          <FeeTable data={estates} />

          <p className="small-para">
          *Fee estimates are exclusive of GST and disbursements. Our fee may be higher if the attendances required for your matter are more than usual.
          </p>

          <p className="small-para">
**The approximate invoice total includes our fee estimate, GST, and the disbursements we would typically incur on your matter. Additional disbursements, such as mileage, may be incurred.
          </p>

           <p className="small-para">
           For more information about Trusts &amp; Estates, check out our <a href="/resources">Resources</a> page
    </p>
          </Cell>




          </section>
          <Contact />
          </div>
    );
  }
}

export default Fees;
