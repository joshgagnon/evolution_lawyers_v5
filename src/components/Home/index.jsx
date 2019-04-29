import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Home.scss";
import Tiger from './tiger';
import Summary from './summary';
import Features from './features';
import CataLex from './catalex';
import Contact from '../Contact';
import PageTransition from 'gatsby-plugin-page-transitions';

class Home extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedHome } = config;
    if (!copyright) {
      return null;
    }
    return (<PageTransition >
      <div className={"home"}>
            <Tiger />
            <Summary />
            <Features />
            <Contact />
      </div>
      </PageTransition>
    );
  }
}

export default Home;
