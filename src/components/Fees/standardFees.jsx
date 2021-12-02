import React, {Component} from "react";
import "./Fees.scss";
import {Cell, DataTable, Grid, TableBody, TableColumn, TableHeader, TableRow} from "react-md";

class Fees extends Component {
    render() {
        return (<div>
                <section className="fees">
                    <Grid>
                        <Cell size={8} desktopOffset={2}>

                            <div className="sub-title-section"><h2 className="line"> Standard Hourly Rates</h2></div>
                            <p className="mid-para">Our services are charged by the hour. The applicable hourly rate
                                depends on what we are doing and who needs to do it. We have three categories:</p>
                            <DataTable plain className="rates-table">
                                <TableHeader>
                                    <TableRow>
                                        <TableColumn>CATEGORY</TableColumn>

                                        <TableColumn>FOR</TableColumn>
                                        <TableColumn>APPLICABLE ATTENDANCES</TableColumn>
                                        <TableColumn>RATE</TableColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableColumn>A</TableColumn>
                                        <TableColumn>
                                            Directors
                                            <br/>
                                            Senior Lawyers
                                        </TableColumn>
                                        <TableColumn>Attendances that require a director of Evolution Lawyers or a
                                            lawyer with at least ten years’ experience</TableColumn>
                                        <TableColumn>$400 excluding GST
                                        </TableColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableColumn>B</TableColumn>
                                        <TableColumn>Intermediate Lawyers
                                            <br/>
                                            Senior Legal Executives</TableColumn>
                                        <TableColumn>Attendances that require an intermediate lawyer with at least five years’ experience or a senior legal executive with at least ten years’ experience</TableColumn>
                                        <TableColumn>$300 excluding GST

                                        </TableColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableColumn>C</TableColumn>
                                        <TableColumn>Junior Lawyers
<br/>
                                            Intermediate Legal Executives</TableColumn>
                                        <TableColumn>Attendances that require a junior lawyer with up to five years’ experience or an intermediate legal executive with at least five years’ experience</TableColumn>
                                        <TableColumn>$200 excluding GST

                                        </TableColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableColumn>D</TableColumn>
                                        <TableColumn>Junior Legal Executives
<br/>
                                            Senior Administrators
<br/>
                                            Law Graduates</TableColumn>
                                        <TableColumn>Attendances that require a junior legal executive with up to five years’ experience, a senior legal administrator with at least 10 years’ experience, or an author with a Bachelor of Laws (but without a practising certificate)

                                        </TableColumn>
                                        <TableColumn>$100 excluding GST

                                        </TableColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableColumn>E</TableColumn>
                                        <TableColumn>
                                            Junior Administrators
<br/>
                                            Law Clerks</TableColumn>
                                        <TableColumn>Attendances that require a legal administrator with up to five years’ experience or an author that is currently studying to obtain a Bachelor of Laws

                                        </TableColumn>
                                        <TableColumn>$50 excluding GST

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
