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
<p>Refinancing a residential property by entering into a new mortgage with a different bank falls within the category of transactions lawyers term “<a href="https://browser.catalex.nz/open_definition/24121-DLM364970/">conveyancing</a>”.&nbsp; This short guide sets out some things you might want to know about what is involved in a refinance conveyance.</p>
</li><li><strong>Your Existing Mortgage</strong>

<p>A refinance always involves the discharge of the existing mortgage over your property.&nbsp; That requires repaying any amounts you owe the current mortgagee (usually a bank) that are secured by the mortgage.&nbsp; Usually, this will mean all amounts you owe the bank.&nbsp;</p>
<p>We will contact the existing mortgagee on your behalf to request that the mortgage be discharged.&nbsp; The bank will then provide us with a statement setting out the amount it requires to be paid in order to have the mortgage discharged.&nbsp; We will check the bank’s repayment figure with you before any payment is made to ensure it is what you are expecting.</p>
</li><li><strong>New Loan and Mortgage</strong>

<p>As well as being your lawyer, we will also act for the new mortgagee bank as part of the transaction.&nbsp; The bank engages us to protect their interests in connection with the transaction.&nbsp; We do that by ensuring the mortgage is registered over the property title at the same time the old mortgage is discharged.&nbsp; Most banks also ask us to complete their disclosure requirements under <a href="http://www.comcom.govt.nz/consumer-credit/consumer-credit-fact-sheets/credit-contracts-and-consumer-finance-act/">consumer protection law</a>.&nbsp;</p>
<p>The time we take to fulfil the bank’s requirements is taken into account in our fee estimate for property refinances.</p>
</li><li><strong>Trust Account</strong>

<p>We will use our <a href="https://comcom.govt.nz/__data/assets/pdf_file/0023/91571/Consumer-credit-contracts-overview-Fact-sheet-Oct-2012.pdf">trust account</a> to receive and pay funds on your behalf.&nbsp; This will include receiving the loan from the new bank, and paying the old bank the mortgage discharge amount.</p>
<p>If we hold a surplus in our trust account following the payment of the discharge amount, we will use that to pay our fee.&nbsp; Any proceeds remaining after payment of our invoice will be paid as you direct.</p>
</li><li><strong>Landonline and Authority &amp; Instruction Form</strong>

<p>The discharge and registration of the existing and new mortgages, respectively, is effected electronically using <a href="http://www.linz.govt.nz/land/landonline">Landonline</a>.&nbsp; To complete the transaction through Landonline, we need to have your written and signed authority to do so.&nbsp; That authority is provided via a form known as an <a href="http://www.linz.govt.nz/land/land-registration/prepare-and-submit-your-dealing/authority-instruction-ai">Authority &amp; Instruction Form</a>, which is an important document.&nbsp; It needs to be signed by you, witnessed, and backed up by a verified copy of your photo identification.</p>
</li><li><strong>Signing Documents</strong>

<p>If you are in Auckland, we can meet at a location convenient to you to sign up the documents required to complete the refinance.&nbsp; This will include the Authority &amp; Instruction Form and loan documents.&nbsp; We will make other arrangements if you live outside Auckland.</p>
</li><li><strong>Insurance</strong>

<p>As part of the bank’s requirements for advancing you a loan, it will want to know that the property will be adequately insured.&nbsp; This involves obtaining a certificate of currency from your insurer showing the bank as an interested party.&nbsp; The certificate needs to be provided to the bank along with the loan agreement in order to receive the loan funds.</p>
</li><li><strong>Settlement Day</strong>
<p>The refinance will be completed on settlement day, which can usually be arranged to be at your convenience.&nbsp; We will do everything we can to complete settlement as early as possible, however, settlements are often delayed by things that are out of your and our hands.&nbsp; If we think there is a risk settlement may not go ahead as planned, we will let you know straight away.</p>
    </li></ol>
    </div>
}


class Doc extends Component {
  render() {
    return (<section className="doc">
            <Grid>
            <Cell size={8} desktopOffset={2}>
            <h1 className="doc-title">REFINANCING A RESIDENTIAL PROPERTY</h1>

            <Text />
            <Disclaimer />
            </Cell>
            </Grid>

          </section>
    );
  }
}

export default Doc;
