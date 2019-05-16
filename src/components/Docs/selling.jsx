import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import Disclaimer from './disclaimer';
import {Cell, Grid, Button }  from "react-md";

const Text = () => {
    return <div>
        <h2>Some things you might want to know</h2>

<ol>
<li><strong>Conveyancing</strong>

<p>Selling a residential property falls within the category of transactions lawyers term “<a href="https://browser.catalex.nz/open_definition/24121-DLM364970/" target="_blank" rel="noopener">conveyancing</a>”.&nbsp; This short guide sets out some things you might want to know about what is involved in a property sale conveyance.</p>
</li>

<li><strong>The Sale and Purchase Agreement</strong>

<p>Every property sale involves entering into a sale and purchase agreement with the purchaser.&nbsp; The same <a href="http://s3-ap-southeast-2.amazonaws.com/adls-media/7487526/4002-Sale-Purchase-of-Real-Estate-Ninth-Edition-2012-3-Highlighted.pdf" target="_blank" rel="noopener">form</a> of agreement, which was developed by the Auckland District Law Society and Real Estate Agents Institute of New Zealand, is used in virtually all property sales.&nbsp;</p>
<p>The agreement can be drafted to either include conditions or not.&nbsp; Conditions are generally included for the benefit of the purchaser.&nbsp; All conditions included in the agreement, for example finance, must be satisfied before the purchaser is under an obligation to complete the purchase.&nbsp; Conditions have deadlines, which if not met can lead to the agreement being cancelled.&nbsp;</p>
<p>Generally, a deposit is payable by the purchaser once the agreement is declared unconditional.&nbsp; The deposit is usually held in the real estate agent’s trust account until just before settlement, at which time it is released to us with the agent’s commission deducted.</p>
</li>

<li><strong>Mortgage</strong>

<p>If there is a mortgage over the property you are selling, this needs to be discharged before the property title can be transferred to the purchaser.&nbsp; That requires repaying any amounts you owe the mortgagee (usually a bank) that are secured by the mortgage.&nbsp; Usually, this will mean all amounts you owe the bank.</p>
<p>We will contact the mortgagee on your behalf to request that the mortgage be discharged.&nbsp; The bank will then provide us with a statement setting out the amount it requires to be paid in order to have the mortgage discharged.&nbsp; We will check the bank’s repayment figure with you before any payment is made to ensure it is what you are expecting.</p>
<p>The mortgage discharge payment is then made from the settlement funds received from the purchaser.</p>

</li>

<li><strong>Rates and Water Charges</strong>

<p>Because rates instalments do not usually match up with the settlement date, an apportionment is made relating to the rates you have already paid to ensure that both you and the purchaser account for your fair share of the annual rates amount.&nbsp; We will contact the local council to confirm what rates have been paid.&nbsp; The amount paid by the purchaser on settlement includes the rates apportionment, and will be higher or lower than the purchase price depending on the rates payments you have made.</p>
<p>For properties that have a water meter, we will arrange a final meter reading as at the settlement date.&nbsp; From this reading, the water provider will generate a final invoice after the settlement date for your water account at the property.&nbsp; We will then forward this on to you to arrange payment.</p>
</li>

<li><strong>Unit Titles</strong>

<p>If your property is a unit title, the body corporate levies you have paid will be apportioned in the same way as the council rates.&nbsp; We will contact the body corporate administrator to confirm what levies have been paid.</p>
<p>When selling a unit title, you are required to provide the purchaser with <a href="https://reagovtnz.cwp.govt.nz/real-estate-professionals/listing-a-property/unit-title-guidance/" target="_blank" rel="noopener">pre-contract and pre-settlement disclosure statements</a>.&nbsp; The pre-settlement disclosure must be provided at least five working days before settlement, and if it is not then the purchaser can cancel the agreement.&nbsp; We will obtain the statement from the body corporate administrator and provide it to the purchaser on your behalf.</p>
</li>

<li><strong>Trust Account</strong>

<p>We will use our <a href="https://www.lawsociety.org.nz/for-lawyers/regulatory-requirements/trust-account-management" target="_blank" rel="noopener">trust account</a> to receive and pay funds on your behalf.&nbsp; This will include receiving the deposit payment from the real estate agent and settlement payment from the purchaser’s solicitor, and paying your bank the mortgage discharge amount.</p>
<p>If we hold a surplus in our trust account following the payment of the discharge amount, we will use that to pay our fee.&nbsp; Any proceeds remaining after payment of our invoice will be paid as you direct.</p>
</li>

<li><strong>Landonline and Authority &amp; Instruction Form</strong>

<p>The transfer of the property title from you to the purchaser is effected electronically using <a href="http://www.linz.govt.nz/land/landonline" target="_blank" rel="noopener">Landonline</a>.&nbsp; To complete the transaction through Landonline, we need to have your written and signed authority to do so.&nbsp; That authority is provided via a form known as an <a href="http://www.linz.govt.nz/land/land-registration/prepare-and-submit-your-dealing/authority-instruction-ai" target="_blank" rel="noopener">Authority &amp; Instruction Form</a>, which is an important document.&nbsp; It needs to be signed by you, witnessed, and backed up by a verified copy of your photo identification.</p>
</li><li><strong>Tax Details</strong>

<p>Anybody who sells a property must complete and sign a <a href="http://www.linz.govt.nz/land/land-registration/prepare-and-submit-your-dealing/property-tax-compliance-requirements" target="_blank" rel="noopener">land transfer tax statement</a>.&nbsp; The property title cannot be transferred without it.&nbsp; If the property you are selling was not your main home, you must provide your IRD number.&nbsp; An IRD number is always required where the property is held in a trust.</p>
</li><li><strong>Signing Documents</strong>

<p>If you are in Auckland, we can meet at a location convenient to you to sign up the documents required to complete the sale.&nbsp; This will include the Authority &amp; Instruction Form and land transfer tax statement.&nbsp; We will make other arrangements if you live outside Auckland.</p>
</li><li><strong>Settlement Day</strong>

<p>The sale will be completed on settlement day, which will be agreed in the sale and purchase agreement.&nbsp; We will do everything we can to complete settlement as early as possible, however, settlements are often delayed by things that are out of your and our hands.&nbsp; If we think there is a risk settlement may not go ahead as planned, we will let you know straight away.</p>
</li>
</ol>
    </div>
}


class Doc extends Component {
  render() {
    return (<section className="doc">
            <Grid>
            <Cell size={8} desktopOffset={2}>
            <h1 className="doc-title">SELLING A RESIDENTIAL PROPERTY</h1>

            <Text />
            <Disclaimer />
            </Cell>
            </Grid>

          </section>
    );
  }
}

export default Doc;
