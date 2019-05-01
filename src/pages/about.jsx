import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Guides from "../components/Guides";
import config from "../../data/SiteConfig";

class GuidesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="The Guides">
        <div className="guides-container">
          <Helmet>
            <title>{`Guides | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/guides/`} />
          </Helmet>
          <Guides />
        </div>
      </Layout>
    );
  }
}

export default GuidesPage;
