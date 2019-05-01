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


    <Cell size={10} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}>
       <div className="sub-title-section" style={{textAlign:'center'}}>
       <h1 className="line">Debt Recovery</h1>
            <div className="separator" />

      </div>
    </Cell>


    </Grid>


Debt Recovery


   </BackgroundImage>
  }
  }
  />);


  export default GuideIcons;