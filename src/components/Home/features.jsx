import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Button from "react-md/lib/Buttons";
import {Cell, Grid, Card }  from "react-md";
import './Features.scss'
import BackgroundImage from 'gatsby-background-image'
import ScrollAnimation from 'react-animate-on-scroll';

const FeatureRow = ({ title, text, icon }) => {
    return <Grid>
    <Cell size={12}>
    <Grid className="feature-item">
        <Cell className="feature-box-wrapper" size={3} offset={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
            <div className="feature-box">
                <i className={icon} />
            </div>
            </ScrollAnimation>
        </Cell>
        <Cell className="feature-text" size={5}>
            <ScrollAnimation animateIn='slideInRight' animateOnce={true}>
            <h2>{ title } </h2>
            { text }
            </ScrollAnimation>
        </Cell>
        </Grid>
        </Cell>
        </Grid>
}



const Features = (props) => {
   return <React.Fragment>
       <FeatureRow title="Fair Fees" icon={'fa fa-dollar'} text={<p>We strive to be efficient and ensure that our fees are fair, reasonable, and competitive. We are happy to provide estimates and, whenever possible, agree a set fee. <a href="fees">View our fees here</a></p> } />
       <FeatureRow title="Virtual" icon={'fa fa-cloud'} text={<p>We are a virtual, cloud based law firm. We can work from any location, at any time. We can also provide you with remote access to your documents.</p> } />
       <FeatureRow title="Mobile" icon={'fa fa-car'} text={<p>We are a mobile law firm with no central office. If you are in Auckland, we can meet at a location and time convenient to you. If not, we can arrange something else.</p> } />
       <FeatureRow title="Paperless" icon={'fa fa-tree'} text={<p>Environmentally friendly and efficient, our paperless offices save costs and the planet.</p> } />
       <FeatureRow title="Secure" icon={'fa fa-lock'} text={<p>We use our own, secure practice management software that has been designed specifically for Evolution Lawyers.</p> } />
       <FeatureRow title="Credit Card" icon={'fa fa-credit-card-alt'} text={<p>You can pay our invoices or deposit money into our trust account by credit or debit card. We take Visa & Mastercard.</p> } />
       </React.Fragment>

 };


export default props =>  <StaticQuery query={graphql`
      query {
        file(relativePath: { eq: "images/newlong.jpg" }) {
          childImageSharp {
            fluid(quality: 60) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
     render={data => {
       const imageData = data.file.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={'features'}
                           fluid={imageData}
          >
          <Features />
          </BackgroundImage>)
      }
  } />
