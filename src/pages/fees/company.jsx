import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";
import Company from '../../components/Fees/company'


class CompanyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Debt Recovery">
        <div className="about-container">
          <Helmet>
            <title>{`Company & Commercial | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/fees/company`} />
          </Helmet>
          <Company />
        </div>
      </Layout>
    );
  }
}

export default CompanyPage;
