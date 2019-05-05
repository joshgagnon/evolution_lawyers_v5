import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Doc from "../../components/Docs/debtRecovery";
import config from "../../../data/SiteConfig";

class DocPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Email Disclaimer for Website">
        <div className="guides-container">
          <Helmet>
            <title>{`Debt Recovery Services Guide | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/docs/debtrecovery`} />
          </Helmet>
          <Doc />
        </div>
      </Layout>
    );
  }
}

export default DocPage;
