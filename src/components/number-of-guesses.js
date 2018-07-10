import React from "react";
import { connect } from "react-redux";


function NumberOfGuesses(props) {
  return (
    <div>
      <p>
        <span className="guess-word">Guess #</span>
        <span className={"guess-counter"}>{props.choiceCounter}</span>
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  choiceCounter: state.choiceCounter
});

export default connect(mapStateToProps)(NumberOfGuesses);