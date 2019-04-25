import React, { Component } from "react";
import { Button, TextField } from 'react-md';
import Grid  from "react-md/lib/Grids";
import Cell  from "react-md/lib/Grids/Cell";

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
    />
    <TextField
    id="contact-phone"
      id="floating-center-title"
      label="Phone"
      lineDirection="center"
      placeholder="Phone"
      className="md-cell md-cell--bottom md-cell--6"
    />

    <TextField
    id="contact-email"
      id="floating-center-title"
      label="Email"
      type="email"
      lineDirection="center"
      placeholder="Email"
      className="md-cell md-cell--bottom md-cell--12"
    />

     <TextField
    id="contact-message"
      id="floating-center-title"
      rows={4}
      lineDirection="center"
      placeholder="Your Message..."
      className="md-cell md-cell--bottom  md-cell--12"
    />

    <div className="button-row" >
        <Button type="submit" raised secondary className="md-cell--right" iconClassName="fa fa-paper-plane">Send</Button>
    </div>
 </Grid>
</form>




const Contact = ({ className }) => {
   return <section id="contact">
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
