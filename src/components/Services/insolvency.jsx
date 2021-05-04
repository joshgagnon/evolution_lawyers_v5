import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import { GatsbyImage } from "gatsby-plugin-image";


const Insolvency = props =>  <StaticQuery
    query={ graphql`{
  file(relativePath: {eq: "images/s4.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 80, placeholder: NONE, layout: FIXED)
    }
  }
}
`}
    render={data => <Grid>
          <Cell size={6} tabletSize={8} className="services-section services-section-img">
                  <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10} >
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              className="services-image"
              alt="Evolution Lawyers"
              style={{maxWidth:'100%'}} />
            </ScrollAnimation>
        </Cell>
       <Cell size={5}  tabletSize={8}   phoneOffset={0}  className="services-section">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Insolvency</h1>

        <p className="mid-para">
Evolution Lawyers are specialists in most areas of insolvency law, including summary judgment for debts, mortgagee sales, bankruptcy, liquidation, and receivership. We adopt a practical and efficient approach to insolvency problems designed to ensure the best possible outcome for our clients, sometimes in the worst possible situations. If you are owed money that you want back, or are in a tight spot with creditors and want to know your options, take the next step and give us a call.
       </p>
   </ScrollAnimation>
       </Cell>
        </Grid> }
  />

export default  Insolvency;