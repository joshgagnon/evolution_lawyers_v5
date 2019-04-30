import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Services from "../components/Services";
import config from "../../data/SiteConfig";

class ServicesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="The Services">
        <div className="services-container">
          <Helmet>
            <title>{`Services | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/services/`} />
          </Helmet>
          <Services />
        </div>
      </Layout>
    );
  }
}

export default ServicesPage;
