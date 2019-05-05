import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";

import {Cell, Grid, Button }  from "react-md";

const Text = () => {
    return <div>
<p><span>This email disclaimer applies to all emails sent by Evolution Lawyers Limited (<strong>Evolution Lawyers</strong>, <strong>we</strong>, or <strong>us</strong>).</span></p>
<p><span>Any email we send and any attachments to such email (<strong>Email</strong>) are, subject to errors in transmission, intended for use by, and confidential to, the named recipient(s) (<strong>you</strong>). &nbsp;</span></p>
<p><span>An Email may contain information that is confidential, legally privileged, copyright, or subject to other legal restrictions that we are bound to observe.</span></p>
<p><span>If you have received an Email in error, you agree to: </span></p>
<ol>
<li><span>not read, copy, retransmit, use, nor otherwise deal with the Email;</span></li>
</ol>
<ol start="2">
<li><span>notify the error to us immediately by replying to the sender; and</span></li>
</ol>
<ol start="3">
<li><span>delete the Email and any reply to it from your information systems. </span></li>
</ol>
<p><span>If you respond to this Email, you agree that the time of receipt, including for the purposes of subsection 214(a) of the Contract and Commercial Law Act 2017 (New Zealand), will be when the response actually comes to the intended recipient’s attention.</span></p>
<p><span>This Email is not guaranteed to be secure or free of unauthorised interference, error, or virus. &nbsp;We will not have any liability to you or any party caused by such unauthorised interference, error, or virus. You are taken to accept this risk if you communicate with us by email.</span></p>
<p><span>Please note that we will never:</span></p>
<ol>
<li><span>request an electronic payment from you by email unless the payment is to our trust account or in satisfaction of an invoice we have rendered; and</span></li>
</ol>
<ol start="2">
<li><span>receive or pay any amount in cash or cryptocurrency. </span></li>
</ol>
<p><span>Any payment request in breach of the above rules that appears to be from Evolution Lawyers should be treated as illegitimate and reported to us immediately.&nbsp; </span></p>
    </div>
}


class Doc extends Component {
  render() {
    return (<section className="doc">
            <Grid>
            <Cell size={8} desktopOffset={2}>
            <h1 className="doc-title">EMAIL DISCLAIMER</h1>

            <Text />

            </Cell>
            </Grid>

          </section>
    );
  }
}

export default Doc;
