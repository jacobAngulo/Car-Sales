import React from "react";
import { removeFeature } from "../actions";
import { connect } from "react-redux";

const AddedFeature = props => {
  const handelRemoveFeature = () => {
    props.removeFeature(props.feature);
  };

  return (
    <li onClick={handelRemoveFeature}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeFeature: removeFeature }
)(AddedFeature);
