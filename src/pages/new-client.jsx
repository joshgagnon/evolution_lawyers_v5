import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Comp from "../components/NewClient";
import config from "../../data/SiteConfig";

class NewClientPage extends Component {
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

export default NewClientPage;
