import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FirstHomeBuyers from "../components/FirstHomeBuyers";
import config from "../../data/SiteConfig";

class FirstHomeBuyersPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="First Home Buyers ">
        <div className="first-home-buyers-container">
          <Helmet>
            <title>{`First Home Buyers | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/team/`} />
          </Helmet>
          <FirstHomeBuyers />
        </div>
      </Layout>
    );
  }
}

export default FirstHomeBuyersPage;
