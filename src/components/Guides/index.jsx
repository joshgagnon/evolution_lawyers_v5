import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Grid from "react-md/lib/Grids";
import Cell from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import './Guides.scss';
import GuideIcons from './guideIcons';


const Title = (props) => (
    <StaticQuery
        query={graphql`
      query {
        file(relativePath: { eq: "images/Rhino.jpg" }) {
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
                                    style={{
                                        // Defaults are overwrite-able by setting one or each of the following:
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'right',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    fluid={data.file.childImageSharp.fluid}>

                <Grid>
                    <Cell size={6} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}
                          className="guides-title  text-block">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
                            <div className="title-section">
                                <h1 className="line"><em>Our</em> Resources</h1>
                                <div className="separator"/>

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
                <GuideIcons/>
            </BackgroundImage>
        }
        }
    />);


const Guides = (props) => {

    return <div className="guides container">
        <Title/>

    </div>
}


export default Guides;