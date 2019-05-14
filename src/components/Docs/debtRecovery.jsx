import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";

import {Cell, Grid, Button }  from "react-md";

const Text = () => {
    return <div>

<ol>
<li><strong>Summary of Fee Estimates</strong>

<p>Our debt recovery services, with each relevant fee estimate (excluding GST and disbursements), are summarised as follows:</p>
<p><em>For debts owed by individuals:</em></p>
<ul>
<li>Formal demand - $250</li>
<li>Summary judgment application - $1,800</li>
<li>Order for summary judgment - $950</li>
<li>Bankruptcy notice - $900</li>
<li>Creditor’s application - $1,800</li>
<li>Order for adjudication - $750</li>
</ul>
<p><em>For debts owed by companies:</em></p>
<ul>
<li>Formal demand - $250</li>
<li>Statutory demand - $350</li>
<li>Liquidation application - $1,800</li>
<li>Order for liquidation - $750</li>
</ul>
    </li>
<li><strong>Summary of Disbursements</strong>

<p>The following table summarises the common disbursements (including GST) that you may need to pay in addition to our fee:</p>
<table className="md-data-table md-data-table--plain md-data-table--full-width">
<tbody className="md-table-body">
<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p><em>Disbursement</em></p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p><em>District Court</em></p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p><em>High Court</em></p>
</td>
</tr>


<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Filing statement of claim and summary judgment application</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$450</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$1,350</p>
</td>
</tr>
<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Service fee (approximate) – applies to service of summary judgment application, bankruptcy notice, creditor’s application for adjudication, statutory demand, liquidation application, and any other steps requiring service of documents</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$150</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$150</p>
</td>
    </tr>

<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Trace fee (approximate) – for debtors whose whereabouts are unknown</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$300</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$300</p>
</td>
</tr>

<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Sealing order for summary judgment</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$50</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$50</p>
</td>
</tr>
<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Issuing certificate of judgment</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$50</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>N/A</p>
</td>
</tr>
<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Filing request for issue of bankruptcy notice</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>N/A</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$200</p>
</td>
</tr>

<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Filing creditor’s application for adjudication</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>N/A</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$500</p>
</td>
</tr>
<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Sealing order for bankruptcy</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>N/A</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$50</p>
</td>
</tr>
<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Filing application to put company into liquidation</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>N/A</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$540</p>
</td>
</tr>
<tr className="md-table-row">
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>Sealing order for liquidation</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>N/A</p>
</td>
<td className="md-table-column md-text-left md-table-column--plain md-table-column--adjusted md-text">
<p>$50</p>
</td>
</tr>
</tbody>
</table>
    </li>

<li><strong>Debt Recovery Process – Step by Step</strong>

<p>The following sections set out our suggested step-by-step process for recovering your debt on which our fee estimates are based. The process is different depending on whether your debtor is an individual or a company.</p>
 </li>
<li><strong>Step One – Formal Demand - $250</strong>

<p>Whether the debtor is a company or an individual, we recommend starting with a formal, written demand.</p>
<p>Our fee includes the following attendances:</p>
<ul>
<li>Reviewing documents evidencing the debt e.g. loan agreement, correspondence, and account statement</li>
<li>Preparing a written demand for your review</li>
<li>Finalising demand and sending to debtor</li>
</ul>
<p>If the debtor does not pay the debt by the deadline set out in the formal demand, move to Step Two. Disbursements to this point include our office disbursement of $50.</p>
<p>If the parties wish to settle the debt, our fee for preparing and arranging execution of a settlement agreement is $800.</p></li>



<li><strong>Debts Owed by Individuals</strong>

<p>These steps in the process relate to debts owed by individuals.</p>
<ul>
<li><strong>Step Two – Summary Judgment application - $1,800</strong></li>
</ul>
<p>We recommend filing and serving summary judgment proceedings in the District Court (for debts under $350,000) or High Court (for debts $350,000 and over) if the individual does not satisfy the formal demand.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing statement of claim, summary judgment application, notice of proceeding, list of documents, and affidavit in support</li>
<li>Arranging swearing of affidavit in support of summary judgment Application</li>
<li>Finalising documents for filing with the relevant Court</li>
<li>Arranging personal service of documents on the debtor, if possible</li>
<li>If an order for deemed or substituted service is required, our additional fee is $1,000 for preparing the necessary documents and obtaining the required order</li>
<li>Preparing, arranging swearing of, and filing affidavit of service</li>
</ul>
<p>If the debtor does not oppose the summary judgment application, move to Step Three. &nbsp;Disbursements at this stage will include Court filing fees, the service agent’s fee, and our office disbursement of $50.</p>
<ul>
<li><strong>Step Three – Order for Summary Judgment - $950</strong></li>
</ul>
<p>On the date allocated for the first call of the summary judgment application, we recommend seeking an order for summary judgment.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing a memorandum of indebtedness for the hearing</li>
<li>Preparing the draft form of order for summary judgment</li>
<li>Appearing at, or arranging for an agent to appear at, the first call of the summary judgment application</li>
<li>Sealing order for summary judgment</li>
</ul>
<p>Disbursements at this step will include Court filing fees, agency fees (if an agent is required for an out-of-town Court appearance), and our office disbursement of $50.</p>
<p>At this point, we recommend considering sending a copy of the sealed order to the debtor in the form of a further formal demand. This would involve repeating Step One.</p>
<p>If the Court order does not result in repayment, move to Individual Step Four.</p>
<ul>
<li><strong>Step Four – Bankruptcy Notice - $900</strong></li>
</ul>
<p>We recommend serving a bankruptcy notice if the individual debtor does not pay the debt in accordance with the Court order.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing and filing certificate of judgment (if required)</li>
<li>Preparing request for issue of a bankruptcy notice and bankruptcy notice</li>
<li>Filing request and bankruptcy notice with relevant High Court registry</li>
<li>Arranging service of bankruptcy notice and reporting to you following expiry</li>
<li>Preparing, arranging swearing of, and filing affidavit of service</li>
</ul>
<p>Disbursements at this step will include Court filing fees, service fees, and our office disbursement of $50.</p>
<p>If the bankruptcy notice expires unremedied, move to Individual Step Five.</p>
<ul>
<li><strong>Step Five – Creditor’s Application - $1,800</strong></li>
</ul>
<p>We recommend applying for an adjudication order against the debtor as the next step.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing creditor’s application for adjudication order, affidavit in support, and summons to debtor</li>
<li>Arranging swearing of affidavit in support</li>
<li>Filing documents with the High Court</li>
<li>Arranging service of documents, and preparing, arranging swearing of, and filing affidavit of service</li>
</ul>
<p>Disbursements at this step will include Court filing fees, service fees, and our office disbursement of $50.</p>
<p>If the individual does not oppose the creditor’s application, move to Individual Step Six.</p>
<ul>
<li><strong>Step Six – Order for Adjudication - $750</strong></li>
</ul>
<p>On the date allocated for the first call of the creditor’s application, we recommend seeking an order for adjudication.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing the draft form of order for adjudication</li>
<li>Appearing at, or arranging for an agent to appear at, the first call of the creditor’s application</li>
<li>Sealing order for adjudication</li>
</ul>
<p>Disbursements at this step will include Court filing fees, agency fees (if an agent is required for an out-of-town Court appearance), and our office disbursement of $50.</p>
<p>At this point, the Official Assignee will be responsible for repaying the individual’s debt out of the assets available in his or her estate, to the extent those assets are able to repay the debt. The creditor will submit a proof of debt in the bankruptcy when prompted by the Official Assignee. No further recovery action may be taken against the individual.</p>
    </li>


<li><strong>Debts Owed by Companies</strong>

<p>These steps in the process relate to debts owed by companies governed by the Companies Act 1993.</p>
<ul>
<li><strong>Step Two – Statutory Demand - $350</strong></li>
</ul>
<p>If the debtor is a company, and the debt is undisputed, we recommend serving a statutory demand under the Companies Act 1993.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing statutory demand for your review</li>
<li>Finalising statutory demand for service</li>
<li>Instructing service agent (if required)</li>
<li>Reporting to you following service and expiry of the statutory demand</li>
</ul>
<p>If the statutory demand expires unremedied, move to Company Step Three. Disbursements at this stage may include the service agent’s fee for serving the statutory demand. Such fees are commonly between $100 and $150.</p>
<p>Sometimes, a debtor company may apply to the High Court to set aside a statutory demand. If this occurs, our fees to respond to that application are charged in accordance with our hourly rates.</p>
<ul>
<li><strong>Step Three – Liquidation Application - $1,800</strong></li>
</ul>
<p>On expiry of the statutory demand, we recommend filing, serving, and advertising a liquidation application.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing the statement of claim, notice of proceeding, and affidavit in support</li>
<li>Arranging swearing of affidavit in support and filing documents with the appropriate High Court registry</li>
<li>Arranging service of liquidation proceedings and advertisement of liquidation application</li>
<li>Preparing, arranging swearing of, and filing affidavit of service and proof of advertising</li>
</ul>
<p>If the company does not oppose the liquidation application, move to Company Step Four. Disbursements at this stage will include Court filing fees, service agent fees, the cost of advertising, and our office disbursement of $50.</p>
<ul>
<li><strong>Step Four – Order for Liquidation - $750</strong></li>
</ul>
<p>On the date allocated for the first call of the liquidation application, we recommend seeking an order for liquidation.</p>
<p>Our fee includes:</p>
<ul>
<li>Preparing the draft form of order for liquidation</li>
<li>Preparing and arranging signing of liquidator’s consent (if required)</li>
<li>Appearing at, or arranging for an agent to appear at, the first call of the liquidation application</li>
<li>Sealing order for liquidation</li>
</ul>
<p>Disbursements at this step will include Court filing fees, agency fees (if an agent is required for an out-of-town Court appearance), and our office disbursement of $50.</p>
<p>At this point, the appointed liquidator will be responsible for satisfying the company’s debt out of the assets available in liquidation, to the extent those assets are able to repay the debt. The creditor should submit a proof of debt in the liquidation when prompted by the liquidator. No further recovery action may be taken against the company.</p>
    </li>

<li><strong>Court Filing and Other Fees</strong>

<p>The filing fees payable in the District Court are set out <a href="http://www.legislation.govt.nz/regulation/public/2009/0318/latest/DLM2438104.html">here. </a>The High Court’s filing fees are set out <a href="http://www.legislation.govt.nz/regulation/public/2013/0226/latest/DLM5196180.html">here.</a></p>

    </li>
    </ol>
    </div>
}


class Doc extends Component {
  render() {
    return (<section className="doc">
            <Grid>
            <Cell size={8} desktopOffset={2}>
            <h1 className="doc-title">Debt Recovery Services Guide</h1>

            <Text />

            </Cell>
            </Grid>

          </section>
    );
  }
}

export default Doc;
