import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button}  from "react-md";
import FeeTable from './feeTable';
import Contact from '../Contact';

// also see components/Services

const data = {
    headers: ['Service', 'Fee estimate*', 'Approximate invoice total**'],
    rows: [
        ['Refinance', '$700', '$1,100'],
        ['Sale', '$940', '$1,305'],
        ['Purchase', '$1,050', '$1,515'],
        ['Refinance & Transfer', '$1,100', '$1,615'],
        ['Pre-auction Document Review', '$275', '$405'],
        ['Increasing Priority Amount', '$530', '$790'],
        ['Purchase “off the plans”', '$1,650', '$2,180']
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
          *Fee estimates are exclusive of GST and disbursements. Our fee may be higher if the attendances required for your matter are more than usual.
          </p>

          <p className="small-para">
**The approximate invoice total includes our fee estimate, GST, and the disbursements we would typically incur on your matter. Additional disbursements, such as mileage, may be incurred.
          </p>

           <p className="small-para">
           For more information about Conveyancing and Property, check out our <a href="/resources">Resources</a> page
    </p>
          </Cell>


                </Grid>
          </section>



          <Contact />

          </div>
    );
  }
}

export default Fees;
