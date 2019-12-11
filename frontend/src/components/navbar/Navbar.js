import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    marginTop: 0,
  },
  img: {
    marginRight: theme.spacing(3),
    width: "50px",
    padding_top: "10px",
    padding_bottom: "10px",
    padding_right: "10px",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src="../../../logomedinurse.png" aria-label="menu">
          </img>
          <Typography variant="h6" className={classes.title}>
            MediNurse
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
// const Navbar = () => (

//   <StyledNavbar>
//     <h1>MediNurse</h1>
//     <ul>
//       <li>
//         <Link to="/signup">Signup</Link>
//       </li>
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//       <li>
//         <Link to="/log out">Log out</Link>
//       </li>
//     </ul>
//   </StyledNavbar>
// );
