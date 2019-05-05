import React, { Component } from "react";
import {Cell, Grid, Button,  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn }  from "react-md";


const FeeTable = (props) => {
return   <DataTable plain className="fee-table">
{ props.data.title &&  <TableHeader><TableRow><TableColumn className="table-title" colSpan={props.data.headers.length}>{ props.data.title }</TableColumn></TableRow></TableHeader> }
    <TableHeader>
      <TableRow>
      { props.data.headers.map((header, i) => <TableColumn key={i}>{ header }</TableColumn> ) }
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.data.rows.map((row, i) => (
        <TableRow key={i}>
        { row.map((cell, i) => <TableColumn key={i}>{ cell }</TableColumn>) }
        </TableRow>
      ))}
    </TableBody>
  </DataTable>
}


export default FeeTable;