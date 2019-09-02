import React from 'react';
import './App.css';

class Test extends React.Component<Test1Prop, TestState> {

    constructor(props: Test1Prop) {
        super(props);;
      }
    
    render() {
        return (
            <div id={this.props.id} className={this.props.className}>
                Welcome to the club
                {this.props.children}
            </div>
        );
    }
}

interface Test1Prop {
    id : string,
    className: string,
    children: any,
}

interface TestState {
}

export default Test;