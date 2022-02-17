import React, {Component} from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Fees.scss";
import {Cell, Grid, Button} from "react-md";

import FeeTable from './feeTable';
import Contact from '../Contact';


const trusts = {
    headers: ['Service', 'Fee estimate*'],
    title: 'Trusts',
    rows: [
        ['Establishing a Basic Family Trust', '$1,500'],
        ['Preparing a memorandum of guidance for trustees', '$350 - $750'],
        ['Gifting advice and documentation', '$350 - $750'],

        ['Transfer of real estate into trust',
            <React.Fragment>
                $750 - $950 (no refinance)
                <br/>
                $1,100 - $1,300 (refinance)
            </React.Fragment>],

        ['Acting as independent trustee',
            <React.Fragment>
                $1,000 (establishment)
                <br/>
                $500 (minimum ongoing annual fee)
                <br/>
                Additional attendances at time - $200 per hour
            </React.Fragment>
        ],

        ['Assisting with the trust’s annual meeting and administration requirements', '$750 - $1,000 per year'],
        ['Updating or replacing a will to cover the new trust', '$500 - $950 (per will)'],
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
                                <div className="separator"/>
                            </div>
                        </Cell>

                        <Cell size={8} desktopOffset={2}>
                            <p className="big-para">
                                We offer a full range of trust and estate services. Our fee estimates for the more
                                common
                                services are set out below: </p>

                        </Cell>
                    </Grid>


                    <Cell size={6} tabletSize={8} desktopOffset={3} tabletOffset={0}>

                        <FeeTable data={trusts}/>

                        <FeeTable data={estates}/>

                        <p className="small-para">
                            *Fee estimates are exclusive of GST, disbursements, and expenses. Our fee may be higher if
                            the attendances required for your matter are more than usual. </p>


                        <p className="small-para">
                            For more information about Trusts &amp; Estates, check out our <a
                            href="/resources">Resources</a> page
                        </p>
                    </Cell>


                </section>

            </div>
        );
    }
}

export default Fees;
