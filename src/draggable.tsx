import React from 'react';
import './App.css';

class Draggable extends React.Component<DraggableProp, DraggableState> {

    constructor(props: DraggableProp) {
        super(props);;
    }

    drag = (e: any) => {
        const data = e.dataTransfer.setData("transfer", e.target.id);
    }

    noAllowDrop = (e: any) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div id={this.props.id} draggable={this.props.isDraggable} onDragStart={this.drag} onDragOver={this.noAllowDrop} className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

interface DraggableProp {
    id : string,
    isDraggable: boolean,
    className: string,
    children: any,
}

interface DraggableState {
    id : string,
    style: any,
    children: any,
}

export default Draggable;