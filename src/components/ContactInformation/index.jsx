import React, { Component } from "react";
import { Button, TextField, Grid, Cell, Card } from 'react-md';
import config from "../../../data/SiteConfig";
import './ContactInformation.scss';
import { clickPhone, clickEmail } from '../Navigation';


const ContactInformation= ({ className }) => {
   return <section id="contact-information">
       <Grid>
           <Cell  size={12} desktopOffset={0} tabletOffset={0} phoneOffset={0}>
                   <div className="title-section" style={{marginTop: 50}}>
                       <h1 className="line">Contact Information</h1>

                       <div className="separator" />
                   </div>
           </Cell>
           <Cell  size={6} tabletSize={4}  desktopOffset={0} tabletOffset={0} phoneOffset={0} className={"address-col"}>
            <div className="address">
                <div className="address-row"><em>Address</em></div>
                { config.address.map((add, i) => {
                    return <div className="address-row" key={i}>
                        { add }
                    </div>
                })}
                <div className="address-row"><em>By appointment only</em></div>
            </div>
           </Cell>

       <Cell  size={6}  tabletSize={4} tabletOffset={0} phoneOffset={0} className={"contact-col"}>
           <div className="contact-row"><a href={`tel:${config.phone.replace(' ', '')}`}  onClick={clickPhone}><span className="fa fa-phone" /> { config.phone }</a></div>
           <div className="contact-row"><a href={`tel:${config.fax.replace(' ', '')}`}><span className="fa fa-fax" /> { config.fax }</a></div>
           <div className="contact-row"><a href={`mailto:${config.email}`} onClick={clickEmail}><span className="fa fa-envelope" /> { config.email }</a></div>
       </Cell>
       </Grid>

       <div style={{textAlign: 'center'}}><iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102135.00877758703!2d174.7200727100854!3d-36.87314376116506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4632f97f9dd3%3A0xf3a15c8fb38e96c7!2sEvolution%20Lawyers!5e0!3m2!1sen!2sau!4v1620174014043!5m2!1sen!2sau"
           width="600" height="450" style={{border:0, margin: '20px auto', maxWidth: '100%'}} allowFullScreen="" loading="lazy"></iframe>
       </div>
       </section>

 };


 export default ContactInformation;
