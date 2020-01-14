import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";
import './FirstHomeBuyers.scss';
import Contact from '../Contact';
 

  /*
      query={graphql`
      query {
        image: file(relativePath: { eq: "images/firsthome.jpg" }) {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }`}
      */

      /*
const TitleOLD = (props) => (
    <StaticQuery
    query={ graphql`
      query {
    file(relativePath: { eq: "images/firsthome.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`}
     render={data => {
       // Set ImageData.

       return (
      <Grid>
    <Cell size={12} style={{textAlign: 'center'}}>
       <div className="title-section">
            <h1 className="line">First Home</h1>
            <h1 className="line"><em>Buyers</em></h1>

            <div className="separator" />
      </div>

            <p className="big-para">
              Buying your first home is an exciting time.  But it can also be stressful and expensive. 
            </p>

            <p className="big-para">
            Evolution Lawyers makes your journey that little bit easier by offering a 10% discount on our fee for your conveyancing.  Just quote this ad to claim the discount.
            </p>

            <p className="big-para">
                    Available only to first home buyers. Discount applies to our recorded time for services provided, but not to expenses, disbursements, or GST. 
            </p>            

    </Cell>


            <Img
            style={{maxWidth:'100%', width: '100%'}}
            className="first-home-image"
              fluid={data.file.childImageSharp.fluid}
              alt="Evolution Lawyers"
            />


    </Grid>  )
  }
  }
  />);
*/

const Title = (props) => (
    <StaticQuery query={graphql`
      query {
        file(relativePath: { eq: "images/firsthome.jpg" }) {
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
            <h1 className="line">First Home <em>Buyers</em></h1>

            <div className="separator" />
          </div>

          </ScrollAnimation>
          </Cell>

          <Cell size={6}>
               <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>

            <p className="big-para">
              Buying your first home is an exciting time.  But it can also be stressful and expensive. 
            </p>

            <p className="big-para">
            Evolution Lawyers makes your journey that little bit easier by offering a 10% discount on our fee for your conveyancing.  Just quote this ad to claim the discount.
            </p>
            <br/>
            <p className="small-para">
                    Available only to first home buyers. Discount applies to our recorded time for services provided, but not to expenses, disbursements, or GST. 
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