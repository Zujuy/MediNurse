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

function createData(turno, solution_name, solutions_time, medicine_name, medicines_time, food_name, intake_time, drug_name, presentation, via, dose, presence, schedule) {
    return {turno, solution_name, solutions_time, medicine_name, medicines_time, food_name, intake_time, drug_name, presentation, via, dose, presence, schedule};
}
const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const rows = [
  createData('Matutino', "Noligranilina", "13:00", "Paracetamol", "18:00", "Licuado en cuatro toma de 1000 ml c/u", "<12:00>", "Morfina", "Intravenosa", "10ml", "cada 12 hrs", "12 y 18"),
  createData('Vespertino',),
  createData('Nocturno',  ),
];

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  export default function EntryTable() {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Turno</TableCell>
            <TableCell align="right">Nombre de la solución</TableCell>
            <TableCell align="right">Hora de administración de la solución</TableCell>
            <TableCell align="right">Nombre del medicamento</TableCell>
            <TableCell align="right">Hora de la administración del medicamento</TableCell>
            <TableCell align="right">Comida administrada</TableCell>
            <TableCell align="right">Hora de ingesta</TableCell>
            <TableCell align="right">Nombre del medicamento prescrito</TableCell>
            <TableCell align="right">Vía</TableCell>
            <TableCell align="right">Dosis</TableCell>
            <TableCell align="right">Presencia</TableCell>
            <TableCell align="right">Horarios</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.turno}>
              <TableCell component="th" scope="row">
                {row.turno}
              </TableCell>
              <TableCell align="right">{row.solution_name}</TableCell>
              <TableCell align="right">{row.solutions_time}</TableCell>
              <TableCell align="right">{row.medicine_name}</TableCell>
              <TableCell align="right">{row.medicines_time}</TableCell>
              <TableCell align="right">{row.food_name}</TableCell>
              <TableCell align="right">{row.intake_time}</TableCell>
              <TableCell align="right">{row.drug_name}</TableCell>
              <TableCell align="right">{row.presentation}</TableCell>
              <TableCell align="right">{row.via}</TableCell>
              <TableCell align="right">{row.dose}</TableCell>
              <TableCell align="right">{row.presence}</TableCell>
              <TableCell align="right">{row.schedule}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}