import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import { GatsbyImage } from "gatsby-plugin-image";


const Conveyancing = props =>  <StaticQuery
    query={ graphql`{
  file(relativePath: {eq: "images/Conveyancing.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 80, placeholder: NONE, layout: FIXED)
    }
  }
}
`}
    render={data => <Grid>
       <Cell size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}  tabletSize={8} className="services-section" order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Conveyancing</h1>

        <p className="mid-para">
We provide both commercial and residential conveyancing services. Our residential conveyancing services are competitively priced, with fees starting from $950 for a purchase, $850 for sale, and $680 for a refinance (each excluding GST and disbursements). In most cases we do not exceed those estimates. Please contact <a href="mailto:kieran@evolutionlawyers.nz">Kieran Boyle</a>, our conveyancing specialist, to find out more.
        </p>
        </ScrollAnimation>
       </Cell>
          <Cell tabletSize={6} size={6}  tabletSize={8} className="services-section services-section-img" order={0} desktopOrder={1}>
                  <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              style={{maxWidth:'100%'}}
              className="services-image"
              alt="Evolution Lawyers" />
            </ScrollAnimation>
        </Cell>
        </Grid> }
  />

export default  Conveyancing;