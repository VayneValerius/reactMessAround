import React, { Component } from 'react';

export var changeVideo = 0; 

export default class Selection extends Component {
    render() {
        const {redRulesClick} = this.props;
        return (
            <div>
                <p>
                    Quick Survey.  Do you like Communism?
                </p>
                <button onClick = {() => redRulesClick(0)}> Yes </button>
                <button onClick = {() => redRulesClick(1)}> Stalin is Bae </button>    
                <button onClick = {() => redRulesClick(2)}> OHHHHH MOOTTTHHER RUSSSSSSIA!!! </button> 
            </div>
        )
    } 
}
