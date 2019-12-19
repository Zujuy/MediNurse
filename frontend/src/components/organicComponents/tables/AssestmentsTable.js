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

function createData(turno, assessment, diagnostic, interventions, response, observations) {
    return {turno, assessment, diagnostic, interventions, response, observations};
}
const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const rows = [
  createData('Matutino', "Pupílas reactivas a la luz, Hiperglucemia, diurosis clara", "Riesgo de infección R/C Procedimiento invasivo", "Aspiración de secreciones, aseo de cavidad oral", "Se estabilizan niveles de glucemia, sin ninguna reacción post transfución", "Recibe visita de familiar"),
  createData('Vespertino',),
  createData('Nocturno',  ),
];

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  export default function AssestmentsTable() {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Turno</TableCell>
            <TableCell align="right">Valoraciones</TableCell>
            <TableCell align="right">Diagnóstico</TableCell>
            <TableCell align="right">Intervenciones</TableCell>
            <TableCell align="right">Respuesta-Evolución</TableCell>
            <TableCell align="right">Observaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.turno}>
              <TableCell component="th" scope="row">
                {row.turno}
              </TableCell>
              <TableCell align="right">{row.assessment}</TableCell>
              <TableCell align="right">{row.diagnostic}</TableCell>
              <TableCell align="right">{row.interventions}</TableCell>
              <TableCell align="right">{row.response}</TableCell>
              <TableCell align="right">{row.observations}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}