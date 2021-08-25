import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import ScrollAnimation from 'react-animate-on-scroll';
import Img from "gatsby-image/withIEPolyfill";


const Litigation = props =>   <Grid>
    <Cell size={6} desktopOffset={3} tabletSize={12}   phoneSize={12} phoneOffset={0}   className="services-section" order={1} desktopOrder={0}>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={10}>
        <h1>Commercial Litigation</h1>

        <p className="mid-para">
If you have tried everything else but your business is still in dispute with someone, litigation might be the only option left. Unfortunately, it is usually also the most expensive. Our firm’s focus on efficiency, competitive hourly rates, and pragmatic solutions means the cost of commercial litigation can be kept to a minimum. We specialise in the areas of property, company, commercial, and insolvency law. If you are interested in pursuing or defending litigation in those areas, contact us to talk through your options.
        </p>
        </ScrollAnimation>
    </Cell>
        </Grid>


export default  Litigation;