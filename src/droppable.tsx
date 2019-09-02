import React from 'react';

class Droppable extends React.Component<DroppableProp, DroppableState> {

    constructor(props: DroppableProp) {
        super(props);;
      }

    drop = (e: any) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("transfer");
        if (data && document.getElementById(data)) {
            e.target.appendChild(document.getElementById(data));
        }
    }

    allowDrop = (e: any) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} className="DroppableStype">
                {this.props.children}
            </div>
        );
    }
}

interface DroppableProp {
    id : string,
    children: any,
}

interface DroppableState {
    id : string,
    style: any,
    children: any,
}

export default Droppable;