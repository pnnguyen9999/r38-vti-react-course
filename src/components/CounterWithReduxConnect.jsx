import React from "react";
import { connect } from "react-redux";
import COUNTER from "../redux/actions/counter";

function CounterWithReduxConnect(props) {
  return (
    <div>
      <div>Counter value: {props.count}</div>
      <div>Message value: {props.message}</div>
      <button onClick={() => props.tang()}>Tang</button>
      <button onClick={() => props.giam()}>Giam</button>
      <button onClick={() => props.updateMessage("hellooo")}>
        Update message
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    message: state.counter.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tang: () => dispatch({ type: COUNTER.INCREMENT }),
    giam: () => dispatch({ type: COUNTER.DECREMENT }),
    updateMessage: (mes) =>
      dispatch({
        type: COUNTER.UPDATE_MESSAGE,
        messageValue: mes,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterWithReduxConnect);
