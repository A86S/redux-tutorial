import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Redux Tutorial </h1>
          <span>Age : {this.props.age}</span>
          <br/>
          <br/>
          <span><button  className="ageUp" onClick={this.props.onAgeUp}>Age Up</button></span>
          { ` | `}
          <span><button  className="ageDown" onClick={this.props.onAgeDown}>Age Down</button></span>
          <hr/>
          <div>
            History
          </div>
          <div>
              {
                this.props.history.map(item => (
                  <li 
                    className="historyItem"  
                    key={item.id}
                    onClick={ () => this.props.onDeleteItem(item.id)}
                    >
                    {item.age}
                  </li>
                ))
              }
          </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     age : state.age,
     history : state.history
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp : () => dispatch({type: 'AGE_UP', value : 1}),
    onAgeDown : () => dispatch({type: 'AGE_DOWN', value : 1}),
    onDeleteItem : (id) => dispatch({type: 'DEL_ITEM', id : id})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
