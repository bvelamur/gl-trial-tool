import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ListItemLink from '../../components/list-item-link/list-item-link.component'
import React from "react";

const HeaderBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Gladiator Labs Pilot Tool</Typography>
            <ListItemLink to="/" primary="Login"/>
            <ListItemLink to="/objectives" primary="Objectives"/>
            <ListItemLink to="/work-scope" primary="Work Scope"/>
            <ListItemLink to="/team" primary="Team"/>
            <ListItemLink to="/scorecard" primary="Scorecard"/>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
