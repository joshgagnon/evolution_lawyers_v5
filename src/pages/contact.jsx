import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ContactInformation from "../components/ContactInformation";
import config from "../../data/SiteConfig";

class FeesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Contact Us">
        <div className="contact-us-container">
          <Helmet>
            <title>{`Contact Us | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/fees/`} />
          </Helmet>
          <ContactInformation />
        </div>
      </Layout>
    );
  }
}

export default FeesPage;
