import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import {Cell, Grid, Button }  from "react-md";

const Text = () => {
    return <div>

<p>This privacy policy sets out how Evolution Lawyers collects, uses, discloses, and protects personal information in compliance with the Privacy Act 1993 (<strong>Act</strong>).&nbsp; It is not intended to cover types of personal information that are not covered by the Act.</p>
<p>‘Personal information’ is information about an identifiable individual, and may include information such as the individual’s name, email address, telephone number, bank account details, taxation details, and accounting and financial information.</p>

<ol>
<li>COLLECTION OF PERSONAL INFORMATION
<p>We collect and hold personal information when it is necessary for business purposes.&nbsp; We collect personal information from customers when they provide that personal information to us.&nbsp;</p>
<p>Customers provide us with their personal information through our website, and in written correspondence, telephone conversations, and other communication with us.</p>
<p>We may collect personal information about customers from third parties where we have been authorised to do so, or if the information is publicly available.</p>
</li>

<li>USE OF PERSONAL INFORMATION

<p>We may use your personal information:</p>
<ul>
<li>to verify your identity;</li>
<li>to provide services to you;</li>
<li>to market our services to you;</li>
<li>to improve the services we provide;</li>
<li>to respond to communications from you;</li>
<li>to undertake credit checks;</li>
<li>for billing and the collection of amounts owed to us;</li>
<li>to comply with legal requirements;</li>
<li>to carry out activities related to the operation of our business; and</li>
<li>for any other purpose authorised by you or the Act.</li>
</ul>
<p>If you choose not to provide us with personal information, we may not be able to provide you with legal services.</p>
<p>You may elect to no longer receive marketing material from us by giving written notice.</p>
</li><li>DISCLOSURE OF PERSONAL INFORMATION

<p>We may disclose your personal information:</p>
<ul>
<li>if the use or disclosure is permitted by the Act or this privacy policy;</li>
<li>if disclosure is necessary to provide you with legal services or advice;</li>
<li>to any business that provides support services related to our supply of services, to the extent reasonably required;</li>
<li>for credit checking purposes;</li>
<li>if required to do so by law; or</li>
<li>with your prior written consent.</li>
</ul>

</li><li>PROTECTION OF PERSONAL INFORMATION

<p>We will take reasonable precautions to protect your personal information from unauthorised access, modification, or disclosure, and other misuse.</p>
<p>We will notify you at the first reasonable opportunity if we discover or are advised that your personal information has been lost, stolen, accessed, used, disclosed, copied, modified, or disposed of by an unauthorised person or in any unauthorised manner.</p>
</li>
<li>CARD PAYMENTS

<p>We may acquire personal information when you use our online system for taking debit or credit card payments.&nbsp; Such information will typically include the cardholder’s name and card number, expiry date, and CSV number.&nbsp; We may obtain other personal information from your bank in connection with your use of our payment system as required to facilitate payments being made.</p>
<p>All transactions will be processed through a secure, third-party system.&nbsp; We and the provider of our payment system are subject to, and comply with, the Payment Card Industry Data Security Standards for storage of card information.</p>
<p>We will only disclose information obtained from your use of our payment system for purposes relating to that use, unless otherwise required by law.&nbsp;</p>
</li><li>ACCESS TO PERSONAL INFORMATION

<p>Subject to the Act, you have the right to access, and request corrections to, your personal information that we hold.</p>
<p>We must be satisfied that a request to correct personal information is reasonable and that we are reasonably able to make the correction.&nbsp; We will use reasonable endeavours to advise you if we are unable to make a requested correction.</p>
</li><li>INTERNET USE

<p>The transmission or provision of personal information over the Internet is at your own risk.&nbsp; If you follow a link on our website to another website, the owner of that website may have its own privacy policy relating to your personal information.&nbsp; Our privacy policy will not apply to the provision of your personal information through any third party’s website.</p>
<p>We may use cookies to monitor your use of our website.&nbsp; Cookies are small text files that are stored on your computer for record-keeping purposes.&nbsp; A cookie does not identify you personally or contain any other information about you but it does identify your computer.&nbsp; You may disable or manually manage cookies by changing your web-browser settings.&nbsp; However, this may limit the functionality and usability of the website and its features.</p>
</li><li>NOTICES

<p>Unless we have been communicating with you using another means, all notices and other communications you wish to send us in connection with this privacy policy must be sent by email to mail@evolutionlawyers.nz.</p>
</li><li>CHANGES TO PRIVACY POLICY

<p>We may change this policy from time to time.&nbsp; Any amended policy is effective from the time it is published on our website and will apply between us whether or not we have given you specific notice of any changes.</p>
</li>
</ol>
    </div>
}


class Doc extends Component {
  render() {
    return (<section className="doc">
            <Grid>
            <Cell size={8} desktopOffset={2}>
            <h1 className="doc-title">PRIVACY POLICY</h1>

            <Text />
            </Cell>
            </Grid>

          </section>
    );
  }
}

export default Doc;
