import React from 'react';
import logo from './logo.svg';
import './App.css';
import Droppable from './droppable';
import Draggable from './draggable';
import Test from './testComponent';
import Test1 from './testComponent1';
import MainComponent from './MainComponent'

const App: React.FC = () => {
  return (
    <div className="App">
      <MainComponent  id="item1" className="MainComponent">

      </MainComponent>
      <Droppable id="dr1">
            <Draggable id="item1" isDraggable={true} className="Item">
              <Test id="test" className="TestStype">
                <Test1></Test1>
              </Test>
        </Draggable>
      </Droppable>
      <Droppable id="dr2">
      </Droppable>
      <Droppable id="dr3">
      </Droppable>
      <Droppable id="dr4">
      </Droppable>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          Welcome
        </div>
      </header>
    </div>
  );
}

export default App;
