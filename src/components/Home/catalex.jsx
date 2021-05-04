import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Summary.scss';
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";



const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`{
  catalex: file(relativePath: {eq: "images/catalex.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}
`}
     render={data => {

       const imageData = data.catalex.childImageSharp.gatsbyImageData
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
          >

      <Grid>
        <Cell  size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}>
          <p className="big-para">
          <em>CataLex</em>, a legal software company founded by the firm’s directors, has designed software specifically to benefit Evolution Lawyers and its clients.
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
  background-position: center left;
  background-repeat: no-repeat;
  background-size: auto 100%;
`

export default StyledBackgroundSection;