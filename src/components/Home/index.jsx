import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { graphql, StaticQuery } from 'gatsby'
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Home.scss";
import Tiger from './tiger';
import Summary from './summary';
import Features from './features';
import Contact from '../Contact';
import Img from "gatsby-image"
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';


const Award = (props) => (
    <StaticQuery query={graphql`
      query {
        file(relativePath: { eq: "images/award.png" }) {
          childImageSharp {
            fixed(width: 852) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.file.childImageSharp.fixed
       return (<ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <Grid>
     <Cell size={12} style={{textAlign: 'center'}}>
        <Img fixed={data.file.childImageSharp.fixed} />
        </Cell>
        </Grid>
        </ScrollAnimation>
       )
     }
     }
    />
)



class Home extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedHome } = config;
    if (!copyright) {
      return null;
    }
    return ( <div className={"home"}>
            <Tiger />
            <Summary />

      </div>
    );
  }
}

export default Home;
