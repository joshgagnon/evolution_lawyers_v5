import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button}  from "react-md";

import FeeTable from './feeTable';
import Contact from '../Contact';


const personal = {
        'title': 'Debt Recovery – Personal',
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    rows: [
['Formal Demand',  '$250', '$380'],

[<React.Fragment>
    Prepare and File Proceeding
    <ul><li>District Court</li>
    <li>High Court</li></ul>
   </React.Fragment>,

    <React.Fragment><br/>$950 - $1,500<br/>$950 - $1,800</React.Fragment>,
    <React.Fragment><br/>From $1,450<br/>From $2,800</React.Fragment>,
    ],

[<React.Fragment>
    Prepare and File Default Judgment
    <ul><li>District Court</li>
    <li>High Court</li></ul>
   </React.Fragment>,

    <React.Fragment><br/>$500<br/>$750</React.Fragment>,
    <React.Fragment><br/>$920<br/>$1,100</React.Fragment>,
    ],

[<React.Fragment>
Prepare and File Summary Judgment Application
    <ul><li>District Court</li>
    <li>High Court</li></ul>
   </React.Fragment>,

    <React.Fragment><br/>$1,500 - $1,850<br/>$1,500 - $2,500</React.Fragment>,
    <React.Fragment><br/>From $2,400<br/>From $3,400</React.Fragment>,
    ],

[<React.Fragment>
Order for Summary Judgment (undefended hearing)
    <ul><li>District Court</li>
    <li>High Court</li></ul>
   </React.Fragment>,

    <React.Fragment><br/>$950<br/>$950</React.Fragment>,
    <React.Fragment><br/>$1,250<br/>$1,250</React.Fragment>,
    ],

['Bankruptcy Notice',  '$900', '$1,350'],
['Creditors Application',  '$1,800', '$2,700'],
['Order for Adjudication',  '$750', '$$1,000'],
]
};

const company = {
    'title': 'Debt Recovery – Company',
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    rows: [
['Formal Demand',  '$250', '$380'],
['Statutory Demand',  '$350', '$490'],
['Liquidation Application',  '$1,800', '$2,800'],
['Order for Liquidation (undefended)',  '$750', '$1,000'],

    ]
}

class Fees extends Component {
  render() {
    return (<div>
            <section className="fees">
            <Grid>
            <Cell size={12}>
           <div className="title-section">
           <h1 className="line">Debt Recovery</h1>
                <div className="separator" />
          </div>
          </Cell>

          <Cell size={8} desktopOffset={2}>
          <p className="big-para">
          We offer a full range of debt recovery and related insolvency services. Our fee estimates for
the more common services are set out below: </p>

          </Cell>
          </Grid>


          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>

          <FeeTable data={personal} />
          <FeeTable data={company} />

          <p className="small-para">
*Fee estimates are exclusive of GST and disbursements. Our fee may be higher if the attendances required for your matter are more than usual.
          </p>

          <p className="small-para">
**The approximate invoice total includes our fee estimate, GST, court filing fees, and the disbursements we would typically incur on your matter. Additional disbursements, such as mileage, process service costs and statutory advertising expenses, may be incurred.
          </p>

           <p className="small-para">
           For more information about Debt Recovery, check out our <a href="/resources">Resources</a> page
    </p>
          </Cell>




          </section>
          <Contact />
          </div>
    );
  }
}

export default Fees;
