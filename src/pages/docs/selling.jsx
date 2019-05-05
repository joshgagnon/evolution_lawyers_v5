
import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Doc from "../../components/Docs/selling";
import config from "../../../data/SiteConfig";

class DocPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Selling a Residential Property">
        <div className="guides-container">
          <Helmet>
            <title>{`Selling a Residential Property | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/docs/selling`} />
          </Helmet>
          <Doc />
        </div>
      </Layout>
    );
  }
}

export default DocPage;
