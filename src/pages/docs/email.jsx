
import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Doc from "../../components/Docs/email";
import config from "../../../data/SiteConfig";

class DocPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Email Disclaimer for Website">
        <div className="guides-container">
          <Helmet>
            <title>{`Email Disclaimer for Website | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/docs/email`} />
          </Helmet>
          <Doc />
        </div>
      </Layout>
    );
  }
}

export default DocPage;
