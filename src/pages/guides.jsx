import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Guides from "../components/Guides";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About">
        <div className="about-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <Guides />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
