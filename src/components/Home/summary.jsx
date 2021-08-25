import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Summary.scss';
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';


const BackgroundSection = (props) => (
    <StaticQuery query={graphql`
      query {
        file(relativePath: { eq: "images/tube-min.png" }) {
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
       const imageData = data.file.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className="summary"
                           fluid={imageData}
                            style={{
                              backgroundSize: "contain  !important",
                              backgroundPosition: "110% 50%  !important"
                           }}
          >

      <Grid>
        <Cell  size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}>
           <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10}>
         <div className="title-section">
            <h1 className="line">Evolved</h1>
            <h1 className="line"><em>Legal Services</em></h1>
            <div className="separator" />
            <div className="button-row" >
          </div>
          </div>
          </ScrollAnimation>

          </Cell>
          <Cell tabletSize={12}>
               <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
          <p className="big-para">
               Evolution Lawyers is an Auckland based law firm specialising in insolvency, commercial, company, and property law. We provide both litigation and transactional services to New Zealanders and small to medium-sized New Zealand businesses.
               </p>
               </ScrollAnimation>
          </Cell>
          </Grid>
          </BackgroundImage>
       )
     }
     }
    />
)


const Summary = (props) => {
    return  <section className={"contrast"}><Grid>
        <Cell  size={8} offset={2} tabletSize={10} tabletOffset={1}  phoneSize={12} phoneOffset={0}>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} >
                <p className="giant-para">
                We are a general practice law firm adapted to the needs of modern New Zealanders
    and their businesses.  Powered by technology and Kiwi ingenuity, we provide high-
    quality and cost-effective legal services in the areas of property, trusts and estates,
        commercial, company, and insolvency law.  Whether it be transactions or
    relationships, agreements or disputes, residential or commercial, settlement or
    litigation, or personal or business, we’ve got your back.
                </p>
            </ScrollAnimation>
        </Cell>
    </Grid>
    </section>
}

export default Summary;
