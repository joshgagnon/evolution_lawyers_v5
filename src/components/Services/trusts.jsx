import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Trusts = props =>  <StaticQuery
    query={ graphql`
      query {
    file(relativePath: { eq: "images/signpaper.png" }) {
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
          <Cell tabletSize={6} tabletSize={8}  size={6} className="services-section services-section-img" >
                  <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10}>
            <Img
            className="services-image"
              fixed={data.file.childImageSharp.fixed}
              alt="Evolution Lawyers"
                          style={{maxWidth:'100%'}}
            />
            </ScrollAnimation>
        </Cell>
       <Cell size={5} phoneOffset={0}  className="services-section">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Trusts & Estates</h1>

        <p className="mid-para">
There is never a better time than the present to put measures in place to protect and manage your most valuable assets, both now and in the future. We can help you achieve this by establishing a trust, preparing a will, or putting in place powers of attorney relating to your property and healthcare. If you want to put something in place to protect your assets, or update your existing arrangements, get in touch with us to discuss your options.</p>
        </ScrollAnimation>
       </Cell>
        </Grid> }
  />

export default  Trusts;