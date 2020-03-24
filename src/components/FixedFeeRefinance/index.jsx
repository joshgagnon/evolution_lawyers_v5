import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";
import './FixedFeeRefinance.scss';
import Contact from '../Contact';
 

const Title = (props) => (
    <StaticQuery query={graphql`
      query {
        file(relativePath: { eq: "images/House family.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.file.childImageSharp.fluid;
       return (

        <React.Fragment>
      <Grid>
        <Cell  size={4} desktopOffset={1} tabletOffset={1} phoneOffset={0}>
           <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10}>
         <div className="title-section" style={{marginTop: 50}}>
            <h1 className="line">Fixed Fee <em>Refinances</em></h1>

            <div className="separator" />
          </div>

          </ScrollAnimation>
          </Cell>

          <Cell size={6}>
               <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>

            <p className="big-para">
              With low interest rates and economic uncertainty ahead, many of our clients are thinking about refinancing their mortgages.  Evolution Lawyers is here to help, by offering the comfort and certainty of a fixed fee.
            </p>

            <p className="big-para">
            We can complete the legal side of your residential mortgage refinance for <span className="bold underline">$1,000</span> all up, including fees, disbursements, expenses, and GST.  You’ll be hard pressed to find a better deal anywhere in New Zealand.
            </p>
            
            <p className="big-para">
We can also complete the entire process remotely, with no requirement for a face-to-face meeting.  All you need is a computer and a decent Internet connection.
            </p>  


          </ScrollAnimation>

          </Cell>




          </Grid>
          <Img Tag="section"
                           className="first-home-image"
                           fluid={imageData}
   
          >
          </Img>

                     <Contact />
          </React.Fragment>
       )
     }
     }
    />
)



const FirstHomeBuyers = (props) => {

  return <div className="container">
    <Title />

  </div>
}


export default FirstHomeBuyers