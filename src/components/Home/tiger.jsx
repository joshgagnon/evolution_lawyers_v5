import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Tiger.scss';
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';



const BackgroundSection = (props) => (
    <StaticQuery query={graphql`
      query {
        tiger: file(relativePath: { eq: "images/lionbanner-copy.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.tiger.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={'tiger'}
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
                    <ScrollAnimation animateIn='pulse' animateOnce={true} offset={10}>
                    <Button raised secondary className="md-cell--right" href="#contact">
                      Get In Touch
                   </Button>
                   </ScrollAnimation>

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



export default BackgroundSection