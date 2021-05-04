import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import { GatsbyImage } from "gatsby-plugin-image";


const Company = props =>  <StaticQuery
    query={ graphql`{
  file(relativePath: {eq: "images/s3.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 80, placeholder: NONE, layout: FIXED)
    }
  }
}
`}
    render={data => <Grid>
       <Cell size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}  tabletSize={8}  className="services-section"  order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Company & Commercial</h1>

        <p className="mid-para">
Our team can assist with the formation and operation of your small-to-medium sized company. Whether it be preparing a shareholders’ agreement, attending to corporate governance matters, assisting with transactions involving shares or assets, preparing terms of trade, or assisting with borrowing, lending, or security arrangements, we can provide advice and documentation to protect your company and help it grow.        </p>
        </ScrollAnimation>
       </Cell>
          <Cell tabletSize={6} size={6} className="services-section services-section-img"  tabletSize={8}  order={0} desktopOrder={1}>
                  <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10}>
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              className="services-image"
              style={{maxWidth:'100%'}}
              alt="Evolution Lawyers" />
            </ScrollAnimation>
        </Cell>
        </Grid> }
  />

export default  Company;