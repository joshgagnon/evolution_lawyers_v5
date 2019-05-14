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

<p>Buying a residential property falls within the category of transactions lawyers term “<a href="https://browser.catalex.nz/open_definition/24121-DLM364970/">conveyancing</a>”.&nbsp; This short guide sets out some things you might want to know about what is involved in a property purchase conveyance.</p>
    </li>
<li><strong>The Sale and Purchase Agreement</strong>

<p>Every property purchase involves entering into a sale and purchase agreement with the current owner.&nbsp; The same <a href="http://s3-ap-southeast-2.amazonaws.com/adls-media/7487526/4002-Sale-Purchase-of-Real-Estate-Ninth-Edition-2012-3-Highlighted.pdf">form</a> of agreement, which was developed by the Auckland District Law Society and Real Estate Agents Institute of New Zealand, is used in virtually all property sales.&nbsp;</p>
<p>The agreement can be drafted to either include conditions or not.&nbsp; All conditions included in the agreement, for example finance, must be satisfied before you are under an obligation to complete the purchase.&nbsp; Conditions have deadlines, which if not met can lead to the agreement being cancelled.&nbsp; In most cases, a deposit is payable when the agreement goes unconditional.</p>
</li>

<li><strong>Your Loan and Mortgage</strong>

<p>Unless you are very fortunate, you will be taking out a loan to buy the property.&nbsp; The loan will be secured by a mortgage over the property.&nbsp;</p>
<p>As well as being your lawyer, we will also act for the mortgagee (usually a bank) as part of the transaction.&nbsp; The bank engages us to protect their interests in connection with the transaction.&nbsp; We do that by ensuring the mortgage is registered over the property title at the same time it is transferred to you.&nbsp; Most banks also ask us to complete their disclosure requirements under <a href="https://comcom.govt.nz/__data/assets/pdf_file/0023/91571/Consumer-credit-contracts-overview-Fact-sheet-Oct-2012.pdf">consumer protection law</a>.&nbsp;</p>
<p>The time we take to fulfil the bank’s requirements is taken into account in our fee estimate for property purchases.</p>
    </li>
    
<li><strong>KiwiSaver Withdrawal</strong>

<p>If you have KiwiSaver and would like to put all or some of those funds towards the purchase price, you will need to apply to your KiwiSaver provider.&nbsp; You can only use KiwiSaver funds to purchase a home that you intend to live in.&nbsp; The earlier the application is submitted, the better, as most providers take up to two weeks to process them.&nbsp;</p>
<p>KiwiSaver providers require a solicitor’s undertaking, which we will provide, that your KiwiSaver funds will only be used to go towards your deposit or to the purchase price on settlement.&nbsp; The funds cannot be used be for any other purpose before or after settlement, such as repaying a loan from a third party.</p>
    </li>
<li><strong>Trust Account</strong>

<p>We will use our <a href="https://www.lawsociety.org.nz/for-lawyers/regulatory-requirements/trust-account-management">trust account</a> to receive and pay funds on your behalf.&nbsp; This will include receiving the loan from the bank and your KiwiSaver withdrawal, if any, and paying the purchase price to the seller.</p>
<p>If we hold a surplus in our trust account following the payment of the purchase price, we will use that to pay our fee.&nbsp; Any proceeds remaining after payment of our invoice will be paid as you direct.</p>
    </li>
<li><strong>Landonline and Authority &amp; Instruction Form</strong>

<p>The transfer of the property title from the current owner to you is effected electronically using <a href="http://www.linz.govt.nz/land/landonline">Landonline</a>.&nbsp; To complete the transaction through Landonline, we need to have your written and signed authority to do so.&nbsp; That authority is provided via a form known as an <a href="http://www.linz.govt.nz/land/land-registration/prepare-and-submit-your-dealing/authority-instruction-ai">Authority &amp; Instruction Form</a>, which is an important document.&nbsp; It needs to be signed by you, witnessed, and backed up by a verified copy of your photo identification.</p>
    </li>
<li><strong>Tax Details</strong>

<p>Anybody who purchases a property must complete and sign a <a href="http://www.linz.govt.nz/land/land-registration/prepare-and-submit-your-dealing/property-tax-compliance-requirements">land transfer tax statement</a>.&nbsp; The property title cannot be transferred without it.&nbsp; If the property you are buying will not be your main home, you must provide your IRD number.&nbsp; An IRD number is always required where the property is to be held in a trust.</p>
    </li>
<li><strong>Signing Documents</strong>

<p>If you are in Auckland, we can meet at a location convenient to you to sign up the documents required to complete the purchase.&nbsp; This will include the Authority &amp; Instruction Form and loan documents.&nbsp; We will make other arrangements if you live outside Auckland.</p>
    </li>
<li><strong>Insurance</strong>

<p>As part of the bank’s requirements for advancing you a loan, it will want to know that the property will be adequately insured.&nbsp; This involves obtaining a certificate of currency from your insurer showing the bank as an interested party.&nbsp; The certificate needs to be provided to the bank along with the loan agreement in order to receive the loan funds.</p>
    </li>
<li><strong>Settlement Day</strong>

<p>The purchase will be completed on settlement day, which will be agreed in the sale and purchase agreement.&nbsp; We will do everything we can to complete settlement as early as possible, however, settlements are often delayed by things that are out of your and our hands.&nbsp; If we think there is a risk settlement may not go ahead as planned, we will let you know straight away.</p>
    </li>
    </ol>

    </div>
}


class Doc extends Component {
  render() {
    return (<section className="doc">
            <Grid>
            <Cell size={8} desktopOffset={2}>
            <h1 className="doc-title">BUYING A RESIDENTIAL PROPERTY</h1>

            <Text />
       <Disclaimer />
            </Cell>
            </Grid>

          </section>
    );
  }
}

export default Doc;
