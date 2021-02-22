import React from "react";
import { Component } from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import HeaderBar from "./pages/header/header.page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import ObjectivesPage from './pages/objectives/objectives.page'
import WorkScopePage from './pages/work-scope/work-scope.page'
import TeamPage from './pages/team/team.page'
import ScorecardPage from './pages/scorecard/scorecard.page'

class App extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderBar />
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Switch>
              <Route exact path="/" component={SignInAndSignUpPage} />
              <Route path="/objectives" component={ObjectivesPage} />
              <Route path="/work-scope" component={WorkScopePage} />
              <Route path="/team" component={TeamPage} />
              <Route path="/scorecard" component={ScorecardPage} />
            </Switch>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
