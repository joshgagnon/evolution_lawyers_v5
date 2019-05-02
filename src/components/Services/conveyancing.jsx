import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Conveyancing = props =>  <StaticQuery
    query={ graphql`
      query {
    file(relativePath: { eq: "images/Conveyancing.jpg" }) {
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
       <Cell size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}  tabletSize={8} className="services-section" order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Conveyancing</h1>

        <p className="mid-para">
We provide both commercial and residential conveyancing services. Our residential conveyancing services are competitively priced, with fees starting from $880 for a purchase, $780 for sale, and $680 for a refinance (each excluding GST and disbursements). In most cases we do not exceed those estimates. Please contact <a href="mailto:kieran@evolutionlawyers.nz">Kieran Boyle</a>, our conveyancing specialist, to find out more.
        </p>
        </ScrollAnimation>
       </Cell>
          <Cell tabletSize={6} size={6}  tabletSize={8} className="services-section services-section-img" order={0} desktopOrder={1}>
                  <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>
            <Img
            style={{maxWidth:'100%'}}
            className="services-image"
              fixed={data.file.childImageSharp.fixed}
              alt="Evolution Lawyers"
            />
            </ScrollAnimation>
        </Cell>
        </Grid> }
  />

export default  Conveyancing;