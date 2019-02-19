import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const TimeStamp = props => {
  return (
    <div className="timestamp">
      {moment(props.timestamp, "MMMM-Do-YYYY").fromNow()}
    </div>
  );
};

TimeStamp.propTypes = {
  timestamp: PropTypes.string.isRequired
};

export default TimeStamp;
