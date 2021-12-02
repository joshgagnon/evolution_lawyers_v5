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
['Assisting with Trust Administration (but not as trustee)', '$400', '$550'],
['Acting as independent trustee (annual fee)', '$1,000', '$1,250'],

['Vesting Real Property into Trust', '$780', '$1,100'],

['Effecting Change of Trustees (if no real property held in trust)', '$250', '$380'],

['Effecting Change of Trustees (if real property held in trust)', '$750', '$1,350']
    ]
};

const estates = {
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    title: 'Estates',
    rows: [
['Advising on and preparing a Will', '$500 - $950', 'From $680'],
['Advising on and Executing an Enduring Power of Attorney', '$350 - $500', 'From $500'],

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
              *Fee estimates are exclusive of GST, disbursements, and expenses. Our fee may be higher if the attendances required for your matter are more than usual.          </p>



           <p className="small-para">
           For more information about Trusts &amp; Estates, check out our <a href="/resources">Resources</a> page
    </p>
          </Cell>




          </section>

          </div>
    );
  }
}

export default Fees;
