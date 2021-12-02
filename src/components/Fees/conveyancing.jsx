import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button}  from "react-md";
import FeeTable from './feeTable';
import Contact from '../Contact';

// also see components/Services

const data = {
    headers: ['Service', 'Fee estimate*'],
    rows: [
        ['Refinance', '$800'],
        ['Sale', '$$1,200'],
        ['Purchase', '$1450'],
        ['Pre-auction Document Review', '$350'],
        ['Purchase “off the plans”', '$2,150']
    ]
};


class Fees extends Component {
  render() {
    return (<div>
            <section className="fees">
            <Grid>
            <Cell size={12}>
           <div className="title-section">
           <h1 className="line">Conveyancing</h1>
                <div className="separator" />
          </div>
          </Cell>

          <Cell size={8} desktopOffset={2}>
          <p className="big-para">
            We offer a full range of conveyancing and related property services. Our fee estimates for
the more common services are set out below: </p>

          </Cell>



          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>

          <FeeTable data={data} />

          <p className="small-para">
              *Fee estimates are exclusive of GST, disbursements, and expenses. Our fee may be higher if the attendances required for your matter are more than usual.          </p>

           <p className="small-para">
           For more information about Conveyancing and Property, check out our <a href="/resources">Resources</a> page
    </p>
          </Cell>


                </Grid>
          </section>





          </div>
    );
  }
}

export default Fees;
