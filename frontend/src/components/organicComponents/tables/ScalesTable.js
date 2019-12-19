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

function createData(turno, ph, glucose, ketones, proteins, blood, density ) {
    return {turno, ph, glucose, ketones, proteins, blood, density};
}
const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const rows = [
  createData('Matutino', 5.5, "Neg", "++",),
  createData('Vespertino', 7, "Neg", "Neg", 4.3),
  createData('Nocturno', 6, ),
];

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  export default function ScalesTable() {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Turno</TableCell>
            <TableCell align="right">pH</TableCell>
            <TableCell align="right">Glucosa</TableCell>
            <TableCell align="right">Cetonas</TableCell>
            <TableCell align="right">Proteinas</TableCell>
            <TableCell align="right">Sangre</TableCell>
            <TableCell align="right">Densidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.turno}>
              <TableCell component="th" scope="row">
                {row.turno}
              </TableCell>
              <TableCell align="right">{row.ph}</TableCell>
              <TableCell align="right">{row.glucose}</TableCell>
              <TableCell align="right">{row.ketones}</TableCell>
              <TableCell align="right">{row.proteins}</TableCell>
              <TableCell align="right">{row.blood}</TableCell>
              <TableCell align="right">{row.density}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}