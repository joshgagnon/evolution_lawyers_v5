import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ContactInformation from '../components/ContactInformation'
import config from "../../data/SiteConfig";

class ContactPage extends Component {
    render() {
        return (
            <Layout location={this.props.location} title="Contact Us">
                <div className="about-container">
                    <Helmet>
                        <title>{`Contact Us | ${config.siteTitle}`}</title>
                        <link rel="canonical" href={`${config.siteUrl}/contact`} />
                    </Helmet>
                    <ContactInformation />
                </div>
            </Layout>
        );
    }
}

export default ContactPage
