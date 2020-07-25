import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./Tables_component.module.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function StateTable({ fullData }) {
  const classes = useStyles();
  if (!fullData[0]) return <h1 className="tc red">LOADING</h1>;
  return (
    <Grid container justify={"center"} item={true} className={styles.bigbang}>
      <h1>StateWise Data</h1>
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          className={classes.table}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>States</StyledTableCell>
              <StyledTableCell align="right">Confirmed</StyledTableCell>
              <StyledTableCell align="right">Active</StyledTableCell>
              <StyledTableCell align="right">Recovered</StyledTableCell>
              <StyledTableCell align="right">Deaths</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fullData.map((user, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {fullData[i].State ===
                  "Dadra and Nagar Haveli and Daman and Diu"
                    ? (fullData[i].state = "Dadar Nagar Haveli")
                    : fullData[i].state === "Andaman and Nicobar Islands"
                    ? (fullData[i].state = "Andaman & Nicobar")
                    : fullData[i].state}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {fullData[i].confirmed}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {fullData[i].active}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {fullData[i].recovered}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {fullData[i].deaths}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
