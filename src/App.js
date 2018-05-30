import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

	constructor(props){
		super(props);
		console.log(this.props);
	}

	componentDidUpdate(){
		console.log(this.props);
	}

  render() {
    return (
			  <div className = "equal-margin">
				    <button className = "btn btn-default equal-margin" onClick= {() => {this.props.dispatch({ type : 'INCREMENT_ASYNC' })}}>
				      Increment After 1 Second
				    </button>
				   	
				   	<br />
				    <button className = "btn btn-default equal-margin" onClick= { () => {this.props.dispatch({ type : 'INCREMENT' })}}>
				      Increment
				    </button>
				  	<br />
				    <button className = "btn btn-default equal-margin" onClick= { () => {this.props.dispatch({ type : 'DECREMENT' })}}>
				      Decrement
				    </button>

				    <div className = "equal-margin">
				    	Count : {this.props.count}
				    </div>
			  </div>
	)
  }
}

const mapStateToProps = (state) => {
  return state;
}
 // Clicked: {this.props.data} times

export default connect(mapStateToProps)(App);
