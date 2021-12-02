import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Conveyancing = props =>  <Grid>
       <Cell size={6} desktopOffset={3} tabletSize={12}  phoneSize={12} phoneOffset={0}   className="services-section" order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Conveyancing</h1>

        <p className="mid-para">
            We provide both commercial and residential conveyancing services. Our residential conveyancing services are competitively priced, with fee estimates starting from $1,450 for a purchase, $1,200 for a sale, and $800 for a refinance (each excluding GST, disbursements, and expenses).        </p>
        </ScrollAnimation>
       </Cell>
</Grid>



export default  Conveyancing;