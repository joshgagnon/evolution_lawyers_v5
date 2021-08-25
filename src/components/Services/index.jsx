import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";
import Conveyancing from './conveyancing';
import Trusts from './trusts'
import Company from './company';
import Insolvency  from './insolvency';
import Litigation from './litigation';
import Contact from '../Contact';


const Title = (props) => (
    <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/Chimp.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }`}
     render={data => {
        return ( <BackgroundImage Tag="section"
                           className="services"
                                  style={{
                                      // Defaults are overwrite-able by setting one or each of the following:
                                      backgroundSize: 'contain',
                                      backgroundPosition: 'bottom',
                                      backgroundRepeat: 'no-repeat',
                                  }}
                           fluid={data.file.childImageSharp.fluid}>

      <Grid>
    <Cell size={12} style={{textAlign: 'center'}}>
       <div className="title-section">
          <h1 className="line">Services</h1>
            <div className="separator" />
      </div>
    </Cell>
    </Grid>

            <Conveyancing />
            <Trusts />
            <Company />
            <Insolvency />
            <Litigation />

        </BackgroundImage>  )
  }
  }
  />);


const Services = (props) => {

  return <div className="services container">
  <Title />


  </div>
}


export default Services