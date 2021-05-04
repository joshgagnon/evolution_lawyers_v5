import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import { GatsbyImage } from "gatsby-plugin-image";


const Litigation = props =>  <StaticQuery
    query={ graphql`{
  file(relativePath: {eq: "images/lightingim.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 80, placeholder: NONE, layout: FIXED)
    }
  }
}
`}
    render={data => <Grid>
       <Cell size={5}   tabletSize={8} desktopOffset={1}  phoneOffset={0}  className="services-section" order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Commercial Litigation</h1>

        <p className="mid-para">
If you have tried everything else but your business is still in dispute with someone, litigation might be the only option left. Unfortunately, it is usually also the most expensive. Our firm’s focus on efficiency, competitive hourly rates, and pragmatic solutions means the cost of commercial litigation can be kept to a minimum. We specialise in the areas of property, company, commercial, and insolvency law. If you are interested in pursuing or defending litigation in those areas, contact us to talk through your options.
        </p>
        </ScrollAnimation>
       </Cell>
          <Cell tabletSize={8}  size={6} className="services-section services-section-img"  order={0} desktopOrder={1}>
                  <ScrollAnimation animateIn='slideInRight' animateOnce={true} offset={10} >
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              style={{maxWidth:'100%'}}
              className="services-image"
              alt="Evolution Lawyers" />
            </ScrollAnimation>
        </Cell>
        </Grid> }
  />

export default  Litigation;