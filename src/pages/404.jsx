import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ContactInformation from '../components/ContactInformation'
import config from "../../data/SiteConfig";

class FourOFour extends Component {
    render() {
        return (
            <Layout location={this.props.location} title="Contact Us">
                <div className="about-container">
                    <Helmet>
                        <title>{`Contact Us | ${config.siteTitle}`}</title>
                        <link rel="canonical" href={`${config.siteUrl}/contact`} />
                    </Helmet>
                    <h2>Page Not Found</h2>
                    <ContactInformation />
                </div>
            </Layout>
        );
    }
}

export default FourOFour
