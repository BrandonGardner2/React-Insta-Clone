import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

const TimeStampComponent = styled.div`
  margin: 5px 0 15px 0;
  font-size: 0.9rem;
  color: gray;
`;

const TimeStamp = props => {
  return (
    <TimeStampComponent>
      {moment(props.timestamp, "MMMM-Do-YYYY").fromNow()}
    </TimeStampComponent>
  );
};

TimeStamp.propTypes = {
  timestamp: PropTypes.string.isRequired
};

export default TimeStamp;
