import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Message from "@material-ui/icons/Message";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: 'white',
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  }
}));

export default function TopNavLoggedIn(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button style = {{color: "white", fontSize: 20, fontWeight: "bold"}} href='/'>
              hiRED
            </Button>
          </Typography>

          <Button className={classes.menuButton} href='/chatbot' variant="contained">
            <Message />
            Message
          </Button>
          <Button  className={classes.menuButton} href='/redbook' variant="contained">
            <PermContactCalendar />
            RedBook
          </Button>

          <Button className={classes.menuButton} href='/Profile' variant="contained">
            <AccountCircle />
            Profile
          </Button>

          <Button className={classes.menuButton} href='/mentors' variant="contained">
              <FontAwesomeIcon icon={faGraduationCap} />
              Mentors
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
