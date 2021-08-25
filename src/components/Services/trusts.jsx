import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Trusts = props =>   <Grid>
    <Cell size={6} desktopOffset={3} tabletSize={6} tabletOffset={3} phoneSize={12} phoneOffset={0}   className="services-section" order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Trusts & Estates</h1>

        <p className="mid-para">
There is never a better time than the present to put measures in place to protect and manage your most valuable assets, both now and in the future. We can help you achieve this by establishing a trust, preparing a will, or putting in place powers of attorney relating to your property and healthcare. If you want to put something in place to protect your assets, or update your existing arrangements, get in touch with us to discuss your options.</p>
        </ScrollAnimation>
       </Cell>
        </Grid>

export default  Trusts;