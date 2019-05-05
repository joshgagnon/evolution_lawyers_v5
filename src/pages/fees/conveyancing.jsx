import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";
import Conveyancing from '../../components/Fees/conveyancing'


class ConveyancingPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Conveyancing">
        <div className="about-container">
          <Helmet>
            <title>{`Conveyancing | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/fees/conveyancing`} />
          </Helmet>
          <Conveyancing />
        </div>
      </Layout>
    );
  }
}

export default ConveyancingPage;
