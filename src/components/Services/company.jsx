import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Company = props =>  <Grid>
    <Cell size={6} desktopOffset={3} tabletSize={6} tabletOffset={3} phoneSize={12} phoneOffset={0}   className="services-section" order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Company & Commercial</h1>

        <p className="mid-para">
Our team can assist with the formation and operation of your small-to-medium sized company. Whether it be preparing a shareholders’ agreement, attending to corporate governance matters, assisting with transactions involving shares or assets, preparing terms of trade, or assisting with borrowing, lending, or security arrangements, we can provide advice and documentation to protect your company and help it grow.        </p>
        </ScrollAnimation>
    </Cell>
        </Grid>

export default  Company;