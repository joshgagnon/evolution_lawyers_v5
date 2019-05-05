import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";
import DebtRecovery from '../../components/Fees/debtRecovery'


class DebtRecoveryPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Debt Recovery">
        <div className="about-container">
          <Helmet>
            <title>{`Debt Recovery | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/fees/debtrecovery`} />
          </Helmet>
          <DebtRecovery />
        </div>
      </Layout>
    );
  }
}

export default DebtRecoveryPage;
