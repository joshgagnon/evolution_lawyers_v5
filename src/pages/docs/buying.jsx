
import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Doc from "../../components/Docs/buying";
import config from "../../../data/SiteConfig";

class DocPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Buying a Residential Property">
        <div className="guides-container">
          <Helmet>
            <title>{`Buying a Residential Property | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/docs/email`} />
          </Helmet>
          <Doc />
        </div>
      </Layout>
    );
  }
}

export default DocPage;
