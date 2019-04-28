import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Team from "../components/Team";
import config from "../../data/SiteConfig";

class TeamPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="The Team">
        <div className="about-container">
          <Helmet>
            <title>{`The Team | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/team/`} />
          </Helmet>
          <Team />
        </div>
      </Layout>
    );
  }
}

export default TeamPage;
