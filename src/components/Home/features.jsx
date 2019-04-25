import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Tiger.scss';
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import Img from "gatsby-image/withIEPolyfill";

const FeatureRow = ({ title, text, icon }) => {
    return <Grid>
        <Cell >
        <Img fixed={icon.childImageSharp.fixed} alt={title}/>
        <h2>{ title } </h2>
        { text }
        </Cell>
        </Grid>
}



const Features = ({ data: { feesIcon, virtualIcon, mobileIcon, paperlessIcon, secureIcon, creditCardIcon } }) => {
   return <section>
       <FeatureRow title="Fair Fees" icon={feesIcon} text={<p>We strive to be efficient and ensure that our fees are fair, reasonable, and competitive. We are happy to provide estimates and, whenever possible, agree a set fee. <a href="fees">View our fees here</a></p> } />
       <FeatureRow title="Virtual" icon={virtualIcon} text={<p>We are a virtual, cloud based law firm. We can work from any location, at any time. We can also provide you with remote access to your documents.</p> } />
       <FeatureRow title="Mobile" icon={mobileIcon} text={<p>We are a mobile law firm with no central office. If you are in Auckland, we can meet at a location and time convenient to you. If not, we can arrange something else.</p> } />
       <FeatureRow title="Paperless" icon={paperlessIcon} text={<p>Environmentally friendly and efficient, our paperless offices save costs and the planet.</p> } />
       <FeatureRow title="Secure" icon={secureIcon} text={<p>We use our own, secure practice management software that has been designed specifically for Evolution Lawyers.</p> } />
       <FeatureRow title="Credit Card" icon={creditCardIcon} text={<p>You can pay our invoices or deposit money into our trust account by credit or debit card. We take Visa & Mastercard.</p> } />
       </section>

 };

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 60) {
        ...GatsbyImageSharpFixed
      }
    }
  }`;

const query = graphql`
  query {
    feesIcon: file(relativePath: { eq: "images/Fair-Fees.png" }) {
      ...squareImage
    },
    virtualIcon: file(relativePath: { eq: "images/cloud.png" }) {
      ...squareImage
    },
    mobileIcon: file(relativePath: { eq: "images/car.png" }) {
      ...squareImage
    },
    paperlessIcon: file(relativePath: { eq: "images/Home-2.png" }) {
      ...squareImage
    },
    secureIcon: file(relativePath: { eq: "images/secure.png" }) {
      ...squareImage
    },
    creditCardIcon: file(relativePath: { eq: "images/creditcard.png" }) {
      ...squareImage
    }
  }
`

 export default props => (
  <StaticQuery
    query={query}
    render={data => <Features data={data} {...props} />}
  />
)
