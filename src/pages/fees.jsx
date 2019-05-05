import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Fees from "../components/Fees";
import config from "../../data/SiteConfig";

class FeesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="The Fees">
        <div className="fees-container">
          <Helmet>
            <title>{`Fees | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/fees/`} />
          </Helmet>
          <Fees />
        </div>
      </Layout>
    );
  }
}

export default FeesPage;
