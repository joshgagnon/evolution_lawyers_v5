import React, { Component } from "react";
import { Button, TextField, Grid, Cell, Card } from 'react-md';
import config from "../../../data/SiteConfig";
import Contact from '../Contact';
import { graphql } from 'gatsby'
/*
const Map = (props) => {
    return <StaticQuery
        query={graphql`
            query StaticMapQuery {
                staticMap {
                    childFile {
                        childImageSharp {
                            gatsbyImageData(layout: FIXED)
                        }
                    }
                }
            }`
        }
        render={(data) => {
            return data.staticMap;
        }}
        />
}
*/
const ContactSummary = (props) => {
    return <Grid>
        <Cell size={6} tabletSize={6} phoneSize={4} desktopOffset={3} tabletOffset={1} phoneOffset={0} className="contact-us">

                <div className="title-section">
                    <h1 className="line">Contact Us</h1>
                    <div className="separator" />
                </div>
        </Cell>
        <Cell size={5}  phoneSize={6}  tabletSize={8}>

            <p className="big-para">
            </p>

        </Cell>
    </Grid>
}


const ContactInformation = ({ className }) => {
    return <section id="contact-information">
        <ContactSummary />
        <Contact />
    </section>
}

export default ContactInformation;