import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Doc from "../../components/Docs/amlcft";
import config from "../../../data/SiteConfig";

class DocPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="AMLCFT Statement">
        <div className="guides-container">
          <Helmet>
            <title>{`AMLCFT Statement | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/docs/amlcft`} />
          </Helmet>
          <Doc />
        </div>
      </Layout>
    );
  }
}

export default DocPage;
