import React, { Component } from "react";
import { Button, TextField, Grid, Cell, Card } from 'react-md';
import config from "../../../data/SiteConfig";
import './ContactInformation.scss';
import { clickPhone, clickEmail } from '../Navigation';
import {graphql, StaticQuery} from "gatsby";
import BackgroundImage from "gatsby-background-image";


const ContactInformation = ({ className }) => {
    return  <section id="contact-information">
       <Grid>
           <Cell  size={12} desktopOffset={0} tabletSize={12} tabletOffset={0} style={{textAlign: 'center'}}>
               <div className="title-section" style={{marginTop: 50}}>
                   <h1 className="line">Contact Information</h1>

               </div>
           </Cell>
           <Cell  size={4} desktopOffset={2} tabletSize={12} tabletOffset={0} style={{textAlign: 'center'}} className={'contact-details'}>
            <br/>

            <div className="address">
                <div className="address-row"><em>Address</em></div>
                { config.address.map((add, i) => {
                    return <div className="address-row" key={i}>
                        { add }
                    </div>
                })}
                <div className="address-row"><em>By appointment only</em></div>
            </div>

            <br/>
            <br/>
            <br/>
           <div className="contact-row"><a href={`tel:${config.phone.replace(' ', '')}`}  onClick={clickPhone}>{ config.phone }</a></div>
           <div className="contact-row"><a href={`tel:${config.fax.replace(' ', '')}`}>{ config.fax }</a></div>
           <div className="contact-row"><a href={`mailto:${config.email}`} onClick={clickEmail}>{ config.email }</a></div>
       </Cell>

        <Cell  size={4} desktopOffset={0} tabletSize={12} style={{textAlign: 'center'}} className={"map"}>
       <div style={{textAlign: 'center'}}><iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102135.00877758703!2d174.7200727100854!3d-36.87314376116506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4632f97f9dd3%3A0xf3a15c8fb38e96c7!2sEvolution%20Lawyers!5e0!3m2!1sen!2sau!4v1620174014043!5m2!1sen!2sau"
           width="600" height="450" style={{border:0, margin: '20px auto', maxWidth: '100%'}} allowFullScreen="" loading="lazy"></iframe>
       </div>
        </Cell>
       </Grid>
       </section>
 };


 export default ContactInformation;
