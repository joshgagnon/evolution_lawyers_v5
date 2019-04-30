import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Company = props =>  <StaticQuery
    query={ graphql`
      query {
    file(relativePath: { eq: "images/s3.png" }) {
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
       <Cell size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}  className="services-section">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Company & Commercial</h1>

        <p className="mid-para">
Our team can assist with the formation and operation of your small-to-medium sized company. Whether it be preparing a shareholders’ agreement, attending to corporate governance matters, assisting with transactions involving shares or assets, preparing terms of trade, or assisting with borrowing, lending, or security arrangements, we can provide advice and documentation to protect your company and help it grow.        </p>
        </ScrollAnimation>
       </Cell>
          <Cell tabletSize={6} size={6} className="services-section services-section-img">
                  <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>
            <Img
            className="services-image"
              fixed={data.file.childImageSharp.fixed}
              alt="Evolution Lawyers"
            />
            </ScrollAnimation>
        </Cell>
        </Grid> }
  />

export default  Company;