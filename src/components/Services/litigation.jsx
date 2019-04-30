import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Litigation = props =>  <StaticQuery
    query={ graphql`
      query {
    file(relativePath: { eq: "images/lightingim.png" }) {
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
        <h1>Commercial Litigation</h1>

        <p className="mid-para">
If you have tried everything else but your business is still in dispute with someone, litigation might be the only option left. Unfortunately, it is usually also the most expensive. Our firm’s focus on efficiency, competitive hourly rates, and pragmatic solutions means the cost of commercial litigation can be kept to a minimum. We specialise in the areas of property, company, commercial, and insolvency law. If you are interested in pursuing or defending litigation in those areas, contact us to talk through your options.
        </p>
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

export default  Litigation;