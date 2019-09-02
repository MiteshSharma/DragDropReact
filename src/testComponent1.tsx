import React from 'react';
import './App.css';

class Test1 extends React.Component<TestProp, TestState> {

    constructor(props: TestProp) {
        super(props);;
      }
    
    render() {
        return (
            <div  id="test1" className="Test1Stype">
                Welcome
            </div>
        );
    }
}

interface TestProp {
}

interface TestState {
}

export default Test1;