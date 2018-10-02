import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './actions/action';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Redux Tutorial (Redux thunk) </h1>
        <div className='col'>
          <div>
            <span>Number 1</span>
            <input type="text" ref={num1 => this.num1 = num1} defaultValue={this.props.num1}/>
          </div>
        </div>
        <div className='col'>
          <div>
            <span>Number 2</span>
            <input type="text" ref={num2 => this.num2 = num2} defaultValue={this.props.num2}/>
          </div>
        </div>
        <div className='row'>
          <div>
            <span>Result : { this.props.isLoading ? 'Loading ...' : this.props.result} </span>
          </div>
        </div>
        <hr />
        <span>
          <button onClick={ () => this.props.addition(this.num1.value, this.num2.value)}>Addition</button>
        </span>
        <span>
          <button onClick={ () => this.props.substraction(this.num1.value, this.num2.value)}>Substration</button>
        </span>

      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    num1 : state.num1,
    num2: state.num2,
    result : state.result,
    isLoading : state.isLoading
  }
};

const mapDispathcToProps = (dispatch) => {
  return {
        addition: (num1, num2) => dispatch(actionCreator.actionAddition(num1, num2)),
        substraction: (num1, num2) => dispatch(actionCreator.actionSubstration(num1, num2))
    }
};

export default connect(mapsStateToProps, mapDispathcToProps)(App);
