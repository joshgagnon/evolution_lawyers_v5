import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Insolvency = props =>  <StaticQuery
    query={ graphql`
      query {
    file(relativePath: { eq: "images/s4.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(quality: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }`}
    render={data => <Grid>
          <Cell tabletSize={6} size={6} className="services-section services-section-img">
                  <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10}>
            <Img
            className="services-image"
              fixed={data.file.childImageSharp.fixed}
              alt="Evolution Lawyers"
            />
            </ScrollAnimation>
        </Cell>
       <Cell size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}  className="services-section">
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