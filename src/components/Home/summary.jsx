import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Summary.scss';
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";



const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        file(relativePath: { eq: "images/tube-min.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.file.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
          >

      <Grid>
        <Cell  size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}>

         <div className="title-section">
            <h1 className="line">Evolved</h1>
            <h1 className="line"><em>Legal Services</em></h1>
            <div className="separator" />
            <div className="button-row" >
          </div>
          </div>
          </Cell>
          <Cell>
          <p className="big-para">
               Evolution Lawyers is an Auckland based law firm specialising in insolvency, commercial, company, and property law. We provide both litigation and transactional services to New Zealanders and small to medium-sized New Zealand businesses.
               </p>
          </Cell>
          </Grid>
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height:500px;
  background-position: center right;
  background-repeat: no-repeat
`

export default StyledBackgroundSection;