import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Checkbox from "react-md/lib/SelectionControls/Checkbox";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import config from "../../../data/SiteConfig";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";

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
       <h1 className="line"><em>New Client</em> Signup</h1>
            <div className="separator" />

      </div>
      </ScrollAnimation>

    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <p className="small-para">Thank you for your submission.</p>
            <p className="small-para">We will review the information and documents provided and get back to you shortly.  We aim to answer all new client requests within one business day. </p>
            <p className="small-para">If you wish to add to or follow up your submission, please contact us by email 
            at <a href={`mailto:${config.email}`}><span className="fa fa-envelope" /> { config.email }</a> or call us on <a href={`tel:${config.phone.replace(/ /g, '')}`}><span className="fa fa-phone" /> { config.phone }</a></p>
          </ScrollAnimation>

    </Cell>
    </Grid>
   </BackgroundImage>
  }
  }
  />);


const NewClientComplete = (props) => {

  return <div className="new-client container">
  <Title />

  </div>
}


export default NewClientComplete;