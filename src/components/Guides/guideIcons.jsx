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


const GuideIcons= (props) => (
    <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/lion.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }`}
     render={data => {
        return <BackgroundImage Tag="section"
                           className="guide-icons"
                           fluid={data.file.childImageSharp.fluid}>

      <Grid>
    <Cell size={10} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}>
       <div className="sub-title-section" style={{textAlign:'center'}}>
       <h1 className="line">Residential Conveyancing</h1>
            <div className="separator" />
      </div>
    </Cell>

    <Cell size={8} desktopOffset={2} className="guide-button-row">

        <a  className="guide-button" href="/assets/pdfs/Guide-to-Buying-a-Residential-Property.pdf">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/guidehome.jpg" alt="Buying" /></ScrollAnimation>
            <span className="guide-text">BUYING</span>
        </a>

        <a className="guide-button"  href="/assets/pdfs/Guide-to-Selling-a-Residential-Property.pdf">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/guidesell.jpg" alt="Selling" /></ScrollAnimation>
            <span className="guide-text">SELLING</span>
        </a>

        <a className="guide-button"  href="/assets/pdfs/Guide-to-Refinancing-a-Residential-Property.pdf">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/guideref.jpg" alt="Refinancing" /></ScrollAnimation>
            <span className="guide-text">REFINANCING</span>
        </a>

    </Cell>


    <Cell size={10} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}>
       <div className="sub-title-section" style={{textAlign:'center'}}>
       <h1 className="line">Debt Recovery</h1>
            <div className="separator" />

      </div>
    </Cell>

    <Cell size={8} desktopOffset={2} className="guide-button-row">
        <a  className="guide-button" href="/assets/pdfs/Debt-Recovery-Services-Guide.pdf">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/debt.jpg" alt="Debt recovery and disbursements" /></ScrollAnimation>
            <span className="guide-text">DEBT RECOVERY &amp; DISBURSEMENTS</span>
        </a>


    </Cell>

    </Grid>



   </BackgroundImage>
  }
  }
  />);


  export default GuideIcons;