import "./scorecard-item.styles.scss";

const ScorecardItem = ({uniqueLabel, item}) => {
  const { kpi, onPar, abovePar, belowPar } = item;
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
            <input
              type="radio"
              name="performance"
              value="abovePar"
            />
            <label htmlFor="abovePar">Exceeds Expectations</label>
          </span>
          <span className="description">{abovePar}</span>
        </div>
        <div className="header">
          <span className="header-item">
            <input
              type="radio"
              name="performance"
              value="belowPar"
            />
            <label htmlFor="belowPar">Exceeds Expectations</label>
          </span>
          <span className="description">{belowPar}</span>
        </div>
      </div>
    </div>
  );
};

export default ScorecardItem;
