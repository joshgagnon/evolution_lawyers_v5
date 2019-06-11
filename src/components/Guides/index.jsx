import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";
import './Guides.scss';
import GuideIcons from './guideIcons';
import Contact from '../Contact';


const Youtube = (props) => {
  return <Grid>
    <Cell  size={12} style={{textAlign: 'center', margin: '36px 0'}}>
     <iframe style={{maxWidth: '100%'}} width="560" height="315" src="https://www.youtube.com/embed/Hhf33QabDrM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

     </Cell>
  </Grid>
}


const Title = (props) => (
    <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/keyboard.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }`}
     render={data => {
        return <BackgroundImage Tag="section"
                           className="guide-bg"
                           fluid={data.file.childImageSharp.fluid}>

      <Grid>
    <Cell size={6} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0} className="guides-title">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
       <div className="title-section">
       <h1 className="line"><em>Our</em> Resources</h1>
            <div className="separator" />

      </div>

      <p className="big-para">
Welcome to our Resources section. Here you can
find useful videos and plain English summaries about the law and various legal
processes. We have prepared these resources to answer some of the more
common questions our clients have about their matters. Although we hope you
find our resources helpful, we stress that they are not a substitute for obtaining
legal advice from a registered lawyer. If you need that, please get in touch.
</p>
      </ScrollAnimation>
    </Cell>
    </Grid>
   </BackgroundImage>
  }
  }
  />);


const Guides = (props) => {

  return <div className="guides container">
  <Title />
  <GuideIcons />
  <Youtube />
  <Contact/>
  </div>
}


export default Guides;