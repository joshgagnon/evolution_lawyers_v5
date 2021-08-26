import React, {Component} from "react";
import "./Fees.scss";
import {Cell, DataTable, Grid, TableBody, TableColumn, TableRow} from "react-md";

class Fees extends Component {
    render() {
        return (<div>
                <section className="fees">
                    <Grid>


                        <Cell size={6} desktopOffset={3}>

                            <div className="sub-title-section"><h2 className="line"> Standard Hourly Rates</h2></div>
                            <p className="mid-para">Our services are charged by the hour. The applicable hourly rate
                                depends on what we are doing and who needs to do it. We have three categories:</p>
                            <DataTable plain className="rates-table">
                                <TableBody>

                                    <TableRow>
                                        <TableColumn className={'heading'}>
                                            <span className={"main"}>A - Core</span>
                                            <span className={"sub"}>$385 per hour</span>
                                        </TableColumn>
                                        <TableColumn>
                                            For services that require a lawyer experienced in the relevant area of law.
                                        </TableColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableColumn className={'heading'}>
                                            <span className={"main"}>B – Related</span>
                                            <span className={"sub"}>$275 per hour</span>
                                        </TableColumn>
                                        <TableColumn>
                                            For services that could be provided by a junior lawyer or legal executive.
                                        </TableColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableColumn className={'heading'}>
                                            <span className={"main"}>C - Incidental</span>
                                            <span className={"sub"}>$165 per hour</span>
                                        </TableColumn>
                                        <TableColumn>
                                            For services that could be performed by a competent administrator supervised
                                            by a lawyer.
                                        </TableColumn>
                                    </TableRow>
                                </TableBody>
                            </DataTable>


                        </Cell>

                    </Grid>
                </section>

            </div>
        );
    }
}

export default Fees;
