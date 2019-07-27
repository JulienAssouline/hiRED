import React from "react";
import { Link } from "react-router-dom";

import { Query } from "react-apollo";
import { testConnection } from "../../graphql-queries/queries";

import { Button } from "@material-ui/core";

import LoginForm from "../login/LoginForm";

import { makeStyles } from "@material-ui/core/styles";

const useStyles= makeStyles({
  root: {

  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    // alignContent: 'center',
    // justifyContent: 'center',
    // margin: 20
    // marginLeft: '5%',
    // marginRight: '25%',
    marginTop: '5%'
  },
  leftColumn: {
    marginLeft: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'red',
    width: '40%'
  },
  rightColumn: {
    marginRight: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'grey',
    width: '60%'
  },
})

const Landing = () => {


  const classes = useStyles()

  return (
    <Query query={testConnection}>
      {({ loading, err, data }) => {
        if (loading) return <div>loading...</div>;
        if (err) return <div>error!</div>;

        return (
          <div className="App">
            <div className={classes.container}>
              <div className={classes.leftColumn}>
                <h1>Welecome to hiRED!</h1>
                <p>This is some text so is this</p>
              </div>
              <div className={classes.rightColumn}>
                <h1 >Test</h1>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Landing;
