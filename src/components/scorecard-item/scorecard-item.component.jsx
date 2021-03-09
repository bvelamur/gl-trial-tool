import "./scorecard-item.styles.scss";
import { Card, Typography, CardContent, Radio } from "@material-ui/core";
import React, { Component } from "react";

class ScorecardItem extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: "",
    };
  }

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { kpi, onPar, abovePar, belowPar } = this.props.item;

    return (
      <div className="scorecard-bbox">
        <div className="scorecard-item">
          <div className="header">
            <span className="header-item">Performance Index</span>
            <span className="description">{kpi}</span>
          </div>
          <div className="header">
            <span className="header-item">
              <input type="radio" name="performance" value="onPar" />
              <label htmlFor="onPar">Meets Expectations</label>{" "}
            </span>
            <span className="description">{onPar}</span>
          </div>
          <div className="header">
            <span className="header-item">
              <input type="radio" name="performance" value="abovePar" />
              <label htmlFor="abovePar">Exceeds Expectations</label>
            </span>
            <span className="description">{abovePar}</span>
          </div>
          <div className="header">
            <span className="header-item">
              <input type="radio" name="performance" value="belowPar" />
              <label htmlFor="belowPar">Exceeds Expectations</label>
            </span>
            <span className="description">{belowPar}</span>
          </div>
        </div>
        <Card>
          <CardContent>
            <Typography variant="h5">Performance Index</Typography>
            <Typography>{kpi}</Typography>
            <Radio
              checked={this.state.selectedValue === "onPar"}
              onChange={this.handleChange}
              value="onPar"
              name="performance"
              label="Performance"
            />
            <Radio
              checked={this.state.selectedValue === "abovePar"}
              onChange={this.handleChange}
              value="abovePar"
              name="performance"
            />
            <Radio
              checked={this.state.selectedValue === "belowPar"}
              onChange={this.handleChange}
              value="belowPar"
              name="performance"
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ScorecardItem;
