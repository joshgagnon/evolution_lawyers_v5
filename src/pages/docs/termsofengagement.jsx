
import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Doc from "../../components/Docs/terms";
import config from "../../../data/SiteConfig";

class DocPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Terms of Engagement">
        <div className="guides-container">
          <Helmet>
            <title>{`Terms of Engagement" | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/docs/termsofengagement`} />
          </Helmet>
          <Doc />
        </div>
      </Layout>
    );
  }
}

export default DocPage;
