import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import { GatsbyImage } from "gatsby-plugin-image";
import './GuideIcons.scss';
import { Link } from "gatsby";


export const ConveyancingIcons = (props) => {
    return <Cell size={8} desktopOffset={2} className="guide-button-row">

        <Link  className="guide-button" to="/docs/buying">
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/guidehome.jpg" alt="Buying" /></ScrollAnimation>
            <span className="guide-text">BUYING</span>
        </Link>

        <Link className="guide-button"  to="/docs/selling">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/guidesell.jpg" alt="Selling" /></ScrollAnimation>
            <span className="guide-text">SELLING</span>
           </Link>

        <Link  className="guide-button"  to="/docs/refinancing">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/guideref.jpg" alt="Refinancing" /></ScrollAnimation>
            <span className="guide-text">REFINANCING</span>
           </Link>

    </Cell>
}


export const DebtRecoveryIcons = (props) => {
    return     <Cell size={8} desktopOffset={2} className="guide-button-row">
        <Link  className="guide-button" to="/docs/debtrecovery">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}><img src="/assets/images/debt.jpg" alt="Debt recovery and disbursements" /></ScrollAnimation>
            <span className="guide-text">DEBT RECOVERY &amp; DISBURSEMENTS</span>
           </Link>


    </Cell>
}

const GuideIcons = (props) => (
                               <section className="guide-icons">
    <Grid>
    <Cell size={10} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}>
       <div className="sub-title-section" style={{textAlign:'center'}}>
       <h1 className="line">Residential Conveyancing</h1>
            <div className="separator" />
      </div>
    </Cell>

    <ConveyancingIcons />


    <Cell size={10} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}>
       <div className="sub-title-section" style={{textAlign:'center'}}>
       <h1 className="line">Debt Recovery</h1>
            <div className="separator" />

      </div>
    </Cell>

    <DebtRecoveryIcons />

    </Grid>
    </section>
);


  export default GuideIcons;