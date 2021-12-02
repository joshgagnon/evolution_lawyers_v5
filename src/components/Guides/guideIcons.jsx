import React from 'react'
import {Link} from 'gatsby'
import Grid from "react-md/lib/Grids";
import Cell from "react-md/lib/Grids/Cell";
import './GuideIcons.scss';

const buttonClass = 'md-btn md-btn--flat md-btn--text md-pointer--hover md-text md-inline-block md-cell--right major-button';


export const ConveyancingIcons = (props) => {
    return <Cell size={8} desktopOffset={2} className="guide-button-row">

        <Link className={buttonClass} to="/docs/buying">
            BUYING
        </Link>

        <Link className={buttonClass} to="/docs/selling">
            SELLING
        </Link>

        <Link className={buttonClass} to="/docs/refinancing">
            REFINANCING
        </Link>

    </Cell>
}


export const DebtRecoveryIcons = (props) => {
    return <Cell size={8} desktopOffset={2} className="guide-button-row">
        <Link className={buttonClass} to="/docs/debtrecovery">
            DEBT RECOVERY &amp; DISBURSEMENTS
        </Link>


    </Cell>
}

const GuideIcons = (props) => (
    <section className="guide-icons">
        <Grid>
            <Cell size={10} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}>
                <div className="sub-title-section" style={{textAlign: 'center'}}>
                    <h1 className="line">Residential Conveyancing</h1>
                    <div className="separator"/>
                </div>
            </Cell>

            <ConveyancingIcons/>


            {/*<Cell size={10} tabletSize={8} desktopOffset={1} phoneOffset={0} tabletOffset={0}>
                <div className="sub-title-section" style={{textAlign: 'center'}}>
                    <h1 className="line">Debt Recovery</h1>
                    <div className="separator"/>

                </div>
            </Cell>

            <DebtRecoveryIcons/>*/}

        </Grid>
    </section>
);


export default GuideIcons;