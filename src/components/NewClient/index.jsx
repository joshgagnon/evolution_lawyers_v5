import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Checkbox from "react-md/lib/SelectionControls/Checkbox";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import config from "../../../data/SiteConfig";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";
//import './Guides.scss';
//import GuideIcons from './guideIcons';

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';
  

class NewClientForm  extends React.Component {
    state = {value: false, reCaptcha: false}
    onChange = (value) => this.setState({ value })
    render() {
        return <GoogleReCaptchaProvider reCaptchaKey={config.recaptcha}>
        <form
          name="new-client"
          method="post"
          data-netlify-recaptcha="true" 
          action={config.newClientTarget}
        >
        <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value="contact request" />
        <Grid>
        <div  style={{textAlign: 'center', marginBottom: 16, width: '100%'}}>
            <Checkbox
              id="new-client-agree"
              name="agree"
              label="I agree and wish to proceed on the above basis."
              value={this.state.value}
              onChange={this.onChange}
              required
            />
            </div>
    <GoogleReCaptcha onVerify={token => this.setState({recaptcha: true})} />

            <div className="button-row" >
                <Button type="submit" raised secondary className="md-cell--right" iconClassName="fa fa-paper-plane" disabled={!this.state.value || !this.state.recaptcha}>Next</Button>
            </div>
         </Grid>
        </form>
  </GoogleReCaptchaProvider>
    }
}



const Title = (props) => (
    <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/keyboard.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
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
       <h1 className="line"><em>New Client</em> Signup</h1>
            <div className="separator" />

      </div>
      </ScrollAnimation>

    <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={500}>
      <p className="small-para">From this page you can sign up to be a new client of Evolution Lawyers.</p>

      <p className="small-para">Signing up using our New Client Form is the fastest way for you or your organisation to engage our firm. Submitting the form will not incur any cost and you
will not be required to provide any card details or other payment information. We will not commence acting until we have sent you a letter of engagement
    and received your instructions.</p>

    <p className="small-para">The form may take up to five minutes to complete.</p>

    <p className="small-para">All information and documents provided will be kept strictly confidential and in accordance with our privacy policy, which you can find <a href="/docs/privacypolicy" >here</a></p>

    <p className="small-para">By clicking the checkbox below and submitting the form, you agree that:
    </p>
    <ul className="small-para small-list">
    <li>any legal services we provide will be subject to our terms of engagement, which you can find <a href="/docs/termsofengagement" >here</a>, unless we otherwise agree in writing;</li>

    <li>despite completing this form, it is possible we will not be able to act for you or your organisation, for example because there is a conflict of interest or
    insufficient resource or expertise to complete the required work;</li>


    <li>we may require further information or documents before we can complete the required work, for example to comply with our obligations under the <a href="https://browser.catalex.nz/open_article/instrument/DLM2140700" rel="noopener noreferrer">Anti-Money Laundering and Countering Financing of Terrorism Act 2009</a>; and</li>


    <li>if you are not the new client noted on the form, you have authority to submit this form on the new client’s behalf.</li>
    </ul>
          </ScrollAnimation>

    <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={1500}>
          <NewClientForm />
          </ScrollAnimation>
    </Cell>
    </Grid>
   </BackgroundImage>
  }
  }
  />);


const NewClient = (props) => {

  return <div className="new-client container">
  <Title />

  </div>
}


export default NewClient;