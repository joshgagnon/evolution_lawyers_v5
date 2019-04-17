import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Tiger.scss';
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
        <Cell desktopOffset={7} size={5} tabletOffset={3} phoneOffset={1}>

         <div className="title-section">
            <h1 className="line">A Virtual <em>Law Firm</em></h1>
            <h1 className="line">for modern</h1>
            <h1 className="line">New Zealanders</h1>
            <div className="separator" />
            <div className="button-row" >

          
          </div>
          </div>
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

export default StyledBackgroundSection