import React, { Component } from "react";
import { Button, TextField, Grid } from 'react-md';


export default (props) => <form
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>


  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
<Grid>
    <TextField
      label="Name"
      lineDirection="center"
      placeholder="Name"
      className="md-cell md-cell--bottom md-cell--6"
    />
    <TextField
      id="floating-center-title"
      label="Phone"
      lineDirection="center"
      placeholder="Phone"
      className="md-cell md-cell--bottom md-cell--6"
    />



    <TextField
      id="floating-center-title"
      label="Email"
      type="email"
      lineDirection="center"
      placeholder="Email"
      className="md-cell md-cell--bottom md-cell--12"
    />





     <TextField
      id="floating-center-title"
      type="email"
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