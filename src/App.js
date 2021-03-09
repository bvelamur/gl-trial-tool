import React from "react";
import { Component } from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import HeaderBar from "./pages/header/header.page";
import SignInPage from "./pages/sign-in-and-sign-up/sign-in.page";
import SignUpPage from "./pages/sign-in-and-sign-up/sign-up.page";
import ObjectivesPage from './pages/objectives/objectives.page'
import TeamPage from './pages/team/team.page'
import ScorecardPage from './pages/scorecard/scorecard.page'

class App extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderBar />
        </Grid>
        <Grid item container>
            <Switch>
              <Route exact path="/" component={SignInPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route path="/objectives" component={ObjectivesPage} />
              <Route path="/team" component={TeamPage} />
              <Route path="/scorecard" component={ScorecardPage} />
            </Switch>
        </Grid>
      </Grid>
    );
  }
}

export default App;
