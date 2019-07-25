import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Comp from "../components/NewClientComplete";
import config from "../../data/SiteConfig";

class NewClientCompletePage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="New Client">
        <div className="guides-container">
          <Helmet>
            <title>{`New Client | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/new-client`} />
          </Helmet>
          <Comp />
        </div>
      </Layout>
    );
  }
}

export default NewClientCompletePage;
