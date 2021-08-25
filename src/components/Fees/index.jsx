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


          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>



          </Cell>


          <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>
          <div className="fee-button-row">

              <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={500} ><Link className={buttonClass} to="fees/conveyancing">Conveyancing</Link></ScrollAnimation>
               <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={750} ><Link className={buttonClass} to="fees/debtrecovery">Debt Recovery</Link></ScrollAnimation>
               <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={1000} ><Link className={buttonClass} to="fees/trusts" >Trusts &amp; Estates</Link></ScrollAnimation>
               <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10} delay={1250}><Link className={buttonClass} to="fees/company" >Company &amp; Commercial</Link></ScrollAnimation>
               </div>
          </Cell>

          <Cell size={6} desktopOffset={3}>

          <div className="sub-title-section"><h2 className="line"> Standard Hourly Rates</h2></div>
          <p className="mid-para">Our services are charged by the hour. The applicable hourly rate depends on what we are doing and who needs to do it. We have three categories:</p>
              <DataTable plain className="rates-table">
                  <TableBody>

                          <TableRow >
                             <TableColumn  className={'heading'}>
                                 <span className={"main"}>A - Core</span>
                                 <span className={"sub"}>$385 per hour</span>
                             </TableColumn>
                             <TableColumn>
                                 For services that require a lawyer experienced in the relevant area of law.
                             </TableColumn>
                          </TableRow>
                      <TableRow >
                          <TableColumn  className={'heading'}>
                              <span className={"main"}>B – Related</span>
                              <span className={"sub"}>$275 per hour</span>
                          </TableColumn>
                          <TableColumn>
                              For services that could be provided by a junior lawyer or legal executive.
                          </TableColumn>
                      </TableRow>
                      <TableRow >
                          <TableColumn  className={'heading'}>
                              <span className={"main"}>C - Incidental</span>
                              <span className={"sub"}>$165 per hour</span>
                          </TableColumn>
                          <TableColumn>
                              For services that could be performed by a competent administrator supervised
                              by a lawyer.
                          </TableColumn>
                      </TableRow>
                  </TableBody>
              </DataTable>



    </Cell>
          </section>

          </div>
    );
  }
}

export default Fees;
