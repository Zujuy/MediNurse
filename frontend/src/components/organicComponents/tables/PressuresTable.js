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

function createData(hour, blood_pressure, mean_arterial_pressure, central_air_pressure) {
  return { hour, blood_pressure, mean_arterial_pressure, central_air_pressure};
}
const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const rows = [
  createData('2', 159, 6.0, 24, 4.0),
  createData('4', 237, 9.0, 37, 4.3),
  createData('6', 262, 16.0, 24, 6.0),
  createData('8', 305, 3.7, 67, 4.3),
  createData('10', 356, 16.0, 49, 3.9),
  createData('12', 356, 16.0, 49, 3.9),
  createData('14', 356, 16.0, 49, 3.9),
  createData('16', 356, 16.0, 49, 3.9),
  createData('18', 356, 16.0, 49, 3.9),
  createData('20', ),
  createData('22', ),
  createData('24', ),
];

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  export default function PressureTable() {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hora</TableCell>
            <TableCell align="right">Presión arterial</TableCell>
            <TableCell align="right">Presión arterial media</TableCell>
            <TableCell align="right">Presión venosa central</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell align="right">{row.blood_pressure}</TableCell>
              <TableCell align="right">{row.mean_arterial_pressure}</TableCell>
              <TableCell align="right">{row.central_air_pressure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}