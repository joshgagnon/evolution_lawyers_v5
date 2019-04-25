import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import './Tiger.scss';
import BackgroundImage from 'gatsby-background-image'
import Button from "react-md/lib/Buttons";
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";
import Img from "gatsby-image/withIEPolyfill";
import ContactForm from '../Contact';



const Contact = ({ className }) => {
   return <section>
      <Grid>
        <Cell  >

         <div className="title-section">
            <h1 className="line">Get in touch</h1>
            <div className="separator" />
          </div>
          <p className="big-para">
               Need legal assistance? Send us a message or give us a call. We’re happy to help.
          </p>


          </Cell>

          <Cell>
              <ContactForm />
          </Cell>
          </Grid>
       </section>

 };


 export default Contact;
