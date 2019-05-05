import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";
import Trusts from '../../components/Fees/trusts'


class TrustsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Debt Recovery">
        <div className="about-container">
          <Helmet>
            <title>{`Trusts & Estates | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/fees/trusts`} />
          </Helmet>
          <Trusts />
        </div>
      </Layout>
    );
  }
}

export default TrustsPage;
