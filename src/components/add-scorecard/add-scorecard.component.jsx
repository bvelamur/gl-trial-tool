import "./add-scorecard.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/scorecard/scorecard.actions";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddScorecard extends Component {
  constructor() {
    super();

    this.state = {
      kpi: "",
      onPar: "",
      abovePar: "",
      belowPar: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { kpi, onPar, abovePar, belowPar } = this.state;

    return (
      <div className="add-scorecard">
        <div className="content">
          <h2>Add scorecard</h2>
          <p>Provide KPI details</p>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-multiline-static"
              label="Performance Indicator"
              multiline
              rows={4}
              defaultValue="Enter description"
              variant="outlined"
              name="kpi"
              value={kpi}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Meets Expectations"
              multiline
              rows={4}
              defaultValue="Enter description"
              variant="outlined"
              name="onPar"
              value={onPar}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Exceeds Expectations"
              multiline
              rows={4}
              defaultValue="Enter description"
              variant="outlined"
              name="abovePar"
              value={abovePar}
              onChange={this.handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Below Expectations"
              multiline
              rows={4}
              defaultValue="Enter description"
              variant="outlined"
              name="belowPar"
              value={belowPar}
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.addItem(this.state)}
            >
              Add Scorecard
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(AddScorecard);
