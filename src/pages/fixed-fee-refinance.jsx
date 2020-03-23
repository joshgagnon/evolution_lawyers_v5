import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FixedFeeRefinance from "../components/FixedFeeRefinance";
import config from "../../data/SiteConfig";

class FixedFeeRefinancePage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Fixed Fee Refinance">
        <div className="first-home-buyers-container">
          <Helmet>
            <title>{`Fixed Fee Refinance | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/fixed-fee-refinance`} />
          </Helmet>
          <FixedFeeRefinance />
        </div>
      </Layout>
    );
  }
}

export default FixedFeeRefinancePage;
