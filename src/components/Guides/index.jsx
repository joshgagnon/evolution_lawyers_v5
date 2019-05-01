import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";
import './Guides.scss';

const Title = (props) => (
    <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/keyboard.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }`}
     render={data => {
        return <BackgroundImage Tag="section"
                           className="guide-bg"
                           fluid={data.file.childImageSharp.fluid}>

      <Grid>
    <Cell size={6} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0} className="guides-title">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
       <div className="title-section">
       <h1 className="line"><em>Our</em> Guides</h1>
            <div className="separator" />

      </div>

      <p className="big-para">
Welcome to our Guides section. Here you can find useful and plain English summaries about the law and various legal processes. We have prepared these guides to answer some of the more common questions our clients have about their matters. Although we hope you find our guides helpful, we stress that they are not a substitute for obtaining legal advice from a registered lawyer. If you need that, get in touch.
      </p>
      </ScrollAnimation>
    </Cell>
    </Grid>
   </BackgroundImage>
  }
  }
  />);


const Guides = (props) => {

  return <div className="guides container">
  <Title />

  </div>
}


export default Guides