import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({

  head: {
    backgroundColor: "#0F75BC",
    color: "#FDFEFE",
  },
  body: {
    fontSize: 14,
    color: "#5D6D7E"
  },
}))(TableCell);

function createData(turno, glasgow, ramsay, visual_scale, risk_falls) {
    return {turno, glasgow, ramsay, visual_scale, risk_falls};
}
const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const rows = [
  createData('Matutino', 159, 6.0, 24, 4.0),
  createData('Vespertino', 237, 9.0, 37, 4.3),
  createData('Nocturno', 262, 16.0, 24, 6.0),
];

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  export default function FunctionalPatternsTable() {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Turno</TableCell>
            <TableCell align="right">Galsgow</TableCell>
            <TableCell align="right">Ramsay</TableCell>
            <TableCell align="right">Esacala visual Análoga</TableCell>
            <TableCell align="right">Riesgo de caidas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.turno}>
              <TableCell component="th" scope="row">
                {row.turno}
              </TableCell>
              <TableCell align="right">{row.glasgow}</TableCell>
              <TableCell align="right">{row.ramsay}</TableCell>
              <TableCell align="right">{row.visual_scale}</TableCell>
              <TableCell align="right">{row.risk_falls}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}