import React, { Component } from "react";
import { Button, TextField, Grid, Cell, Card } from 'react-md';
import config from "../../../data/SiteConfig";
import './Contact.scss';

const ContactForm = () => <form
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
<Grid>
    <TextField
        id="contact-name"
      label="Name"
      lineDirection="center"
      placeholder="Name"
      className="md-cell md-cell--bottom md-cell--6"
      required
    />
    <TextField
    id="contact-phone"
      label="Phone"
      lineDirection="center"
      placeholder="Phone"
      className="md-cell md-cell--bottom md-cell--6"
      required
    />

    <TextField
    id="contact-email"
      label="Email"
      type="email"
      lineDirection="center"
      placeholder="Email"
      className="md-cell md-cell--bottom md-cell--12"
      required
    />

     <TextField
    id="contact-message"
        label="Message"
      rows={4}
      lineDirection="center"
      placeholder="Your Message..."
      className="md-cell md-cell--bottom  md-cell--12"
      required
    />

    <div className="button-row" >
        <Button type="submit" raised secondary className="md-cell--right" iconClassName="fa fa-paper-plane">Send</Button>
    </div>
 </Grid>
</form>


const CardForm = (props) => {
    return <Card>
        <ContactForm />
    </Card>
}


const Contact = ({ className }) => {
   return <section id="contact">
      <Grid>
        <Cell size={5} desktopOffset={1} tabletOffset={1} phoneOffset={0}>

         <div className="title-section">
            <h1 className="line">Get in touch</h1>
            <div className="separator" />
          </div>
          <p className="big-para">
               Need legal assistance? Send us a message or give us a call. We’re happy to help.
          </p>
          <div className="contact-row"><a href={`tel:${config.phone.replace(' ', '')}`}><span className="fa fa-phone" /> { config.phone }</a></div>
          <div className="contact-row"><a href={`mailto:${config.email}`}><span className="fa fa-envelope" /> { config.email }</a></div>

          </Cell>

          <Cell size={5} tabletSize={12}>
              <CardForm />
          </Cell>
          </Grid>
       </section>

 };


 export default Contact;
