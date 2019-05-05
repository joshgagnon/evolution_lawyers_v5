
import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Doc from "../../components/Docs/privacy";
import config from "../../../data/SiteConfig";

class DocPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Privacy Policy">
        <div className="guides-container">
          <Helmet>
            <title>{`Privacy Policy | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/docs/privacypolicy`} />
          </Helmet>
          <Doc />
        </div>
      </Layout>
    );
  }
}

export default DocPage;
