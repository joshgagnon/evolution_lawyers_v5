import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import { GatsbyImage } from "gatsby-plugin-image";
import './FirstHomeBuyers.scss';
import Contact from '../Contact';
 

const Title = (props) => (
    <StaticQuery query={graphql`{
  file(relativePath: {eq: "images/firsthome.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}
`}
     render={data => {
       // Set ImageData.
       const imageData = data.file.childImageSharp.gatsbyImageData;
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
           <GatsbyImage image={imageData} Tag="section" className="first-home-image" />


                      <Contact />
           </React.Fragment>
       );
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